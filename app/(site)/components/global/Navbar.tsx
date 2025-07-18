"use client";
import Image from "next/image";
import { useEffect, useRef, RefObject, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { groq } from "next-sanity";
import { client } from "../../../../sanity/sanity.client";
import { useRecordVoice } from "../../../../components/useRecordVoice";
import { usePathname } from "next/navigation";
// import { supportsAspectRatio } from "@/utils/checkAspectRatioSupport";

const backgroundVariants = {
  open: {
    opacity: 1,
    y: 0,
    height: "100vh",
    transition: {
      // type: "spring", // Specifying spring type here
      stiffness: 260,
      damping: 20,
      staggerChildren: 0.4,
      duration: 0.5,
    },
  },
  closed: {
    opacity: 1,
    y: "-100%",
    height: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: {
    opacity: 1,
    y: "-100%",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const navVariants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15, duration: 0.3 }, // delayChildren starts the staggering after the menu opens
  },
  closed: {
    opacity: 0.4,
    transition: { staggerChildren: 3, staggerDirection: -1, duration: 0.5 }, // staggerDirection -1 makes the children animate in reverse order
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.2 },
  },
  closed: {
    opacity: 0,
    y: "-100%",
    transition: { duration: 0.2 },
  },
};

const query: string = groq`
      *[
    _type in ["service", "projects", "faq"] && (
      (_type == "service" && (serviceTitle match $searchText || serviceSummary match $searchText || serviceAsideList.summaryList[] match $searchText)) ||
      (_type == "projects" && (projectTitle match $searchText || projectSummary match $searchText || categories match $searchText)) ||
      (_type == "faq" && ( question match $searchText || answer match $searchText ))
    )
  ]{
        _type,
        "id": _id,
        "slug": slug.current,
        serviceTitle,
        serviceSummary,
        servicePageImage {alt, "image": asset->url},
        projectTitle,
        projectSummary,
        gallery {
          images[] {
            alt,
            "image": asset->url,
            asset->{_ref},
          }
        },
        categories,
        question,
        answer,
    }
  `;

const faqMainImageQuery = groq`*[_type == "innerPage"] {
  _id,
 FaqPage {
   pageImage {
       alt,
     "image": asset->url,
     asset {
       _ref
     },
     crop {
       _type,
       bottom,
       left,
       top,
       right
     },
     hotspot {
       _type,
       height,
       width,
       x,
       y
     }
   },
 }
}
`;
export type faqImageType = {
  FaqPage: {
    _id: string;
    pageImage: {
      alt: string;
      image: string;
      asset: {
        _ref: string;
      };
      crop: {
        _type: "sanity.imageCrop";
        bottom: number;
        left: number;
        right: number;
        top: number;
      };
      hotspot: {
        _type: "sanity.imageHotspot";
        height: number;
        width: number;
        x: number;
        y: number;
      };
    };
  };
};
interface SearchResultListProps {
  setSearchIsOpen: (isOpen: boolean) => void;
  results: any[];
  faqMainImage: faqImageType[] | null;
  searchTerm?: string;
}

const SearchResultList: React.FC<SearchResultListProps> = ({
  setSearchIsOpen,
  results,
  faqMainImage,
  searchTerm,
}) => {
  return (
    <>
      {results.map((result, index) => {
        // Determine the title and type label based on the document type
        const title =
          result._type === "service"
            ? result.serviceTitle
            : result.projectTitle;
        const projectCategories =
          result._type === "service" ? "" : result.categories;
        const typeLabel = result._type === "service" ? "services" : "projects";
        const faqQuestion = result._type === "faq" && result.question;
        const serviceThumbnail =
          result._type === "service" && result.servicePageImage.image;
        const projectThumbnail =
          result._type === "projects" && result.gallery.images[0].image;

        // Adjusting the Link component's href based on whether it's a service or a project
        // services results:
        if (result._type === "service") {
          // For services, navigate directly to the service page

          return (
            <Link
              key={index}
              onClick={() => setSearchIsOpen(false)}
              href={`/${typeLabel}/${result.slug}`}
            >
              <div className="flex gap-[2rem] items-center">
                <div className="relative min-w-[52px] max-w-[52px] min-h-[52px] max-h-[52px]  aspect-square">
                  <Image
                    src={serviceThumbnail}
                    height={52}
                    width={52}
                    alt="thumbnail services image"
                    className="grayscale object-cover h-full"
                  />
                </div>
                <div className="capitalize text-[1.6rem]">
                  <span>{typeLabel} / </span>
                  <span className="font-semibold">{title}</span>
                </div>
              </div>
            </Link>
          );
          // faq results:
        } else if (result._type === "faq") {
          // For services, navigate directly to the service page
          return (
            <Link
              key={index}
              onClick={() => setSearchIsOpen(false)}
              href={{
                pathname: "/faqs", // General projects page
                query: { searchTerm: searchTerm }, // Pass the filter in the query string
              }}
            >
              <div className="flex gap-[2rem] items-center">
                {faqMainImage &&
                  faqMainImage.map((img, index) => {
                    return (
                      <div
                        key={index}
                        className="relative min-w-[52px] max-w-[52px] min-h-[52px] max-h-[52px]  aspect-square"
                      >
                        <Image
                          src={img.FaqPage.pageImage.image}
                          width={52}
                          height={52}
                          alt={img.FaqPage.pageImage.image}
                          className="object-cover h-full"
                        />
                      </div>
                    );
                  })}

                <div className="capitalize text-[1.6rem]">
                  <span>FAQs / </span>
                  <span className="font-semibold">{faqQuestion}</span>
                </div>
              </div>
            </Link>
          );
          // projects results:
        } else {
          return (
            <Link
              key={index}
              onClick={() => setSearchIsOpen(false)}
              href={{
                pathname: "/projects", // General projects page
                query: { filter: result.id }, // Pass the filter in the query string
              }}
            >
              <div className="flex gap-[2rem] items-center">
                <div className="relative min-w-[52px] max-w-[52px] min-h-[52px] max-h-[52px] aspect-square">
                  <Image
                    src={projectThumbnail}
                    height={52}
                    width={52}
                    alt="thumbnail services image"
                    className="grayscale object-cover h-full"
                  />
                </div>
                <div className="capitalize text-[1.6rem]">
                  <span>{typeLabel} / </span>
                  <span className="font-semibold">{title}</span>
                </div>
              </div>
            </Link>
          );
        }
      })}
    </>
  );
};

function useOutsideClick(
  refs: RefObject<HTMLElement>[],
  callback: () => void
): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Check if click was outside every ref in refs
      const isClickOutsideRefs = refs.every((ref) => {
        return ref.current && !ref.current.contains(event.target as Node);
      });

      if (isClickOutsideRefs) {
        callback();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, callback]); // Ensure refs is part of the dependency array
}

const navLinks = [
  { name: "Home", href: "/", pageNumber: "01" },
  { name: "About", href: "/about", pageNumber: "02" },
  { name: "Services", href: "/services", pageNumber: "03" },
  { name: "Projects", href: "/projects", pageNumber: "04" },
  { name: "FAQ's", href: "/faqs", pageNumber: "05" },
  { name: "Contact", href: "/contact", pageNumber: "06" },
];

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [faqMainImage, setFaqMainImage] = useState(null);
  const searchRef = useRef(null); // Create a ref for the search element
  const searchFormRef = useRef(null); // Create a ref for the search element
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   if (!supportsAspectRatio()) {
  //     const banner = document.createElement("div");
  //     banner.className =
  //       "bg-red-500 text-white text-[1.4rem] p-2 text-center fixed w-full top-0 left-0 z-50";
  //     banner.textContent =
  //       "For an enhanced user experience, please consider using a more up-to-date device.";
  //     document.body.appendChild(banner);
  //   }
  // }, []);

  const {
    recording,
    startRecording,
    stopRecording,
    transcript,
    isSpeechRecognitionSupported,
    // initializeRecording, //
  } = useRecordVoice();
  const [isRecording, setIsRecording] = useState(false); // Local state to manage recording

  useEffect(() => {
    // Reset hover state when the route changes
    setHoveredLink(null);
  }, [pathname]);

  const handleToggleRecording = () => {
    if (!isRecording) {
      startRecording(); // Start the recording
      setIsRecording(true); // Update local state to indicate recording has started

      // Set a timer to automatically stop the recording after 2 seconds
      setTimeout(() => {
        stopRecording(); // Stop the recording
        setIsRecording(false); // Update local state to indicate recording has stopped
      }, 3000); // Wait for 2000 milliseconds (2 seconds) before stopping
    } else {
      // If the recording is already in progress and the button is pressed,
      // you might want to stop the recording immediately or ignore the button press.
      // Depending on your use case, you can handle it here.
      // For example, to stop recording immediately if the button is pressed again:
      stopRecording();
      setIsRecording(false); // Update local state to indicate recording has stopped
    }
  };

  useEffect(() => {
    // console.log("Transcript updated:", transcript); // Debugging
    if (transcript.trim().length > 0) {
      setSearchText(transcript);
      setSearchIsOpen(true);
      setIsLoading(true);
      // console.log("Search should be open now"); // Debugging
    }
  }, [transcript]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchIsOpen(true); // Optionally open the search UI here
    setSearchText(e.target.value); // Update searchText with input field value
  };

  useEffect(() => {
    // Fetch and set the main FAQ image when the component mounts
    const fetchFaqMainImage = async () => {
      const image = await client.fetch(faqMainImageQuery);
      setFaqMainImage(image);
    };

    fetchFaqMainImage();
  }, []);

  useOutsideClick([searchRef, searchFormRef], () => {
    if (searchIsOpen) {
      setSearchIsOpen(false); // Close the search area when clicked outside
    }
  });

  // search states
  const fetchResults = async () => {
    setIsLoading(true);
    const results = await client.fetch(query, {
      searchText: `*${searchText}*`,
    });

    setResults(results);
    setIsLoading(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchText.trim().length >= 3) {
        fetchResults();
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [searchText]);

  const handleSearchButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    // Check if the screen width is less than 640px (TailwindCSS's 'sm' breakpoint)
    if (window.matchMedia("(min-width: 512px)").matches) {
      // If true, focus the search input instead of toggling the motion.div
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    } else {
      // Otherwise, toggle the motion.div visibility
      setSearchIsOpen(!searchIsOpen);
    }
  };

  return (
    <div
      className={`main__navbar z-50 small:fixed top-0 left-0 w-full bg-white ${
        searchIsOpen || isOpen ? "fixed" : "fixed"
      }`}
    >
      <header className=" relative tracking-[0.06em]">
        <div className="relative z-50 max-w-screen-large mx-auto py-[1.2rem] xsmall:py-[2.7rem] bg-[#fff]">
          <div className="flex items-center justify-between h-20 px-[5%] small:px-layout-small">
            <div className="w-[154px] max-w-[155px] xsmall:w-[clamp(120px, 8vw, 172px)] xsmall:w-full">
              <Link href="/" aria-label="home">
                {/* header-logo */}
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 156 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M61.1417 40.6506V14.1307H68.2493C72.4405 14.1307 75.1143 16.8182 75.1143 21.9091V23.3239C75.1143 28.4858 72.4405 31.2813 68.2493 31.2813H66.1537V40.6506H61.1417ZM66.1537 19.0795V26.3295H68.0067C69.4649 26.3295 70.3138 25.375 70.3138 22.9716V22.2642C70.3138 19.9318 69.4621 19.0824 68.0067 19.0824H66.1537V19.0795Z"
                      fill="#1D1D1B"
                    />
                    <path
                      d="M89.1178 40.6506H77.757V14.1307H89.1178V19.2585H82.862V24.5625H88.5114V29.6903H82.862V35.5256H89.1178V40.6534V40.6506Z"
                      fill="#1D1D1B"
                    />
                    <path
                      d="M92.0624 40.6506V14.1307H99.655C103.542 14.1307 106.368 16.5341 106.368 21.0256V22.0511C106.368 25.3409 104.85 27.4602 102.54 28.3807L106.943 40.6506H101.263L97.1618 27.6023V40.6506H92.0595H92.0624ZM97.1646 19.0795V25.8693H98.9556C100.383 25.8693 101.266 24.9148 101.266 22.5455V22.0511C101.266 19.858 100.386 19.0795 98.9556 19.0795H97.1646Z"
                      fill="#1D1D1B"
                    />
                    <path
                      d="M120.645 40.6506H109.284V14.1307H114.448V35.5227H120.645V40.6506Z"
                      fill="#1D1D1B"
                    />
                    <path
                      d="M122.983 40.6506V14.1307H128.147V40.6506H122.983Z"
                      fill="#1D1D1B"
                    />
                    <path
                      d="M142.391 36.4432V14.1307H146.582V40.6506H139.11L135.889 17.9858V40.6506H131.698V14.1307H139.17L142.391 36.4432Z"
                      fill="#1D1D1B"
                    />
                    <path
                      d="M150.138 40.6506V14.1307H155.303V40.6506H150.138Z"
                      fill="#1D1D1B"
                    />
                    <path
                      d="M0.299805 14.1932V40.5142L5.57688 43.5V32.1222L18.4748 39.4403L19.2307 39.8807V24.9119L0.299805 14.1932ZM13.7985 27.9403V30.6875L5.57688 26.0256V23.2784L13.7985 27.9403Z"
                      fill="#1D1D1B"
                    />
                    <path
                      d="M25.839 1.94034L23.4078 0.551136L23.3091 0.5H23.0975L3.48974 11.625L8.86271 14.679L15.1128 11.1392L29.4943 19.2869L42.9761 11.6477L25.839 1.94034ZM32.1822 11.6335L29.469 13.1733L20.4971 8.08807L23.2104 6.5483L32.1822 11.6335Z"
                      fill="#1D1D1B"
                    />
                    <path
                      d="M22.8268 27.4034V47.1733L9.30552 39.5085V45.608L23.2273 53.5L28.1039 50.7301V30.5142L31.8156 28.4119V48.6278L37.0927 45.6307V25.4233L40.8213 23.304V43.5171L46.104 40.5227V14.2102L22.8268 27.4034Z"
                      fill="#1D1D1B"
                    />
                  </g>
                </svg>
              </Link>
            </div>

            {/* ====== desktop nav ====== */}
            <div className="flex items-center">
              <div className="hidden small:block">
                <nav>
                  <ul className="nav__link__list flex items-center justify-between w-[45vw] max-w-[645px] uppercase font-[400] font-sans text-[rgba(47,48,71,90%)] text-[clamp(1.1rem,1vw,1.4rem)] small:pl-[1.9rem]">
                    {navLinks.map((link) => {
                      let isActive = pathname === link.href;
                      if (!isActive && link.href !== "/") {
                        isActive = pathname.includes(link.href.split("/")[1]);
                      }
                      // Override isActive if this link is hovered or another link is being hovered
                      if (hoveredLink !== null) {
                        isActive = hoveredLink === link.href;
                      }

                      return (
                        <li
                          key={link.pageNumber}
                          onMouseEnter={() => setHoveredLink(link.href)}
                          onMouseLeave={() => setHoveredLink(null)}
                        >
                          <Link href={link.href} className="">
                            <div
                              className={`${
                                isActive && "nav__item__active"
                              } nav__item__link pr-[clamp(0rem,0.3vw,0.4rem)] text-right`}
                            >
                              <span className="font-semibold px-[0.4rem]">
                                {link.pageNumber}{" "}
                              </span>
                              {link.name}
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>

            {/* ==== nav extras ==== */}
            <div className="flex gap-[1rem]">
              <form
                ref={searchFormRef}
                className="nav-search-form relative flex flex-col justify-center gap-8 xsmall:justify-end xsmall:mr-8 xsmall:gap-4 xsmall:flex-row small:w-fit small:mr-0"
                // onSubmit={handleSubmit}
              >
                <div className="button__link__bg__block">
                  <svg
                    className={`button__link__svg button__link__svg__small fill-[rgba(230,230,231,0.3)] -z-0 duration-300`}
                    preserveAspectRatio="none"
                    viewBox="0 0 175 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M173.229 1V43.2227L162.849 49H1.54785V6.74023L11.8662 1H173.229Z"
                      stroke="none"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>

                  {/* 200 */}
                  <svg
                    className={`button__link__svg button__link__svg__200fill-[rgba(230,230,231,0.3)] -z-0 duration-300`}
                    preserveAspectRatio="none"
                    viewBox="0 0 211 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M209.389 1.5V43.7178L198.82 49.5H1.38867V7.24512L11.8936 1.5H209.389Z"
                      stroke="none"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>

                  {/* 300 */}
                  <svg
                    className={`button__link__svg button__link__svg__300 fill-[rgba(230,230,231,0.3)] -z-0 duration-300`}
                    preserveAspectRatio="none"
                    viewBox="0 0 311 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M310 1V43.2256L299.739 49H1V6.73828L11.2617 1H310Z"
                      stroke="none"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>

                  {/* 400 */}
                  <svg
                    className={`button__link__svg button__link__svg__400 fill-[rgba(230,230,231,0.3)] -z-0 duration-300`}
                    preserveAspectRatio="none"
                    viewBox="0 0 401 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M400 1V43.2295L389.876 49H1V6.73828L11.2617 1H400Z"
                      stroke="none"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>

                  {/* 500 */}
                  <svg
                    className={`button__link__svg button__link__svg__500 fill-[rgba(230,230,231,0.3)] -z-0 duration-300`}
                    preserveAspectRatio="none"
                    viewBox="0 0 512 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M510.275 1V43.2178L499.707 49H1V6.74512L11.5049 1H510.275Z"
                      stroke="none"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>

                <div className="flex items-center gap-[1rem]">
                  <div className="xsmall:absolute top-0 left-0 xsmall:left-[3%] h-full w-auto">
                    {/* magnifying glass button */}
                    <button
                      className={`relative h-full aspect-square flex justify-center items-center opacity-30 ${
                        searchIsOpen && "cursor-default"
                      }  `}
                      aria-label="Search"
                      onClick={handleSearchButtonClick}
                    >
                      <span className="h-[2.8rem] aspect-square xsmall:h-[3.2rem] small:h-[2rem]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.97495 15.25C7.73388 15.25 6.52067 14.882 5.48875 14.1925C4.45683 13.503 3.65255 12.523 3.17761 11.3764C2.70267 10.2297 2.5784 8.96805 2.82053 7.75082C3.06265 6.53359 3.66028 5.41549 4.53786 4.53792C5.41543 3.66035 6.53353 3.06271 7.75076 2.82059C8.96799 2.57847 10.2297 2.70273 11.3763 3.17767C12.5229 3.65261 13.5029 4.45689 14.1924 5.48881C14.8819 6.52073 15.25 7.73394 15.25 8.97502C15.25 9.79906 15.0876 10.615 14.7723 11.3764C14.4569 12.1377 13.9947 12.8294 13.4121 13.4121C12.8294 13.9948 12.1376 14.457 11.3763 14.7724C10.615 15.0877 9.799 15.25 8.97495 15.25ZM8.97495 3.95835C7.98605 3.95835 7.01935 4.25159 6.1971 4.801C5.37486 5.35041 4.73399 6.1313 4.35556 7.04493C3.97712 7.95856 3.8781 8.96389 4.07103 9.9338C4.26395 10.9037 4.74016 11.7946 5.43942 12.4939C6.13868 13.1931 7.0296 13.6693 7.9995 13.8623C8.96941 14.0552 9.97474 13.9562 10.8884 13.5777C11.802 13.1993 12.5829 12.5584 13.1323 11.7362C13.6817 10.914 13.975 9.94726 13.975 8.95835C13.975 7.63227 13.4482 6.3605 12.5105 5.42281C11.5728 4.48513 10.301 3.95835 8.97495 3.95835Z"
                            fill="#231F20"
                          />
                          <path
                            d="M16.6667 17.2917C16.5846 17.2921 16.5032 17.276 16.4273 17.2446C16.3515 17.2131 16.2827 17.1668 16.225 17.1083L12.7833 13.6667C12.6729 13.5482 12.6128 13.3915 12.6157 13.2296C12.6186 13.0677 12.6841 12.9132 12.7987 12.7987C12.9132 12.6841 13.0677 12.6186 13.2296 12.6157C13.3915 12.6128 13.5482 12.6729 13.6667 12.7833L17.1083 16.225C17.2254 16.3422 17.2911 16.5011 17.2911 16.6667C17.2911 16.8323 17.2254 16.9912 17.1083 17.1083C17.0506 17.1668 16.9818 17.2131 16.906 17.2446C16.8302 17.276 16.7488 17.2921 16.6667 17.2917Z"
                            fill="#231F20"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className="xsmall:absolute top-0 right-0 h-full w-auto">
                    {/* microphone button */}
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        handleToggleRecording();
                      }}
                      className="h-full aspect-square flex justify-center items-center opacity-30"
                      aria-label="Voice Search"
                    >
                      <span className="h-[2.8rem] aspect-square xsmall:h-[3.2rem] small:h-[2rem]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.74134 13.457H10.258C11.4913 13.457 12.483 12.432 12.483 11.1654V4.9987C12.483 3.73203 11.483 2.70703 10.258 2.70703H9.74134C8.50801 2.70703 7.51634 3.73203 7.51634 4.9987V11.157C7.51634 12.4237 8.51634 13.4487 9.74134 13.4487V13.457ZM8.76634 4.9987C8.76634 4.4237 9.20801 3.95703 9.74134 3.95703H10.258C10.7997 3.95703 11.233 4.4237 11.233 4.9987V11.157C11.233 11.732 10.7913 12.1987 10.258 12.1987H9.74134C9.19967 12.1987 8.76634 11.732 8.76634 11.157V4.9987ZM14.7913 7.8237V11.3487C14.7913 13.6904 12.9413 15.5904 10.6247 15.707V17.2904C10.6247 17.632 10.3413 17.9154 9.99967 17.9154C9.65801 17.9154 9.37467 17.632 9.37467 17.2904V15.707C7.05801 15.5904 5.20801 13.6904 5.20801 11.3487V7.8237C5.20801 7.48203 5.49134 7.1987 5.83301 7.1987C6.17467 7.1987 6.45801 7.48203 6.45801 7.8237V11.3487C6.45801 13.0737 7.86634 14.482 9.59968 14.482H10.408C12.1413 14.482 13.5497 13.0737 13.5497 11.3487V7.8237C13.5497 7.48203 13.833 7.1987 14.1747 7.1987C14.5163 7.1987 14.7997 7.48203 14.7997 7.8237H14.7913Z"
                            fill={`${isRecording ? "#f80914" : "#2F3047"} `}
                          />
                        </svg>{" "}
                      </span>
                    </button>
                  </div>
                </div>

                <input
                  type="search"
                  placeholder="Search"
                  ref={searchInputRef}
                  value={searchText} // Controlled by searchText state
                  onChange={handleInputChange} // Updates searchText state on change
                  className="site__search--input relative p-4 hidden xsmall:block bg-transparent text-left pl-[4.9rem] text-theme-dark rounded-sm w-full  text-[1.4rem] tracking-[0.06em] xsmall:w-[clamp(100px,40vw,323px)] before:absolute before:top-0 before:left-0 before:w-[3rem] before:content-none font-sans small:w-[clamp(150px,15vw,214px)] h-[4.8rem] max-h-[4.8rem] border-0 focus:ring-0 focus:outline-none transition duration-300 ease-out"
                />
              </form>

              {/* == MOBILE MENU OPEN/CLOSE BUTTONS == */}

              <div className="-mr-2 flex small:hidden">
                {/* SEARCH ONLY CLOSE BUTTON */}
                {searchIsOpen && (
                  <button
                    onClick={() => setSearchIsOpen(!searchIsOpen)}
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-theme_black-900 hover:bg-theme_dark_orange-900 z-40 bg-[#fff]"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    {" "}
                    <span className="sr-only"> close search menu</span>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.7667 19.9999L29.1333 12.6333C29.2561 12.5188 29.3546 12.3808 29.423 12.2275C29.4913 12.0742 29.528 11.9086 29.531 11.7408C29.5339 11.573 29.5031 11.4062 29.4402 11.2506C29.3773 11.095 29.2838 10.9536 29.1651 10.8349C29.0464 10.7162 28.905 10.6226 28.7493 10.5597C28.5937 10.4969 28.427 10.466 28.2591 10.4689C28.0913 10.4719 27.9258 10.5086 27.7724 10.577C27.6191 10.6453 27.4811 10.7438 27.3667 10.8666L20 18.2333L12.6333 10.8666C12.3964 10.6458 12.083 10.5256 11.7591 10.5313C11.4353 10.537 11.1263 10.6682 10.8973 10.8972C10.6683 11.1262 10.5371 11.4352 10.5314 11.7591C10.5257 12.0829 10.6459 12.3963 10.8667 12.6333L18.2333 19.9999L10.8667 27.3666C10.6326 27.601 10.5011 27.9187 10.5011 28.2499C10.5011 28.5812 10.6326 28.8989 10.8667 29.1333C11.101 29.3673 11.4187 29.4988 11.75 29.4988C12.0812 29.4988 12.399 29.3673 12.6333 29.1333L20 21.7666L27.3667 29.1333C27.601 29.3673 27.9187 29.4988 28.25 29.4988C28.5813 29.4988 28.899 29.3673 29.1333 29.1333C29.3674 28.8989 29.4989 28.5812 29.4989 28.2499C29.4989 27.9187 29.3674 27.601 29.1333 27.3666L21.7667 19.9999Z"
                        fill="#2F3047"
                      />
                    </svg>
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className={`${
                    searchIsOpen && "hidden"
                  } w-[3.8rem] block xsmall:w-[4rem] aspect-square items-center justify-center p-[0.2rem] rounded-md text-theme_black-900 hover:bg-theme_dark_orange-900`}
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.3333 17.917H16.6667C16.3351 17.917 16.0172 17.7853 15.7828 17.5509C15.5484 17.3165 15.4167 16.9985 15.4167 16.667C15.4167 16.3355 15.5484 16.0175 15.7828 15.7831C16.0172 15.5487 16.3351 15.417 16.6667 15.417H33.3333C33.6648 15.417 33.9828 15.5487 34.2172 15.7831C34.4516 16.0175 34.5833 16.3355 34.5833 16.667C34.5833 16.9985 34.4516 17.3165 34.2172 17.5509C33.9828 17.7853 33.6648 17.917 33.3333 17.917Z"
                        fill="#2F3047"
                      />
                      <path
                        d="M33.45 11.25H6.78333C6.4518 11.25 6.13386 11.1183 5.89944 10.8839C5.66502 10.6495 5.53333 10.3315 5.53333 10C5.53333 9.66848 5.66502 9.35054 5.89944 9.11612C6.13386 8.8817 6.4518 8.75 6.78333 8.75H33.45C33.7815 8.75 34.0995 8.8817 34.3339 9.11612C34.5683 9.35054 34.7 9.66848 34.7 10C34.7 10.3315 34.5683 10.6495 34.3339 10.8839C34.0995 11.1183 33.7815 11.25 33.45 11.25Z"
                        fill="#2F3047"
                      />
                      <path
                        d="M33.45 24.583H6.78333C6.4518 24.583 6.13386 24.4513 5.89944 24.2169C5.66502 23.9825 5.53333 23.6645 5.53333 23.333C5.53333 23.0015 5.66502 22.6835 5.89944 22.4491C6.13386 22.2147 6.4518 22.083 6.78333 22.083H33.45C33.7815 22.083 34.0995 22.2147 34.3339 22.4491C34.5683 22.6835 34.7 23.0015 34.7 23.333C34.7 23.6645 34.5683 23.9825 34.3339 24.2169C34.0995 24.4513 33.7815 24.583 33.45 24.583Z"
                        fill="#2F3047"
                      />
                      <path
                        d="M33.3333 31.25H16.6667C16.3351 31.25 16.0172 31.1183 15.7828 30.8839C15.5484 30.6495 15.4167 30.3315 15.4167 30C15.4167 29.6685 15.5484 29.3505 15.7828 29.1161C16.0172 28.8817 16.3351 28.75 16.6667 28.75H33.3333C33.6648 28.75 33.9828 28.8817 34.2172 29.1161C34.4516 29.3505 34.5833 29.6685 34.5833 30C34.5833 30.3315 34.4516 30.6495 34.2172 30.8839C33.9828 31.1183 33.6648 31.25 33.3333 31.25Z"
                        fill="#2F3047"
                      />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.7667 19.9999L29.1333 12.6333C29.2561 12.5188 29.3546 12.3808 29.423 12.2275C29.4913 12.0742 29.528 11.9086 29.531 11.7408C29.5339 11.573 29.5031 11.4062 29.4402 11.2506C29.3773 11.095 29.2838 10.9536 29.1651 10.8349C29.0464 10.7162 28.905 10.6226 28.7493 10.5597C28.5937 10.4969 28.427 10.466 28.2591 10.4689C28.0913 10.4719 27.9258 10.5086 27.7724 10.577C27.6191 10.6453 27.4811 10.7438 27.3667 10.8666L20 18.2333L12.6333 10.8666C12.3964 10.6458 12.083 10.5256 11.7591 10.5313C11.4353 10.537 11.1263 10.6682 10.8973 10.8972C10.6683 11.1262 10.5371 11.4352 10.5314 11.7591C10.5257 12.0829 10.6459 12.3963 10.8667 12.6333L18.2333 19.9999L10.8667 27.3666C10.6326 27.601 10.5011 27.9187 10.5011 28.2499C10.5011 28.5812 10.6326 28.8989 10.8667 29.1333C11.101 29.3673 11.4187 29.4988 11.75 29.4988C12.0812 29.4988 12.399 29.3673 12.6333 29.1333L20 21.7666L27.3667 29.1333C27.601 29.3673 27.9187 29.4988 28.25 29.4988C28.5813 29.4988 28.899 29.3673 29.1333 29.1333C29.3674 28.8989 29.4989 28.5812 29.4989 28.2499C29.4989 27.9187 29.3674 27.601 29.1333 27.3666L21.7667 19.9999Z"
                        fill="#2F3047"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========= search results ======== */}
        <AnimatePresence>
          {searchIsOpen && (
            <motion.div
              className="h-screen absolute top-[7rem] left-0 w-full z-[45]"
              initial="closed"
              animate="open"
              exit="exit"
              ref={searchRef}
              variants={backgroundVariants}
              style={{ visibility: "hidden" }}
            >
              <motion.div
                variants={navVariants}
                className={`${
                  searchIsOpen ? "visible" : "invisible"
                } absolute left-0 w-full h-full py-20 px-[5%] flex flex-col justify-start gap-[3rem] bg-white items-start uppercase font-normal font-sans text-[2.4rem] text-[rgba(47,48,71,90%)] z-30 small:w-fit small:h-fit small:right-0 small:left-auto small:px-[4rem] small:mr-layout-small overflow-auto`}
              >
                {/* form in mobile view */}
                <form className="xsmall:hidden nav-search-form relative flex justify-end flex-row w-full ">
                  {/* search form icons */}
                  <div className="flex items-center gap-[1rem] bg-red">
                    <div className="absolute top-0 left-0 h-full w-auto">
                      {/* magnifying glass button */}
                      <button
                        className="h-full aspect-square flex justify-center items-center cursor-default"
                        onClick={(event) => {
                          event.preventDefault();
                        }}
                      >
                        <span className="h-[3.2rem] w-[3.2rem] xsmall:h-[2rem] xsmall:w-[2rem]">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.97495 15.25C7.73388 15.25 6.52067 14.882 5.48875 14.1925C4.45683 13.503 3.65255 12.523 3.17761 11.3764C2.70267 10.2297 2.5784 8.96805 2.82053 7.75082C3.06265 6.53359 3.66028 5.41549 4.53786 4.53792C5.41543 3.66035 6.53353 3.06271 7.75076 2.82059C8.96799 2.57847 10.2297 2.70273 11.3763 3.17767C12.5229 3.65261 13.5029 4.45689 14.1924 5.48881C14.8819 6.52073 15.25 7.73394 15.25 8.97502C15.25 9.79906 15.0876 10.615 14.7723 11.3764C14.4569 12.1377 13.9947 12.8294 13.4121 13.4121C12.8294 13.9948 12.1376 14.457 11.3763 14.7724C10.615 15.0877 9.799 15.25 8.97495 15.25ZM8.97495 3.95835C7.98605 3.95835 7.01935 4.25159 6.1971 4.801C5.37486 5.35041 4.73399 6.1313 4.35556 7.04493C3.97712 7.95856 3.8781 8.96389 4.07103 9.9338C4.26395 10.9037 4.74016 11.7946 5.43942 12.4939C6.13868 13.1931 7.0296 13.6693 7.9995 13.8623C8.96941 14.0552 9.97474 13.9562 10.8884 13.5777C11.802 13.1993 12.5829 12.5584 13.1323 11.7362C13.6817 10.914 13.975 9.94726 13.975 8.95835C13.975 7.63227 13.4482 6.3605 12.5105 5.42281C11.5728 4.48513 10.301 3.95835 8.97495 3.95835Z"
                              fill="#231F20"
                            />
                            <path
                              d="M16.6667 17.2917C16.5846 17.2921 16.5032 17.276 16.4273 17.2446C16.3515 17.2131 16.2827 17.1668 16.225 17.1083L12.7833 13.6667C12.6729 13.5482 12.6128 13.3915 12.6157 13.2296C12.6186 13.0677 12.6841 12.9132 12.7987 12.7987C12.9132 12.6841 13.0677 12.6186 13.2296 12.6157C13.3915 12.6128 13.5482 12.6729 13.6667 12.7833L17.1083 16.225C17.2254 16.3422 17.2911 16.5011 17.2911 16.6667C17.2911 16.8323 17.2254 16.9912 17.1083 17.1083C17.0506 17.1668 16.9818 17.2131 16.906 17.2446C16.8302 17.276 16.7488 17.2921 16.6667 17.2917Z"
                              fill="#231F20"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>

                    <div className="absolute top-0 bottom-0 right-[7%] h-full w-auto my-auto">
                      {/* close search button */}
                      <button
                        className=" hidden h-full aspect-square flex justify-center items-center"
                        onClick={(event) => {
                          event.preventDefault();
                          setSearchIsOpen(!searchIsOpen);
                        }}
                      >
                        <span className="">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.7667 19.9999L29.1333 12.6333C29.2561 12.5188 29.3546 12.3808 29.423 12.2275C29.4913 12.0742 29.528 11.9086 29.531 11.7408C29.5339 11.573 29.5031 11.4062 29.4402 11.2506C29.3773 11.095 29.2838 10.9536 29.1651 10.8349C29.0464 10.7162 28.905 10.6226 28.7493 10.5597C28.5937 10.4969 28.427 10.466 28.2591 10.4689C28.0913 10.4719 27.9258 10.5086 27.7724 10.577C27.6191 10.6453 27.4811 10.7438 27.3667 10.8666L20 18.2333L12.6333 10.8666C12.3964 10.6458 12.083 10.5256 11.7591 10.5313C11.4353 10.537 11.1263 10.6682 10.8973 10.8972C10.6683 11.1262 10.5371 11.4352 10.5314 11.7591C10.5257 12.0829 10.6459 12.3963 10.8667 12.6333L18.2333 19.9999L10.8667 27.3666C10.6326 27.601 10.5011 27.9187 10.5011 28.2499C10.5011 28.5812 10.6326 28.8989 10.8667 29.1333C11.101 29.3673 11.4187 29.4988 11.75 29.4988C12.0812 29.4988 12.399 29.3673 12.6333 29.1333L20 21.7666L27.3667 29.1333C27.601 29.3673 27.9187 29.4988 28.25 29.4988C28.5813 29.4988 28.899 29.3673 29.1333 29.1333C29.3674 28.8989 29.4989 28.5812 29.4989 28.2499C29.4989 27.9187 29.3674 27.601 29.1333 27.3666L21.7667 19.9999Z"
                              fill="#2F3047"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>

                  <input
                    type="search"
                    placeholder="Search"
                    onChange={(e) => {
                      setSearchText(e.target.value);
                    }}
                    className="site__search--input p-4 bg-[rgba(230,230,231,0.3)] text-left pl-[20%] text-theme-dark rounded-sm w-full  text-[1.4rem] tracking-[0.06em] xsmall:w-[clamp(100px,40vw,323px)] before:absolute before:top-0 before:left-0 before:w-[3rem] before:content-none font-sans small:w-[clamp(150px,15vw,214px)] h-[4.8rem] max-h-[4.8rem] focus:bg-white border-0 focus:ring-0 focus:outline-none transition duration-300 ease-out"
                  />
                </form>
                <SearchResultList
                  results={results}
                  setSearchIsOpen={setSearchIsOpen}
                  faqMainImage={faqMainImage} // Pass the main FAQ image as a prop
                  searchTerm={searchText}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =========  mobile nav dropdown ======== */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="small:hidden h-screen absolute top-[7rem] left-0 w-full z-40"
              initial="closed"
              animate="open"
              exit="exit"
              variants={backgroundVariants}
            >
              <motion.ul
                variants={navVariants} // Control the staggering here
                className="absolute left-0 w-full h-full px-2 py-20 sm:px-3 flex flex-col justify-start gap-[1.7rem] bg-white items-center uppercase font-normal font-sans text-[1.9rem] text-[rgba(47,48,71,90%)] z-30"
              >
                {[
                  "Home",
                  "About",
                  "Services",
                  "Projects",
                  "FAQs",
                  "Contact",
                ].map((text, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <Link
                      href={
                        text.includes("Home")
                          ? "/"
                          : `/${text.toLowerCase().replace(" ", "")}`
                      }
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <div className="flex flex-col justify-center text-center">
                        <span className="font-bold">0{`${index + 1}`}</span>
                        {text.includes("About") ? (
                          <span>{text} us</span>
                        ) : text.includes("FAQs") ? (
                          <span>FAQ's</span>
                        ) : (
                          <span>{text}</span>
                        )}
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}

export default Navbar;

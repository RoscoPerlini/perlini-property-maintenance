"use client";

import { useEffect, useState } from "react";
import AccordionTemplate from "./AccordionTemplate";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { PortableTextBlock } from "sanity";

interface Faq {
  _id: string;
  question: string;
  answer: PortableTextBlock[];
}

export default function FaqSearch({
  placeholder,
  faqs,
}: {
  placeholder: string;
  faqs: any[];
}) {
  const [query, setQuery] = useState("");
  const [iteration, setIteration] = useState(8);
  const [filteredFaqs, setFilteredFaqs] = useState<Faq[]>([]);
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("searchTerm");
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Check if filterParam is not null or undefined before setting it
    if (filterParam) {
      setQuery(filterParam);
    }
  }, [filterParam]);

  useEffect(() => {
    // Only scroll on the initial load if the searchTerm is present
    if (isInitialLoad && filterParam) {
      setTimeout(() => {
        const element = document.getElementById("scroll__to__search");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          // After scrolling, set isInitialLoad to false to prevent future scrolls
          setIsInitialLoad(false);
        }
      }, 250); // Adjust delay as needed, but keep it as short as possible
    }
    // This effect should run only once on mount, hence the empty dependency array
  }, []);

  useEffect(() => {
    const searchFilter = (array: any[]) => {
      return array.filter(
        (el) =>
          el.question.toLowerCase().includes(query.toLowerCase()) ||
          el.answer[0].children[0].text
            .toLowerCase()
            .includes(query.toLowerCase())
      );
    };

    const updatedFilteredFaqs = searchFilter(faqs);
    setFilteredFaqs(updatedFilteredFaqs);
  }, [query, faqs]);

  const uniqueFilteredFaqs = Array.from(
    new Set(filteredFaqs.map((faq) => faq._id))
  ).map((_id) => {
    return filteredFaqs.find((faq) => faq._id === _id);
  });

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <Suspense fallback={<div>Loading search parameters...</div>}>
      <section className="relative mb-[-7.6rem] xsmall:mb-[-7.2rem] small:mb-[-10rem] py-[4rem] xsmall:py-[4rem] xsmall:w-[95%] xsmall:mx-auto small:py-[6rem] after:absolute after:content-[''] after:w-full after:h-full after:bg-white after:top-0 after:left-0 after:z-10">
        <svg
          className="about-color-border absolute inset-0 w-full h-full pointer-events-none -translate-y-[13.2rem] xsmall:-translate-y-[7.8rem] small:-translate-y-[14.6rem] xsmall:max-w-[calc(700px+56px)] small:max-w-[calc(800px+56px)] left-0 right-0 mx-auto mix-blend-color-dodge top-0 bottom-0 m-auto "
          viewBox="0 0 1121 286"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="28"
            y="28"
            width="1065"
            height="230"
            stroke="url(#paint0_linear_97_10568)"
            strokeOpacity="0.5"
            strokeWidth="56"
            style={{ mixBlendMode: "color-dodge" }}
          />
          <defs>
            <linearGradient
              id="paint0_linear_97_10568"
              x1="1137.82"
              y1="21.2658"
              x2="898.985"
              y2="591.427"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.161927" stopColor="#4804F8" />
              <stop offset="0.375" stopColor="#FF4A1D" />
              <stop offset="0.635417" stopColor="#F9BA17" />
              <stop offset="0.978225" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="about-color-border absolute inset-0 w-full h-full pointer-events-none -translate-y-[13.2rem] xsmall:-translate-y-[7.8rem] small:-translate-y-[14.6rem] xsmall:max-w-[calc(700px+56px)] small:max-w-[calc(800px+56px)] left-0 right-0 mx-auto mix-blend-color-dodge top-0 bottom-0 m-auto "
          viewBox="0 0 1121 286"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="28"
            y="28"
            width="1065"
            height="230"
            stroke="url(#paint0_linear_97_10568)"
            strokeOpacity="0.5"
            strokeWidth="56"
            style={{ mixBlendMode: "color-dodge" }}
          />
          <defs>
            <linearGradient
              id="paint0_linear_97_10568"
              x1="1137.82"
              y1="21.2658"
              x2="898.985"
              y2="591.427"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.161927" stopColor="#4804F8" />
              <stop offset="0.375" stopColor="#FF4A1D" />
              <stop offset="0.635417" stopColor="#F9BA17" />
              <stop offset="0.978225" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div
          className="feature-text relative z-30 overflow-hidden bg-white mx-auto w-[90%] xsmall:-translate-y-[7.8rem] -translate-y-[13.2em] pt-[3.5rem] pb-[2.5rem] xsmall:py-[4rem] small:py-[5.8rem] small:-translate-y-[14.6rem] xsmall:max-w-[700px] small:max-w-[800px]"
          style={{
            boxShadow: "0px 32px 64px -12px rgba(16, 24, 40, 0.44)",
          }}
        >
          <div className="text-white px-[7%] xsmall:px-[4rem] flex justify-center items-center w-full h-full ">
            <form
              className="relative flex flex-col justify-center w-full gap-[4rem] xsmall:gap-4 xsmall:justify-between xsmall:items-center xsmall:flex-row small:w-fit"
              onSubmit={handleSubmit}
            >
              <span className="hidden xsmall:block absolute top-0 bottom-0 my-auto -left-[1rem] h-[3.5rem] w-[3.5rem] ml-[clamp(0rem,1vw,1rem)]">
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
              <input
                type="search"
                placeholder={placeholder}
                value={query}
                id="scroll__to__search"
                onChange={handleInput}
                className={`p-4 bg-white placeholder:text-theme-dark placeholder:text-opacity-40 focus:text-theme-dark text-theme-dark text-center placeholder:uppercase placeholder:text-[1.8rem] xsmall:placeholder:text-[clamp(1rem,2.4vw,1.8rem)] rounded-sm w-full font-headings text-[1.8rem] tracking-[0.12em] xsmall:w-[clamp(290px,54vw,500px)] placeholder:font-[500] xsmall:placeholder:text-left xsmall:placeholder:pl-[2rem] small:placeholder:pl-[3rem] placeholder:text-center xsmall:text-left h-[4.8rem] focus:bg-white border-0 focus:ring-0 focus:outline-none transition duration-300 ease-out xsmall:pl-[5rem]`}
              />
              <button
                type="submit"
                className="relative w-full text-theme-dark bg-white border-2 border-theme-dark rounded-sm cursor-pointer font-headings h-[5rem] font-[600] p-4 uppercase text-[1.6rem] tracking-[0.06em] xsmall:w-[17.6rem]"
              >
                <span className="xsmall:hidden absolute top-0 bottom-0 my-auto left-[1.2rem] h-[3.5rem] w-[3.5rem]">
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
                SEARCH
              </button>
            </form>
          </div>
        </div>

        <div
          className={`${
            query.length > 0
              ? "block pb-[3rem] px-[5%] relative w-full small:max-w-[800px] mx-auto small:px-0 small:-mt-[5rem]"
              : "hidden"
          }`}
        >
          <h4 className="text-theme-dark text-[2.8rem] text-left tracking-[0.06em] pb-[8rem] relative z-30">
            FAQ's related to <em>"{query}"</em> :
          </h4>
        </div>

        {/* faq list */}
        <div className=" z-20 px-[5%] relative small:max-w-[800px] mx-auto small:px-0 small:-mt-[5rem]">
          {uniqueFilteredFaqs.map((faq, index) => {
            if (faq && index + 1 <= iteration) {
              return (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    staggerChildren: 1,
                  }}
                  key={faq._id}
                >
                  <AccordionTemplate
                    question={faq.question}
                    answer={faq.answer}
                    UID={index}
                  />
                </motion.div>
              );
            }
            return null;
          })}
        </div>

        <div
          className={`${
            uniqueFilteredFaqs.length < 1 ? "block relative z-20" : "hidden"
          }`}
        >
          <h4 className="text-theme-dark text-center text-[1.6rem]">
            Sorry, We couldn't find what you were looking for. <br></br> Why not
            give us a call or send us a message using the form below?
          </h4>
        </div>

        <div
          className={`${
            uniqueFilteredFaqs.length <= 8 ||
            uniqueFilteredFaqs.length <= iteration
              ? "hidden"
              : "block"
          } w-full mx-auto mt-section-gap px-[5%] xsmall:w-fit`}
        >
          <button
            type="submit"
            className="relative w-full text-theme-dark rounded-sm cursor-pointer font-headings h-[5rem] font-[600] p-4 uppercase text-[1.6rem] tracking-[0.06em] xsmall:w-[17.6rem] z-20 text-center transition group hover:duration-300 hover:text-[#6015EF]"
            onClick={() => setIteration(iteration + 8)}
          >
            <div className="button__link__bg__block">
              {/* small */}
              <svg
                className={`button__link__svg button__link__svg__small fill-white`}
                preserveAspectRatio="none"
                viewBox="0 0 175 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M173.229 1V43.2227L162.849 49H1.54785V6.74023L11.8662 1H173.229Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                  className={`stroke-theme-dark group-hover:stroke-[#6015EF]`}
                />
              </svg>

              {/* 200 */}
              <svg
                className={`button__link__svg button__link__svg__200 fill-white`}
                preserveAspectRatio="none"
                viewBox="0 0 211 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M209.389 1.5V43.7178L198.82 49.5H1.38867V7.24512L11.8936 1.5H209.389Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                  className={`stroke-theme-dark group-hover:stroke-[#6015EF]`}
                />
              </svg>

              {/* 300 */}
              <svg
                className={`button__link__svg button__link__svg__300 fill-white`}
                preserveAspectRatio="none"
                viewBox="0 0 311 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M310 1V43.2256L299.739 49H1V6.73828L11.2617 1H310Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                  className={`stroke-theme-dark group-hover:stroke-[#6015EF]`}
                />
              </svg>

              {/* 400 */}
              <svg
                className={`button__link__svg button__link__svg__400 `}
                preserveAspectRatio="none"
                viewBox="0 0 401 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M400 1V43.2295L389.876 49H1V6.73828L11.2617 1H400Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                  className={`stroke-theme-dark group-hover:stroke-[#6015EF]`}
                />
              </svg>

              {/* 500 */}
              <svg
                className={`button__link__svg button__link__svg__500 fill-white`}
                preserveAspectRatio="none"
                viewBox="0 0 512 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M510.275 1V43.2178L499.707 49H1V6.74512L11.5049 1H510.275Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                  className={`stroke-theme-dark group-hover:stroke-[#6015EF]`}
                />
              </svg>
            </div>
            <span className="relative">LOAD MORE</span>
          </button>
        </div>
      </section>
    </Suspense>
  );
}

"use client";

import SwiperCore, { Swiper as SwiperType } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";

import {
  Scrollbar,
  Pagination,
  Navigation,
  Mousewheel,
  FreeMode,
} from "swiper/modules";
import "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import ServiceImageLink from "../ServiceImageLink";
import Image from "next/image";

import type {
  serviceType,
  projectType,
  testimonialsType,
  awardsType,
} from "@/types";
import ProjectSlide from "../ProjectSlide";
import { SwiperArrowNext, SwiperArrowPrev } from "../common/SwiperArrows";
import { useEffect, useRef } from "react";
import FilterButton from "../common/FilterButton";

// homepage services swiper
export const ServiceSwiper = ({ data }: { data: serviceType[] }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView="auto"
      direction="vertical"
      className="service-swiper--main"
      wrapperClass="service-swiper"
      modules={[Scrollbar, Mousewheel, FreeMode]}
      mousewheel={{
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
      }}
      freeMode={true}
      scrollbar={{
        hide: false,
        el: ".services-swiper-scrollbar",
        dragSize: 200,
      }}
      breakpoints={{
        512: {
          spaceBetween: 10,
          slidesPerView: "auto",
          direction: "horizontal",
        },
      }}
    >
      {data.map((elm, index) => {
        return (
          <SwiperSlide key={index}>
            <ServiceImageLink service={elm} index={index} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

// Homepage PROJECTS SWIPER
// pagination shows on Mobile.. another paginationmade in swiper below this one for desktops
export const ProjectsSwiper = ({ data }: { data: projectType[] }) => {
  const projectsSwiperRef = useRef<SwiperCore | null>(null);
  const projectsPaginationSwiperRef = useRef<SwiperCore | null>(null);
  const [prevIndex, setPrevIndex] = useState(0); // Track the previous slide index
  const [isSwipingBackward, setIsSwipingBackward] = useState(false);
  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.realIndex;
    const previousIndex = swiper.previousIndex;
    setIsSwipingBackward(currentIndex < previousIndex);
  };

  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={1}
      onSlideChange={handleSlideChange}
      wrapperClass="projects--swiper pb-14 small:pb-0 relative"
      modules={[Pagination, Navigation]}
      simulateTouch={false}
      pagination={{
        el: ".project-pagination",
        dynamicBullets: true,
        dynamicMainBullets: 5,
      }}
      navigation={{
        nextEl: ".next-project",
        prevEl: ".prev-project",
      }}
      speed={400} // Set speed to 0 to remove transitions
      effect={"fade"} // or 'slide'
      onSwiper={(swiper) => {
        projectsSwiperRef.current = swiper;
      }}
    >
      {data.map((elm, index) => {
        return (
          <SwiperSlide
            key={index}
            className={isSwipingBackward ? "no-transition" : ""}
          >
            <ProjectSlide project={elm} index={index} />
          </SwiperSlide>
        );
      })}

      <div className="absolute top-0 left-0 w-full aspect-square xsmall:aspect-[690/451] small:aspect-[567/456] small:min-w-[522px] invisible small:h-full">
        <div className="absolute w-full h-fit top-auto bottom-0 left-0 z-20 px-[4rem] flex justify-between items-center xsmall:h-full invisible small:h-full small:bottom-0 small:max-h-[534px] ">
          <div className="w-0 small:w-1/3 invisible"></div>

          <div className="project-pagination h-[5.6rem] w-[40%] pb-[3rem] z-30 flex gap-1 items-center xsmall:absolute xsmall:right-0 xsmall:bottom-0 xsmall:mb-[11%] xsmall:pl-[2.5%] xsmall:w-fit xsmall:justify-start xsmall:mx-[5%] small:w-1/3 small:justify-center small:mb-0 small:mx-0 small:px-0 small:hidden visible"></div>

          <div className="project-swiper-nav relative flex gap-4 pb-[3.1rem] pr-[1.5rem] xsmall:pb-0 xsmall:pr-0 xsmall:absolute xsmall:right-0 xsmall:mr-[8%] xsmall:mb-[-28%] small:mr-[3%] small:mb-[7%] small:pr-[4.2%] small:rotate-0 small:w-1/3 small:justify-end visible z-50 small:bottom-0">
            <SwiperArrowPrev swiperDivName="prev-project" />
            <SwiperArrowNext swiperDivName="next-project" />
          </div>
        </div>
      </div>
    </Swiper>
  );
};

// swiper specifically for pagination on the homepage projects swiper on larger screens (projects swiper also has pagination but for smaller screens only)
export const ProjectsPaginationSwiper = ({ data }: { data: projectType[] }) => {
  const projectsPaginationSwiperRef = useRef<SwiperCore | null>(null);
  return (
    <Swiper
      onSwiper={(swiper) => {
        projectsPaginationSwiperRef.current = swiper;
      }}
      navigation={{
        nextEl: ".next-project",
        prevEl: ".prev-project",
      }}
      wrapperClass=""
      modules={[Pagination, Navigation]}
      pagination={{
        el: ".project-pagination-outer",
        dynamicBullets: true,
        dynamicMainBullets: 5,
      }}
    >
      {data.map((elm, index) => {
        return (
          <SwiperSlide key={index}>
            <div></div>
          </SwiperSlide>
        );
      })}
      <div className="project-pagination-outer hidden small:flex h-fit z-30 gap-[0.2rem] items-center small:justify-center w-fit mx-auto pt-[4.2rem] pb-[4.8rem]"></div>
    </Swiper>
  );
};

// Homepage Testimonials swiper
export const TestimonialSwiper = ({ data }: { data: testimonialsType[] }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      wrapperClass=""
      modules={[Pagination, Navigation]}
      pagination={{
        el: ".testimonial-pagination",
        dynamicBullets: true,
        dynamicMainBullets: 5,
      }}
      navigation={{
        nextEl: ".next-testimonial",
        prevEl: ".prev-testimonial",
      }}
    >
      {data.map((elm, index) => (
        <div key={index}>
          {elm.testimonialsSection.testimonialsList.map(
            (content, innerIndex) => (
              <SwiperSlide key={innerIndex}>
                <p>{content.message}</p>
                <p className="pt-7">
                  <span className="font-[600]">{content.name}</span>
                  {content.position && " - "}
                  {content.position}
                </p>
              </SwiperSlide>
            )
          )}
        </div>
      ))}
    </Swiper>
  );
};

// Homepage awards swiper
export const AwardsSwiper = ({ data }: { data: awardsType[] }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView="auto"
      className="award-swiper--main"
      wrapperClass="award-swiper pl-[5%] pb-[5rem] xsmall:pb-[4.5rem] small:pb-[7rem] small:pl-0"
      modules={[Scrollbar, Mousewheel, FreeMode]}
      mousewheel={{
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
      }}
      freeMode={true}
      scrollbar={{
        hide: false,
        el: ".award-scrollbar",
        dragSize: 130,
      }}
      breakpoints={{
        1024: {
          spaceBetween: 10,
          slidesPerView: "auto",
        },
      }}
    >
      {data.map((award, index) => (
        <div key={index}>
          {award.awardsSection.awardsList.map((content, innerIndex) => {
            const titleWithLineBreaks = content.awardTitle.replace(
              /\\n/g,
              "\n"
            );
            return (
              <SwiperSlide key={innerIndex}>
                <div
                  key={index}
                  className="aspect-[255/345] w-auto px-[5%] xsmall:w-auto max-w-[255px] flex justify-center items-center flex-col gap-8 bg-theme-purple text-white text-center my-4"
                >
                  <div className="relative h-[150px] w-full mb-4">
                    <Image
                      src={content.awardLogo.image}
                      width={155}
                      height={145}
                      alt={content.awardLogo.image}
                      className="absolute bottom-0 left-0 right-0 h-auto w-full max-w-[70%] max-h-[145px] mx-auto object-contain"
                    />
                  </div>
                  <div>
                    <p className="uppercase font-headings font-bold text-[1.6rem] pb-2">
                      {content.awardDate}
                    </p>
                    <div>
                      {titleWithLineBreaks.split("\n").map((line, index) => {
                        return (
                          <p
                            key={index}
                            className="font-semibold font-headings text-[1.4rem] leading-[1.5]"
                          >
                            {line}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      ))}
      <div className="relative h-[1rem] mx-[5%] small:h-[1rem] small:mx-0 small:mr-[clamp(8rem,11.1vw,16rem)]">
        <div className="award-scrollbar"></div>
      </div>
    </Swiper>
  );
};

// filter button swiper for projects and related service
export const FilterButtonSwiper = ({
  categories,
  filters,
  onClick,
}: {
  categories: string[];
  filters: { id: number; category: string }[];
  onClick: (category: string) => void;
}) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView="auto"
      wrapperClass="filterBtn__swiper"
      modules={[Mousewheel, FreeMode]}
      mousewheel={{
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
      }}
      freeMode={true}
    >
      {categories.map((category, index) => {
        // console.log(category);
        const filterMatch = filters.some(
          (filter) => filter.category === category
        );

        return (
          <SwiperSlide key={category} style={{ width: "fit-content" }}>
            <div className="w-fit">
              <FilterButton
                key={index}
                text={category}
                selected={filterMatch} // Pass the boolean value of filterMatch
                onClick={() => onClick(category)} // Pass category to onClick
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

import React, { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Thumbs, EffectFade } from "swiper/modules";
import { ImageSlider } from "../ImageSlider";

// Projects page gallery swiper with before/after slider and thumbnail swiper for controls
export default function ProjectsImageSwiper({
  images,
  beforeImage,
  afterImage,
}: {
  beforeImage: string;
  afterImage: string;
  images: {
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
  }[];
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        allowTouchMove={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="aspect-[929/522]"
      >
        {beforeImage && (
          <SwiperSlide>
            <ImageSlider
              linearId="linearDesktop"
              before={beforeImage}
              after={afterImage}
            />
          </SwiperSlide>
        )}
        {images?.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={image.image}
                fill={true}
                alt={image.alt}
                className="object-cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        spaceBetween={10}
        freeMode={true}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: true,
        }}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        slidesPerView="auto"
        className="thumbMiniSwiper mt-[2rem] xsmall:w-fit xsmall:max-w-[65%] xsmall:ml-auto xsmall:mr-0"
        wrapperClass=""
      >
        {beforeImage && (
          <SwiperSlide>
            <div className="relative w-[52px] h-[52px] aspect-square cursor-pointer">
              <div className="absolute top-0 bottom-0 right-0 left-0 m-auto w-[80%] h-[80%] z-10 opacity-80">
                <svg
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="21.7402"
                    cy="21.7402"
                    r="19.7402"
                    stroke="white"
                    strokeWidth="3"
                  />
                  <path
                    d="M28.8242 21.9836L22.9617 27.8462L22.9617 16.1211L28.8242 21.9836Z"
                    fill="white"
                  />
                  <path
                    d="M14.168 21.9836L20.0305 27.8462L20.0305 16.1211L14.168 21.9836Z"
                    fill="white"
                  />
                </svg>
              </div>
              <ImageSlider
                before={beforeImage}
                after={afterImage}
                thumbnail={true}
              />
            </div>
          </SwiperSlide>
        )}
        {images?.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="relative min-w-[52px] min-h-[52px] aspect-square cursor-pointer">
                <Image
                  src={image.image}
                  fill={true}
                  alt={image.alt}
                  className=""
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

// ============= mobile project swiper ============== //

// Projects page gallery swiper with before/after slider and thumbnail swiper for controls
export function ProjectsImageSwiperMobile({
  images,
  beforeImage,
  afterImage,
}: {
  beforeImage: string;
  afterImage: string;
  images: {
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
  }[];
}) {
  const [mobThumbsSwiper, setMobThumbsSwiper] = useState<SwiperType | null>(
    null
  );

  return (
    <>
      <Swiper
        spaceBetween={10}
        allowTouchMove={false}
        thumbs={{ swiper: mobThumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="aspect-[357/383]"
      >
        {beforeImage && (
          <SwiperSlide>
            <ImageSlider
              linearId="linearMobile"
              before={beforeImage}
              after={afterImage}
            />
          </SwiperSlide>
        )}
        {images?.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={image.image}
                fill={true}
                alt={image.alt}
                className="object-cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        onSwiper={(swiper) => setMobThumbsSwiper(swiper)}
        spaceBetween={10}
        freeMode={true}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: true,
        }}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        slidesPerView="auto"
        className="thumbMiniSwiper mt-[2rem] xsmall:w-fit xsmall:max-w-[65%] xsmall:ml-auto xsmall:mr-0"
        wrapperClass=""
      >
        {beforeImage && (
          <SwiperSlide>
            <div className="relative w-[52px] h-[52px] aspect-square cursor-pointer">
              <div className="absolute top-0 bottom-0 right-0 left-0 m-auto w-[80%] h-[80%] z-10 opacity-80">
                <svg
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="21.7402"
                    cy="21.7402"
                    r="19.7402"
                    stroke="white"
                    strokeWidth="3"
                  />
                  <path
                    d="M28.8242 21.9836L22.9617 27.8462L22.9617 16.1211L28.8242 21.9836Z"
                    fill="white"
                  />
                  <path
                    d="M14.168 21.9836L20.0305 27.8462L20.0305 16.1211L14.168 21.9836Z"
                    fill="white"
                  />
                </svg>
              </div>
              <ImageSlider
                before={beforeImage}
                after={afterImage}
                thumbnail={true}
              />
            </div>
          </SwiperSlide>
        )}
        {images?.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="relative min-w-[52px] min-h-[52px] aspect-square cursor-pointer">
                <Image
                  src={image.image}
                  fill={true}
                  alt={image.alt}
                  className=""
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

// =========================== //

interface AdditionalInfoItem {
  listItem: string;
  listItemDetails: string;
}
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";
import GradientLineThick from "../assets/GradientLineThick";
import GradientLineVerticalThick from "../assets/GradientLineVerticalThick";
import { removelineBreakCodeFromHTML } from "../utils/lineBreaks";

// single service's sub-categories and related info, eg- damp proofing -> rising damp, etc
export const ServiceExtrasSwiper = ({
  additionalInfo,
  primaryOverviewTitle,
  primaryOverviewText,
}: {
  additionalInfo: AdditionalInfoItem[];
  primaryOverviewTitle: string;
  primaryOverviewText: PortableTextBlock;
}) => {
  const [btnSwiper, setBtnSwiper] = useState<SwiperType | null>(null);
  const [scrollbarStates, setScrollbarStates] = useState<boolean[]>([]);
  const overflowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(
    1000
  );

  const handleButtonClick = (index: number) => {
    if (index === activeButtonIndex) {
      // If the clicked button is already active, deselect it
      setActiveButtonIndex(index);
    } else {
      // Otherwise, set the clicked button as active
      setActiveButtonIndex(1000);
    }
  };

  const updateScrollbarStates = () => {
    const newScrollbarStates = overflowRefs.current.map((ref) => {
      if (!ref) return false; // Guard clause to handle null refs
      return ref.scrollHeight > ref.offsetHeight;
    });
    setScrollbarStates(newScrollbarStates);
  };

  useEffect(() => {
    updateScrollbarStates(); // Update scrollbar states initially

    const handleResize = () => {
      updateScrollbarStates(); // Update scrollbar states when window resizes
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener on component unmount
    };
  }, []);

  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        allowTouchMove={false}
        thumbs={{ swiper: btnSwiper }}
        modules={[FreeMode, Navigation, Thumbs, EffectFade]}
        autoHeight={false}
        effect={"fade"}
        className="service-subcategory--swiper-container"
      >
        {additionalInfo.map((text, index) => {
          return (
            <SwiperSlide
              key={index}
              className="w-full pr-[5%] pl-[8%] xsmall:px-[5%] small:px-0"
            >
              <h2 className="pb-[1.5rem]">{text.listItem}</h2>
              <div className="scrollbar-and-text-container">
                <div
                  ref={(ref) => {
                    overflowRefs.current[index + 1] = ref;
                  }} // Adjusted
                  className="portable--overflow mt-10 max-h-[300px] pr-[10.5%] font-[300] overflow-y-scroll small:max-h-[145px]"
                >
                  <p>{text.listItemDetails}</p>
                </div>
                {scrollbarStates[index + 1] && (
                  <div className="your-after-element"></div>
                )}
              </div>
            </SwiperSlide>
          );
        })}
        <SwiperSlide className="w-full pr-[5%] pl-[8%] xsmall:px-[5%] small:px-0">
          <h2 className="pb-[1.5rem]">
            {removelineBreakCodeFromHTML(primaryOverviewTitle)}
          </h2>
          <div className="scrollbar-and-text-container">
            <div
              ref={(ref) => {
                overflowRefs.current[0] = ref;
              }} // Adjusted
              className="portable--overflow mt-10 max-h-[300px] pr-[10.5%] font-[300] overflow-y-scroll small:max-h-[145px]"
            >
              <PortableText value={primaryOverviewText} />
            </div>
            {scrollbarStates[0] && <div className="your-after-element"></div>}
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={(swiper) => setBtnSwiper(swiper)}
        slidesPerView="auto"
        freeMode={true}
        modules={[FreeMode, Navigation, Thumbs]}
        wrapperClass="filterBtn__swiper filterBtn__swiper--service-extras"
        className="flex flex-row mt-[7rem] "
      >
        {additionalInfo?.map((category, index) => {
          return (
            <SwiperSlide
              key={index}
              className={`w-fit mr-[1.5rem] min-w-[27.8rem] small:min-w-[25.8rem] ${
                activeButtonIndex === index ? "hidden--slide" : ""
              }`}
            >
              <FilterButton
                key={index}
                text={category.listItem}
                serviceSubFilter
                onClick={() => handleButtonClick(index)}
              />
            </SwiperSlide>
          );
        })}
        <SwiperSlide
          className={`w-fit mr-[1.5rem] min-w-[27.8rem] small:min-w-[25.8rem] ${
            activeButtonIndex === 100 ? "hidden--slide" : ""
          }`}
        >
          <FilterButton
            key="001"
            // text={primaryOverviewTitle}
            text="back to overview"
            serviceSubFilter
            onClick={() => handleButtonClick(100)}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export const ServiceGallerySwiper = ({
  images,
}: {
  images: {
    _id: string;
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
  }[];
}) => {
  // const [imagesState, setImagesState] = useState(images);

  // useEffect(() => {
  //   setImagesState(images);
  // }, [images]); // Dependency array includes `images` to react on its changes

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView="auto"
      wrapperClass=""
      className="service-slideshow-swiper relative w-full aspect-[389/303] xsmall:aspect-[742/409] small:aspect-[1118.5/623] overflow-hidden"
      modules={[Pagination, Navigation]}
      pagination={{
        el: ".service-slideshow-pagination",
        dynamicBullets: true,
        dynamicMainBullets: 5,
      }}
      navigation={{
        nextEl: ".next-service-image",
        prevEl: ".prev-service-image",
      }}
      speed={400} // Set speed to 0 to remove transitions
      effect={"fade"} // or 'slide'
    >
      {images.map((image, index) => {
        return (
          <SwiperSlide key={index} className="">
            <Image
              src={image.image}
              width={1120}
              height={625}
              alt={image.alt}
              className="object-cover h-full w-full"
            />
            {/* <img
              src={image.image}
              alt={image.alt}
              style={{ width: "100%", height: "auto" }}
            /> */}
          </SwiperSlide>
        );
      })}

      <div className="service-image-swiper-nav absolute flex gap-4 right-[5%] bottom-[10%] z-20">
        <SwiperArrowPrev swiperDivName="prev-service-image" />
        <SwiperArrowNext swiperDivName="next-service-image" />
      </div>
    </Swiper>
  );
};

// swiper specifically for pagination on the service gallery swiper (overflow hidden blocks pagination)
export const ServiceGalleryPaginationSwiper = ({
  data,
}: {
  data: {
    _id: string;
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
  }[];
}) => {
  const ServiceGalleryPaginationSwiperRef = useRef<SwiperCore | null>(null);
  return (
    <Swiper
      onSwiper={(swiper) => {
        ServiceGalleryPaginationSwiperRef.current = swiper;
      }}
      navigation={{
        nextEl: ".next-service-image",
        prevEl: ".prev-service-image",
      }}
      wrapperClass=""
      className="mb-[-3rem] xsmall:mb-[-1rem]"
      modules={[Pagination, Navigation]}
      pagination={{
        el: ".service-slideshow-pagination",
        dynamicBullets: true,
        dynamicMainBullets: 5,
      }}
    >
      {data.map((elm, index) => {
        return (
          <SwiperSlide key={index}>
            <div></div>
          </SwiperSlide>
        );
      })}
      <div className="service-slideshow-pagination h-fit w-full z-30 flex gap-[0.7rem] xsmall:gap-1 items-center justify-center mt-[5rem] pb-[2rem]"></div>
    </Swiper>
  );
};

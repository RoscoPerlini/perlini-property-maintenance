import { useEffect, useState } from "react";
import { getCroppedImageSrc } from "@/sanity/sanity.query";
import type { projectType } from "@/types";
import ProjectsImageSwiper, {
  ProjectsImageSwiperMobile,
} from "./swiper/Swipers";
import { useSearchParams } from "next/navigation";
import { removelineBreakCodeFromHTML } from "./utils/lineBreaks";

interface BgImage {
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
}

export default function ProjectsComponent({
  project,
  bg,
}: {
  project: projectType;
  bg: BgImage;
}) {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const filterParam = searchParams.get("filter");
    // Now use filterParam as required
  }, []);

  useEffect(() => {
    // Only scroll on the initial load if the searchTerm is present
    if (isInitialLoad && filterParam) {
      setTimeout(() => {
        const element = document.getElementById(`${filterParam}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          // After scrolling, set isInitialLoad to false to prevent future scrolls
          setIsInitialLoad(false);
        }
      }, 250); // Adjust delay as needed, but keep it as short as possible
    }
    // This effect should run only once on mount, hence the empty dependency array
  }, []);
  // console.log(project);

  return (
    <div id={project._id} className="block relative z-0 text-white">
      <div
        style={
          {
            "--image-url": `url(${getCroppedImageSrc(
              project.categories[0].serviceBannerImage
            )})`,
          } as React.CSSProperties
        }
        className="relative  bg-[image:var(--image-url)] bg-cover w-full h-auto group -z-10 px-[5%] py-[4rem] small:px-layout-small xsmall:pb-[7.5rem] small:pb-[10rem]"
      >
        <div className="small:w-[clamp(720px,64vw,930px)] mx-auto flex flex-col">
          {/* categories and title */}
          <div className="order-1 xsmall:order-3 small:order-2">
            <div className="flex gap-[1rem] xsmall:gap-[2rem] flex-wrap xsmall:mt-[2rem] mb-[2rem]">
              {project.categories.map((category, index) => {
                return (
                  <div
                    key={index}
                    className="pr-[1rem] xsmall:pr-[2rem] border-r xsmall:border-1 xsmall:border-white last:border-0"
                  >
                    <h3 key={index} className="uppercase ">
                      {removelineBreakCodeFromHTML(category.serviceTitle)}{" "}
                    </h3>
                  </div>
                );
              })}
            </div>
            <h1 className="pb-[2.6rem] xsmall:order-3 xsmall:pb-0">
              {project.projectTitle}
            </h1>
          </div>

          {/* image/s */}
          <div className="relative order-2 xsmall:pt-[3.4rem] small:order-1 small:-mt-[27rem] small:pt-0">
            <div className="hidden xsmall:block">
              <ProjectsImageSwiper
                images={project.gallery?.images}
                beforeImage={project.beforeAfter?.beforeImage?.image}
                afterImage={project.beforeAfter?.afterImage?.image}
              />
            </div>

            <div className="block xsmall:hidden">
              <ProjectsImageSwiperMobile
                images={project.galleryMobile?.images}
                beforeImage={project.beforeAfterMobile?.beforeImage?.image}
                afterImage={project.beforeAfterMobile?.afterImage?.image}
              />
            </div>
            {/* lg - project location and timeframe */}
            <div className="uppercase tracking-[0.06em] hidden small:block absolute top-[0rem] -right-[0rem] rotate-90 text-theme-dark translate-x-[clamp(117px,12vw,151px)] translate-y-[100%] ">
              <p className="text-[1.4rem]">{project.completionTimeframe}</p>
              <p className="pt-[0.4rem] text-[1.4rem] capitalize">
                {project.projectLocation}
              </p>
            </div>
          </div>

          <p className="order-3 font-normal pt-[4rem] xsmall:order-4 small:order-3">
            {project.projectSummary}
          </p>

          {/* location and timeframe */}
          <div className="project-time-address order-4 pt-[3.5rem] uppercase xsmall:order-1 tracking-[0.06em] small:hidden">
            <p className="text-[1.4rem]">{project.completionTimeframe}</p>
            <p className="pt-[0.4rem] text-[1.4rem] capitalize">
              {project.projectLocation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

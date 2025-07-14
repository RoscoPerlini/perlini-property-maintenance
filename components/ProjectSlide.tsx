// "use client";

import type { projectType } from "@/types";
import ButtonLink from "./common/ButtonLink";
import BgDots from "./assets/BgDots";
import { SwiperArrowNext, SwiperArrowPrev } from "./common/SwiperArrows";
import ProjectBorderedImage from "./utils/ProjectBorderedImage";
import ButtonLinkNew from "./common/ButtonLinkNew";

type ProjectSlideProps = {
  project: projectType;
  index: number;
};

const ProjectSlide: React.FC<ProjectSlideProps> = ({ project, index }) => {
  return (
    <div
      key={project._id}
      className="project__container relative text-white z-20 small:flex small:items-center"
    >
      <ProjectBorderedImage image={project.image} />
      <div className="relative small:flex small:justify-between xsmall:px-[8%] small:pl-[clamp(2rem,3vw,5rem)] small:w-[clamp(358px,36vw,648px)] small:pr-[1.5rem] order-0 small-min-h-[400px]">
        <div className="counter__container small:min-w-[60px]">
          <h3 className="project__counter uppercase px-[15px] font-body tracking-[0.12em] pt-[2.7rem] mb-8 xsmall:px-0 small:absolute small:top-[65px] small:-left-0 small:rotate-90 small:whitespace-nowrap small:pt-0 small:mb-0 small:px-0 small:ml-[-3%]">
            project 0{index + 1}
          </h3>
        </div>

        <div className="px-[15px] pb-[5.4rem] small:pb-0 xsmall:px-0 small:w-[365px] small:pr-[clamp(20px,0vw,50px)]">
          <div className="project__text">
            <h2 className="pb-[2.5rem] leading-[3.6rem]">
              {project.projectTitle}
            </h2>
            <p className="line-clamp-3 xsmall:line-clamp-2 small:line-clamp-3">
              {project.projectSummary}
            </p>
          </div>
          <div className="project__btn mt-[4rem] xsmall:mt-[3.2rem] mx-[15px] xsmall:w-fit xsmall:ml-0">
            <ButtonLinkNew
              destination={{
                pathname: "/projects", // General projects page
                query: `${project._id}`, // Pass the filter in the query string
              }}
              ctaType="general"
              text="view project"
              theme="light"
              hoverEffect="fill-col"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;

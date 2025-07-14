import {
  getProjectsSection,
  getAllProjects,
  allProjects,
} from "@/sanity/sanity.query";
import type { projectsSectionType, projectType } from "@/types";
import { ProjectsPaginationSwiper, ProjectsSwiper } from "./swiper/Swipers";
import ButtonLink from "./common/ButtonLink";
import { SwiperArrowNext, SwiperArrowPrev } from "./common/SwiperArrows";
import BgDots from "./assets/BgDots";
import { loadQuery } from "@sanity/react-loader";
import { draftMode } from "next/headers";
import { SanityDocument } from "next-sanity";
import ProjectsSwiperPreview from "./previewComponents/ProjectsSwiperPreview";
import ButtonLinkNew from "./common/ButtonLinkNew";

export default async function LatestProjects() {
  const projectsSection: projectsSectionType[] = await getProjectsSection();
  const projects: projectType[] = await getAllProjects();

  const initialAllProjects = await loadQuery<SanityDocument>(
    allProjects,
    {},
    {
      // Because of Next.js, RSC and Dynamic Routes this currently
      // cannot be set on the loadQuery function at the "top level"
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return (
    <section className="relative">
      <div className="relative">
        <div className="h-[410px] absolute -z-10 top-0 left-0 w-full xsmall:max-h-[380px] xsmall:overflow-visible small:h-1/2 bg-theme-off-white small:overflow-hidden">
          <div className="invidible xsmall:visible xsmall:max-h-[442px] absolute top-0 left-0 w-full h-[121%] xsmall:overflow-hidden small:max-h-none small:overflow-visible">
            <div className="absolute top-0 left-0 h-[200%] w-auto hidden small:block">
              <BgDots />
            </div>
            <div className="absolute top-0 right-0 w-full h-auto small:h-[200%] small:w-auto transform scale-x-[-1]">
              <BgDots />
            </div>
          </div>
        </div>

        {projectsSection.map((content) => {
          const { projectsHeading, projectsSubheading } =
            content.projectsSection;
          return (
            <div key={content._id}>
              <h3 className="uppercase pt-[7rem] text-center text-theme-dark">
                {projectsSubheading}
              </h3>
              <h2 className="text-center mx-[5%] xsmall:mx-0 pt-[2.2rem] pb-[5rem] xsmall:pb-[6.5rem] text-theme-dark">
                {projectsHeading}
              </h2>
            </div>
          );
        })}

        <div className="relative xsmall:mx-[5%] small:w-[90%] small:h-fit small:m-auto bg-theme-dark small:max-w-[1120px] small:flex small:items-center small:px-[0%] overflow-hidden">
          {/* top left dots */}
          <div className="hidden xsmall:block absolute top-0 left-0 w-[51%] small:w-[42%] mix-blend-multiply">
            <BgDots />
          </div>
          <div className="hidden xsmall:block absolute top-0 left-0 w-[51%] small:w-[42%] mix-blend-multiply">
            <BgDots />
          </div>
          <div className="hidden xsmall:block absolute top-0 left-0 w-[51%] small:w-[42%] mix-blend-multiply">
            <BgDots />
          </div>
          <div className="hidden xsmall:block absolute top-0 left-0 w-[51%] small:w-[42%] mix-blend-multiply">
            <BgDots />
          </div>
          <div className="hidden xsmall:block absolute top-0 left-0 w-[51%] small:w-[42%] mix-blend-multiply">
            <BgDots />
          </div>
          <div className="hidden xsmall:block absolute top-0 left-0 w-[51%] small:w-[42%] mix-blend-multiply">
            <BgDots />
          </div>

          {/* bottom right dots */}
          <div className="absolute bottom-0 right-0 w-full h-auto mix-blend-multiply rotate-180 xsmall:hidden">
            <BgDots />
          </div>
          <div className="absolute bottom-0 right-0 w-full h-auto mix-blend-multiply rotate-180 xsmall:hidden">
            <BgDots />
          </div>
          <div className="absolute bottom-0 right-0 w-full h-auto mix-blend-multiply rotate-180 xsmall:hidden">
            <BgDots />
          </div>
          {draftMode().isEnabled ? (
            <ProjectsSwiperPreview
              initial={initialAllProjects.data[0]}
              originalContent={allProjects}
            />
          ) : (
            <ProjectsSwiper data={projects} />
          )}
          {/* <ProjectsSwiper data={projects} /> */}
        </div>

        <ProjectsPaginationSwiper data={projects} />

        <div className="mt-20 mx-[15px] xsmall:w-fit xsmall:mx-auto small:mt-0">
          <ButtonLinkNew
            text={projectsSection[0].projectsSection.projectsButtonText}
            theme="dark"
            destination="/projects"
            ctaType="none"
            hoverEffect="outline"
          />
        </div>
      </div>
    </section>
  );
}

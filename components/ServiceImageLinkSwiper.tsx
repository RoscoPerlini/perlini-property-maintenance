import { draftMode } from "next/headers";
import {
  getServiceLinks,
  getServicesSectionTitles,
  // getSingleService,
} from "@/sanity/sanity.query";
import type { serviceType, serviceSectionType } from "@/types";
import ButtonLink from "./common/ButtonLink";
import { ServiceSwiper } from "./swiper/Swipers";
import ServiceImageLink from "./ServiceImageLink";
import BgDots from "./assets/BgDots";
import service from "@/schemas/services";

import { SanityDocument } from "next-sanity";
// import Posts from "@/components/Posts";
import { loadQuery } from "@/sanity/lib/store";
import ServiceImageLinkPreview from "./previewComponents/ServiceImageLinkPreview";
import ServiceSwiperPreview from "./previewComponents/ServiceSwiperPreview";
import ButtonLinkNew from "./common/ButtonLinkNew";
// import { SERVICES_QUERY } from "@/sanity/lib/queries";

export default async function ServiceImageLinkSwiper() {
  // const slug = params.service;
  const services = await loadQuery<serviceType[]>(getServiceLinks);

  const serviceSectionHeadings: serviceSectionType[] =
    await getServicesSectionTitles();

  let scrollbarThumbWidth;

  // Get the total number of slides
  const totalSlides = services.data.length;
  // Calculate the width percentage for the scrollbar thumb
  const thumbWidthPercentage = 100 / totalSlides;

  scrollbarThumbWidth = `${thumbWidthPercentage.toFixed(2)}%`;

  return (
    <div className="relative bg-transparent xsmall:bg-theme-off-white mb-[6rem] xsmall:pb-[6rem] small:pb-[5.6rem] overflow-hidden">
      <div className="absolute top-0 left-0 w-[clamp(350px,48vw,450px)] h-auto small:transform small:scale-y-[-1] small:bottom-0 -z-10">
        <div className="bg-theme-off-white absolute top-0 left-0 w-screen h-[418px] overflow-hidden xsmall:bg-transparent xsmall:h-auto xsmall:w-[clamp(350px,48vw,450px)]">
          <BgDots />
        </div>
      </div>

      {serviceSectionHeadings.map((heading) => {
        return (
          <div
            key={heading.servicesSection.servicesHeading}
            className="text-theme-dark"
          >
            <h3 className="uppercase pt-[7rem] xsmall:pt-[7.5rem] text-center ">
              {heading.servicesSection.servicesSubheading}
            </h3>
            <h2 className="text-center pb-[4rem] pt-[2rem] ">
              {heading.servicesSection.servicesHeading}
            </h2>
          </div>
        );
      })}
      <div className="flex flex-col justify-center gap-[16px] visible xsmall:invisible xsmall:h-0">
        {draftMode().isEnabled ? (
          <ServiceImageLinkPreview initial={services} />
        ) : (
          services.data.map((service, index) => {
            return (
              <ServiceImageLink
                key={service._id}
                service={service}
                index={index}
              />
            );
          })
        )}
      </div>
      <div className="invisible mb-0 h-0 w-fit  mx-auto xsmall:visible xsmall:w-full xsmall:h-full xsmall:mb-[0] small:pl-layout-small">
        {draftMode().isEnabled ? (
          <ServiceSwiperPreview
            initial={services}
            originalContent={getServiceLinks}
          />
        ) : (
          <ServiceSwiper data={services.data} />
        )}
        <div className="relative h-[5rem] mx-[5%] small:h-[7rem] small:mx-0 small:mr-[clamp(8rem,11.1vw,16rem)]">
          <div className="services-swiper-scrollbar absolute bottom-0 left-0">
            <div
              className={`swiper-scrollbar-drag w-${scrollbarThumbWidth}`}
            ></div>
          </div>
        </div>
      </div>

      {serviceSectionHeadings.map((heading) => {
        return (
          <div
            key={heading.servicesSection.servicesHeading}
            className="mt-[4rem] m-auto px-[5%] w-full xsmall:w-fit xsmall:px-0 xsmall:mt-[5rem] xsmall:mx-auto small:mt-[6.5rem]"
          >
            <ButtonLinkNew
              theme="dark"
              text={heading.servicesSection.servicesLinkTitle}
              destination="/services"
              ctaType="none"
              hoverEffect="outline"
            />
          </div>
        );
      })}
    </div>
  );
}

import type { serviceType, servicesPageType } from "@/types";
import InnerHero from "./InnerHero";
import { SanityDocument } from "next-sanity";
import {
  getCroppedImageSrc,
  getServiceLinks,
  getServicesPageContent,
} from "@/sanity/sanity.query";
import BgDots from "./assets/BgDots";
import { client } from "@/sanity/sanity.client";
import Link from "next/link";
import { removelineBreakCodeFromHTML } from "./utils/lineBreaks";

export default async function ServicesPageContent({
  pageData,
}: {
  pageData: SanityDocument;
}) {
  return (
    <>
      <section
        style={
          {
            "--image-url": pageData[0].ServicesPage.introBgImage,
          } as React.CSSProperties
        }
        className="relative w-full h-full bg-[image:var(--image-url)] bg-cover  mb-20 overflow-hidden my-[56px] xsmall:my-[80px]"
      >
        <div className="hidden small:block absolute top-0 left-0 h-[150%] w-auto mix-blend-multiply">
          <BgDots />
        </div>
        <div className="hidden small:block absolute top-0 left-0 h-[150%] w-auto mix-blend-multiply">
          <BgDots />
        </div>
        <div className="hidden small:block absolute top-0 left-0 h-[150%] w-auto mix-blend-multiply">
          <BgDots />
        </div>

        <div className="absolute bottom-0 right-0 h-full xsmall:h-[120%] small:h-[150%] w-auto mix-blend-multiply rotate-180">
          <BgDots />
        </div>
        <div className="absolute bottom-0 right-0 h-full xsmall:h-[120%] small:h-[150%] w-auto mix-blend-multiply rotate-180">
          <BgDots />
        </div>
        <div className="absolute bottom-0 right-0 h-full xsmall:h-[120%] small:h-[150%] w-auto mix-blend-multiply rotate-180">
          <BgDots />
        </div>
        <div className="absolute bottom-0 right-0 h-full xsmall:h-[120%] small:h-[150%] w-auto mix-blend-multiply rotate-180">
          <BgDots />
        </div>

        <div className="relative text-white pt-[4rem] pb-[6.5rem] px-[5%] xsmall:pt-[6rem] small:flex small:flex-row small:gap-10  small:pt-[9.4rem] small:pb-[12rem] medium:max-w-[1120px] medium:px-0 mx-auto">
          <div className="small:max-w-[488px] small:mx-auto medium:ml-0">
            <h2 className="pb-[1.5rem]">
              {pageData[0].ServicesPage.introHeading}
            </h2>
            <p className="pt-10">{pageData[0].ServicesPage.introText}</p>
          </div>
        </div>
      </section>
    </>
  );
}

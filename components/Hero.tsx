import Image from "next/image";
import type { heroType } from "@/types";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";
import { getTextWithLineBreaks } from "./utils/getTextWithLineBreaks";
import ButtonLinkNew from "./common/ButtonLinkNew";

export default function Hero({ content }: { content: heroType[] }) {
  return (
    <section className="relative mt-[7rem] xsmall:mt-[11rem] small:mt-0">
      <div className="hero__content grid grid-cols-1 small:grid-cols-2 align-middle items-center xsmall:gap-10 justify-between small:pt-[6rem] mb-[6rem] max-w-screen-large small:mx-auto text-theme-dark small:mt-[90px]">
        <div className="w-full order-last small:order-first px-[5%] small:px-0">
          <div className="relative large:static w-full pb-12 pl-0 xsmall:px-20 small:pl-layout-small mt-[1.5rem] medium:mt-[-16rem] small:pr-0 small:text-[clamp(3.2rem,2.8vw,4rem)]">
            <h1 className="absolute -top-[0%] -left-5 hidden xsmall:block xsmall:-translate-x-[4.5vw] small:-translate-x-0 w-fit h-auto font-body large:top-[24.3%] xsmall:text-[clamp(2.8rem,4.3vw,3.6rem)] small:text-[clamp(2.7rem,3.1vw,4rem)]">
              01
            </h1>
            <div>
              <p className="homepage__hero__company__name font-bold text-[1.6rem] font-body mb-[0.4em]">
                Perlini Property Maintenance
              </p>
              <h1 className="font-bold xsmall:text-[clamp(2.8rem,4.3vw,3.6rem)] small:text-[clamp(2.7rem,3.1vw,4rem)]">
                {getTextWithLineBreaks(content[0].heroHeading)}
              </h1>
            </div>
          </div>
          <div className="pl-0 xsmall:px-20 xsmall:pr-10 small:pl-layout-small small:pr-0 small:pb-40px">
            <div className="homepage__hero__text__region small:max-w-[542px]">
              <PortableText value={content[0].heroText} />
            </div>
            <div className="hero__cta__wrapper flex flex-wrap justify-start gap-x-[4rem] small:gap-x-[1rem] medium:gap-x-[4rem] gap-y-[1rem] mt-[3.5rem] w-[96%] ">
              <div className="w-full xsmall:w-fit grow xsmall:max-w-[220px]">
                <ButtonLinkNew
                  destination="/services"
                  text={content[0].heroServicesButtonText}
                  theme="dark"
                  ctaType="general"
                  hoverEffect="fill-col"
                />
              </div>
              <div className="w-full xsmall:w-fit grow  xsmall:max-w-[220px]">
                <ButtonLinkNew
                  destination="/contact"
                  text={content[0].heroContactButtonText}
                  theme="dark"
                  ctaType="general"
                  hoverEffect="fill-col"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image relative object-cover max-w-[645px] mx-auto w-[94%] small:w-full small:mx-0">
          <Image
            src={content[0].heroImage.image}
            fill
            priority
            alt={content[0].heroImage.alt}
            className="absolute w-full h-full object-cover z-0 group-hover:opacity-75 m-auto"
          />
        </div>
      </div>
    </section>
  );
}

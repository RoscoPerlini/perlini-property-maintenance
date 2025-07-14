// import { getCroppedImageSrc, getIntro } from "@/sanity/sanity.query";
import type { introType } from "@/types";
import { PortableText } from "@portabletext/react";
import ButtonLink from "./common/ButtonLink";
import BgDots from "./assets/BgDots";
import BorderedImageAbout from "./utils/BorderedImageAbout";
import ButtonLinkNew from "./common/ButtonLinkNew";

export default function IntroSection({ intro }: { intro: introType[] }) {
  // const intro: introType[] = await getIntro();

  return (
    <section className="relative bg-theme-dark px-[4%] pt-[5%] pb-[5.5rem] xsmall:px-[3.9%] xsmall:pt-[3.9%]  small:py-[clamp(4rem,7.8vw,11rem)] small:pr-16 small:pl-0 text-white overflow-hidden">
      {/* top left dots */}
      <div className="absolute bottom-0 right-0 h-full w-auto mix-blend-multiply rotate-180 xsmall:w-[70%] xsmall:h-auto small:scale-y-[-1] small:top-0 small:bottom-auto small:w-[40%] small:h-auto z-0 ">
        <BgDots />
      </div>
      <div className="absolute bottom-0 right-0 h-full w-auto mix-blend-multiply rotate-180 xsmall:w-[70%] xsmall:h-auto small:scale-y-[-1] small:top-0 small:bottom-auto small:w-[40%] small:h-auto z-0 ">
        <BgDots />
      </div>
      <div className="absolute bottom-0 right-0 h-full w-auto mix-blend-multiply rotate-180 xsmall:w-[70%] xsmall:h-auto small:scale-y-[-1] small:top-0 small:bottom-auto small:w-[40%] small:h-auto z-0 ">
        <BgDots />
      </div>
      <div className="absolute bottom-0 right-0 h-full w-auto mix-blend-multiply rotate-180 xsmall:w-[70%] xsmall:h-auto small:scale-y-[-1] small:top-0 small:bottom-auto small:w-[40%] small:h-auto z-0 ">
        <BgDots />
      </div>

      {intro.map((content) => {
        return (
          <div
            key={content._id}
            className="relative grid grid-cols-1 small:grid-cols-2 gap-10 items-center z-10"
          >
            <BorderedImageAbout image={content.introSection.introImage} />

            <div className="small:max-w-[90%] small:pl-[70px]">
              <h2 className="uppercase text-[1.8rem] tracking-[0.12em] font-[500] pb-[2.4rem] pt-[2.7rem] small:pt-0">
                {content.introSection.introSubheading}
              </h2>
              <h2 className="pb-[4.2rem]">
                {content.introSection.introHeading}
              </h2>
              <div className="pr-2 xsmall:w-[90%] small:w-[clamp(445px,43vw,512px)] small:pr-0">
                <PortableText value={content.introSection.introText} />
              </div>
              <div className="mt-[3.5rem] mx-[15px] xsmall:w-fit xsmall:ml-0">
                <ButtonLinkNew
                  destination="/about"
                  text={content.introSection.aboutUsButton}
                  theme="light"
                  ctaType="general"
                  hoverEffect="fill-col"
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

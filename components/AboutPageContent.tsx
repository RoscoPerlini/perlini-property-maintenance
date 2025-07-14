import { PortableText } from "@portabletext/react";
import BgDots from "./assets/BgDots";
import { getTextWithLineBreaks } from "./utils/getTextWithLineBreaks";

const AboutPageContent = ({
  featureText,
  contentArea,
}: {
  featureText: string;
  contentArea: string[];
}) => {

  return (
    <>
      <div className="relative mb-[-7.6rem] xsmall:mb-[-7.2rem] small:mb-[-10rem] py-[4rem] xsmall:py-[4rem] xsmall:w-[95%] xsmall:mx-auto small:py-[6rem] after:absolute after:content-[''] after:w-full after:h-full after:bg-white after:top-0 after:left-0 after:z-10">
        <svg
          className="about-color-border absolute inset-0 w-full h-full pointer-events-none -translate-y-[13.2rem] xsmall:-translate-y-[12.8rem] small:-translate-y-[15.6rem] max-w-[calc(1065px+56px)] left-0 right-0 mx-auto mix-blend-color-dodge top-0 bottom-0 m-auto "
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
          className="about-color-border absolute inset-0 w-full h-full pointer-events-none -translate-y-[13.2rem] xsmall:-translate-y-[12.8rem] small:-translate-y-[15.6rem] max-w-[calc(1065px+56px)] left-0 right-0 mx-auto mix-blend-color-dodge top-0 bottom-0 m-auto "
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

        <div className="feature-text relative z-30 overflow-hidden bg-theme-purple mx-auto w-[90%]  -translate-y-[13.2em] py-[3rem] xsmall:py-[4rem] small:py-[5.5rem] xsmall:-translate-y-[12.8rem] small:-translate-y-[15.6rem] small:max-w-[1065px] ">
          <div className="hidden xsmall:block absolute -bottom-[20%] right-0 h-[200%] w-auto mix-blend-multiply rotate-180">
            <BgDots />
          </div>
          <div className="hidden xsmall:block absolute -bottom-[20%] right-0 h-[200%] w-auto mix-blend-multiply rotate-180">
            <BgDots />
          </div>
          <div className="hidden xsmall:block absolute -bottom-[20%] right-0 h-[200%] w-auto mix-blend-multiply rotate-180">
            <BgDots />
          </div>

          <div className="hidden xsmall:block absolute -bottom-[20%] left-0 h-[200%] w-auto mix-blend-multiply scale-y-[-1]">
            <BgDots />
          </div>
          <div className="hidden xsmall:block absolute -bottom-[20%] left-0 h-[200%] w-auto mix-blend-multiply scale-y-[-1]">
            <BgDots />
          </div>
          <div className="hidden xsmall:block absolute -bottom-[20%] left-0 h-[200%] w-auto mix-blend-multiply scale-y-[-1]">
            <BgDots />
          </div>

          <div className="relative text-white px-[4%] flex justify-center items-center w-full h-full z-10">
            <h4 className="text-[clamp(1.8rem,5.4vw,2.2rem)] xsmall:text-[clamp(1.9rem,3.7vw,2.4rem)] small:text-[clamp(2.5rem,2.7vw,3.2rem)] text-center tracking-[0.06em] font-bold small:w-[78%]">
              {getTextWithLineBreaks(
                featureText
                // aboutContent[0]?.aboutPage?.featureText
              )}
            </h4>
          </div>
        </div>
      </div>

      <div className="relative px-[5%] z-40 text-theme-dark mx-auto small:max-w-[1065px] small:px-5 -mt-[13.2em] xsmall:-mt-[12.8rem] small:-mt-[15.6rem]">
        {/* <PortableText value={aboutContent[0].aboutPage.contentArea} /> */}
        {

        contentArea.map((str) => {
          return(
            <p className="pb-10 last:pb-0">{getTextWithLineBreaks(str)}</p>
            )}
        )
        }

        {/* <PortableText value={contentArea} /> */}
      </div>
    </>
  );
};

export default AboutPageContent;

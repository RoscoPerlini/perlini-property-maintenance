import type { awardsType } from "@/types";
// import { getAwards } from "@/sanity/sanity.query";
// import Image from "next/image";
import { AwardsSwiper } from "./swiper/Swipers";
import { getTextWithLineBreaks } from "./utils/getTextWithLineBreaks";
import { PortableText } from "@portabletext/react";

export default function AwardsSection({ awards }: { awards: awardsType[] }) {
  // const awards: awardsType[] = await getAwards();

  return (
    <div className="relative px-0">
      {awards.map((award) => {
        const titleWithLineBreaks =
          award.awardsSection.awardsSectionTitle.replace(/\\n/g, "\n");
        const titleWithoutLineBreaks =
          award.awardsSection.awardsSectionTitle.replace(/\\n/g, " ");
        return (
          <div key={award._id}>
            <div className="text-center text-theme-dark px-[5%]">
              <h3 className="uppercase">
                {getTextWithLineBreaks(
                  award.awardsSection.awardsSectionSubTitle
                )}
              </h3>
              <div className="block xsmall:hidden pt-[2.8rem] pb-[3rem]">
                {titleWithLineBreaks.split("\n").map((line, index) => {
                  return (
                    <h2
                      key={index}
                      className="leading-[clamp(3rem,9vw,4.5rem)]"
                    >
                      {line}
                    </h2>
                  );
                })}
              </div>
              <div className="hidden xsmall:block">
                {titleWithoutLineBreaks.split("\n").map((line, index) => {
                  return (
                    <h2 key={index} className="pt-[1.5rem]">
                      {line}
                    </h2>
                  );
                })}
              </div>
              <div className="awards__section__text__region max-w-[832px] mx-auto pt-[0.5rem] pb-[4rem]">
                <PortableText value={award.awardsSection.awardsSectionText} />
              </div>
            </div>
            <div className="small:pl-layout-small">
              <AwardsSwiper data={awards} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

import type { awardsType } from "@/types";
// import { getAwards } from "@/sanity/sanity.query";
import Image from "next/image";
import { AwardsSwiper } from "./swiper/Swipers";

export default function AboutPageAwards({ awards }: { awards: awardsType[] }) {
  // const awards: awardsType[] = await getAwards();

  return (
    <section className="relative px-0">
      {awards.map((award) => {
        return (
          <div key={award._id} className="">
            <div className="small:hidden">
              <AwardsSwiper data={awards} />
            </div>

            <div className="hidden small:grid grid-cols-4 max-w-[1119px] gap-x-[2.9rem] gap-y-[1.1rem] mx-auto small:px-1">
              {award.awardsSection.awardsList.map((content, innerIndex) => {
                const titleWithLineBreaks = content.awardTitle.replace(
                  /\\n/g,
                  "\n"
                );
                return (
                  <div
                    key={innerIndex}
                    className="aspect-[255/345] w-[90%] xsmall:w-auto max-w-[255px] flex justify-center items-center flex-col gap-8 bg-theme-purple text-white text-center my-4 px-[5%]"
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
                            <h5
                              key={index}
                              className="font-semibold text-[1.4rem]"
                            >
                              {line}
                            </h5>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}

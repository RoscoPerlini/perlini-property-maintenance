import type { contactType } from "@/types";
import { getContactContent } from "@/sanity/sanity.query";
import ButtonLink from "./common/ButtonLink";
import GradientLine from "./assets/GradientLine";
import ContactForm from "./ContactForm";
import BgDots from "./assets/BgDots";
import ButtonLinkNew from "./common/ButtonLinkNew";

export default function ContactSection({
  showAllSizes,
  contactContent,
}: {
  showAllSizes?: boolean;
  contactContent: contactType[];
}) {
  // const contactContent: contactType[] = await getContactContent();

  return (
    <section className="bg-theme-dark text-white pt-[1.5rem] pb-[5.5rem] xsmall:pt-[2.5rem] small:py-[9rem] relative">
      <div
        className={`${
          showAllSizes
            ? "hidden xsmall:block absolute bottom-0 left-0 h-1/2 w-full small:h-[85%]"
            : "absolute bottom-0 left-0 h-full w-full"
        }`}
      >
        {/* bottom left */}
        <div className="absolute bottom-0 left-0 h-[75%] xsmall:h-[100%] w-auto mix-blend-multiply transform scale-y-[-1]">
          <BgDots />
        </div>
        <div className="absolute bottom-0 left-0 h-[75%] xsmall:h-[100%] w-auto mix-blend-multiply transform scale-y-[-1]">
          <BgDots />
        </div>
        <div className="absolute bottom-0 left-0 h-[75%] xsmall:h-[100%] w-auto mix-blend-multiply transform scale-y-[-1]">
          <BgDots />
        </div>
        <div className="absolute bottom-0 left-0 h-[75%] xsmall:h-[100%] w-auto mix-blend-multiply transform scale-y-[-1]">
          <BgDots />
        </div>

        {/* bottom right */}
        <div className="absolute small:hidden bottom-0 right-0 h-[75%] xsmall:h-[100%] w-auto mix-blend-multiply transform scale-y-[-1] scale-x-[-1]">
          <BgDots />
        </div>
        <div className="absolute small:hidden bottom-0 right-0 h-[75%] xsmall:h-[100%] w-auto mix-blend-multiply transform scale-y-[-1] scale-x-[-1]">
          <BgDots />
        </div>
        <div className="absolute small:hidden bottom-0 right-0 h-[75%] xsmall:h-[100%] w-auto mix-blend-multiply transform scale-y-[-1] scale-x-[-1]">
          <BgDots />
        </div>
        <div className="absolute small:hidden bottom-0 right-0 h-[75%] xsmall:h-[100%] w-auto mix-blend-multiply transform scale-y-[-1] scale-x-[-1]">
          <BgDots />
        </div>
      </div>

      {contactContent.map((content, index) => {
        const titleWithLineBreaks = content.contactUs.message.replace(
          /\\n/g,
          "\n"
        );
        const lineWithoutBreaks = content.contactUs.message.replace(
          /\\n/g,
          " "
        );
        const addressArr = content.contactUs.address.split(", ");

        return (
          <div key={index} className="relative">
            <div className="hidden small:block ml-[-5%] w-[105%] max-h-[5.5px] overflow-hidden small:max-w-[1218px] small:mx-auto">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 390 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.7"
                  y="0.5"
                  width="100%"
                  height="4"
                  fill="url(#4)"
                />
                <defs>
                  <linearGradient
                    id="4"
                    x1="390"
                    y1="4.49985"
                    x2="0"
                    y2="4.49985"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#D9D9D9" stopOpacity="0" />
                    <stop
                      offset="0.15625"
                      stopColor="#5003B4"
                      stopOpacity="0.5"
                    />
                    <stop offset="0.317708" stopColor="#CB425C" />
                    <stop offset="0.5" stopColor="#580BE5" />
                    <stop offset="0.708333" stopColor="#4804F8" />
                    <stop
                      offset="0.921875"
                      stopColor="#F9BA17"
                      stopOpacity="0.6"
                    />
                    <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>{" "}
            </div>

            <div className="relative my-24 small:flex gap-[2rem] small:justify-around medium:justify-between small:items-center small:w-full small:max-w-[1120px] mx-auto">
              <div className="relative px-[5%] text-center small:text-left small:px-0">
                <div className="px-14 max-w-[450px] xsmall:max-w-[520px] mx-auto small:px-0">
                  <h2 className="">{content.contactUs.title}</h2>
                  <p className="pt-14 xsmall:hidden font-300 xsmall:text-[1.6rem] text-[1.4rem]">
                    {lineWithoutBreaks}
                  </p>
                  <div className="pt-14 hidden xsmall:block">
                    {titleWithLineBreaks.split("\n").map((line, index) => {
                      return (
                        <p
                          key={index}
                          className="font-300 xsmall:text-[1.6rem] text-[1.4rem]"
                        >
                          {line}
                        </p>
                      );
                    })}
                  </div>
                  <p className="font-semibold font-headings text-[1.8rem] pt-10 px-4 small:px-0 leading-[1.4em]">
                    {addressArr.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < addressArr.length - 1 && ","}
                        {i == addressArr.length - 1 && "."}
                        <br />
                      </span>
                    ))}
                  </p>
                  <p className="font-semibold font-headings text-[1.8rem] pt-4">
                    {content.contactUs.contactNumber}
                  </p>
                  <p className="font-semibold font-headings text-[1.8rem] pt-4">
                    {content.contactUs.emailAddress}
                  </p>
                </div>
                <div className="contact__form__button__group flex flex-col gap-5 mt-16 xsmall:flex-row xsmall:justify-center small:justify-start small:pl-0">
                  <div className="xsmall:max-w-[176px]">
                    <ButtonLinkNew
                      theme="light"
                      destination={`tel:${content.contactUs.contactNumber}`}
                      text={content.contactUs.phoneButtonText}
                      ctaType="phone"
                      hoverEffect="fill-col"
                    />
                  </div>
                  <div className="xsmall:max-w-[176px]">
                    <ButtonLinkNew
                      theme="light"
                      destination={`mailto:${content.contactUs.emailAddress}`}
                      text={content.contactUs.emailButtonText}
                      ctaType="email"
                      hoverEffect="fill-col"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${
                  showAllSizes
                    ? "pt-[4.5rem] px-[5%] xsmall:pt-[6rem] small:px-0"
                    : "hidden small:block"
                }`}
              >
                <ContactForm showAllSizes={showAllSizes} />
              </div>
            </div>
            <div className="mt-24 ml-[-5%] w-[105%] max-h-[5.5px] overflow-hidden small:max-w-[1218px] small:mx-auto">
              <GradientLine position="bottom" />
            </div>
          </div>
        );
      })}
    </section>
  );
}

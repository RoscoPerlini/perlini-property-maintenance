import React from "react";
import { PortableText } from "@portabletext/react";
import { getTextWithLineBreaks } from "./utils/getTextWithLineBreaks";

const AboutIntroText = ({
  heading,
  text,
}: {
  heading: string;
  text: string[];

}) => {

  return (
    <div className="relative px-[5%] pb-[16.6rem] xsmall:pb-[15rem] small:pb-[22.7rem] text-white max-w-[1147px] mx-auto small:px-5 z-10">
      <h3 className="text-[3.2rem] font-bold pt-[4.7rem] xsmall:pt-[6rem] small:pt-[12.5rem] pb-[3.5rem] xsmall:pb-[5.4rem] small:pb-[4.7rem]">
        {heading}
      </h3>
      <div className="small:w-[87%]">
        {text.map(str => (
          <p className="pb-10 last:pb-0">{getTextWithLineBreaks(str)}</p>
        ))}
        {/* <PortableText value={text} /> */}
      </div>
    </div>
  );
};

export default AboutIntroText;

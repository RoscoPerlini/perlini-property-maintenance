import React from "react";
import { getTextWithLineBreaks } from "./utils/getTextWithLineBreaks";

const FaqIntro = ({
  messageWithLineBreaks,
  introTitle,
}: {
  messageWithLineBreaks: string;
  introTitle: string;
}) => {

  return (
    <div className="relative small:max-w-[1120px] small:mx-auto">
      <h2 className="text-white leading-[4.3rem]">{introTitle}</h2>

      <div className="pt-[3.5rem] pr-[10%] xsmall:pt-[5rem] xsmall:pr-0 xsmall:max-w-[59.4rem] small:max-w-[101.5rem]">
            <p className="text-white font-[500]">
              {getTextWithLineBreaks(messageWithLineBreaks)}
            </p>
      </div>


      {/* <div className="xsmall:hidden pt-[3.5rem] pr-[10%]">
        {messageWithLineBreaks.split("\n").map((line, index) => {
          return (
            <p key={index} className="text-white font-[500]">
              {line}
            </p>
          );
        })}
      </div> */}
      {/* tablet +  */}
      {/* <div className="hidden xsmall:block pt-[5rem] pr-0 xsmall:max-w-[59.4rem] small:max-w-[101.5rem] ">
        {messageWithoutLineBreaks.split("\n").map((line, index) => {
          return (
            <p key={index} className="text-white font-[500]">
              {line}
            </p>
          );
        })}
      </div> */}
    </div>
  );
};

export default FaqIntro;

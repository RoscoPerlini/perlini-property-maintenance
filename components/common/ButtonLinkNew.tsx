"use client";
import Link from "next/link";
import { General, Email, Phone } from "./IconSvgs";

const ButtonLinkNew = ({
  destination,
  text,
  bgColor,
  theme,
  ctaType,
  hoverEffect,
}: {
  destination?: string | { pathname: string; query?: string };
  text: string;
  bgColor?: string;
  theme: "dark" | "light" | "white";
  ctaType: "general" | "email" | "phone" | "none";
  hoverEffect: "outline" | "fill-col" | "fill-white";
}) => {
  const isDestinationObject = typeof destination === "object";

  // Construct href based on destination type
  let href = destination;
  if (typeof destination === "object") {
    // Construct the query string if there are query parameters
    const queryString = destination.query ? `?filter=${destination.query}` : "";
    href = `${destination.pathname}${queryString}`;
  }

  const color = theme == "dark" ? `theme-dark` : `white`;
  const fill = theme == "dark" ? `fill-theme-dark` : `fill-white`;
  let hover;
  let svgHover;

  if (hoverEffect == "outline") {
    hover = `hover:border-[#6015EF] hover:text-[#6015EF] hover:border-[3px] hover:-mt-[0px] hover:py-[1rem]`;
    svgHover = `group-hover:fill-[#6015EF] `;
  } else if (hoverEffect == "fill-col") {
    hover = `hover:bg-[#6015EF] hover:border-[#6015EF] hover:text-white `;
    svgHover = `group-hover:fill-white `;
  } else if (hoverEffect == "fill-white") {
    hover = `hover:bg-white hover:border-white hover:text-[#6015EF] `;
    svgHover = `group-hover:fill-[#6015EF] `;
  } else {
    hover = ``;
    svgHover = ``;
  }

  let btnType;
  if (ctaType == "email") {
    btnType = <Email fill={fill} hover={svgHover} />;
  } else if (ctaType == "general") {
    btnType = <General fill={fill} hover={svgHover} />;
  } else if (ctaType == "phone") {
    btnType = <Phone fill={fill} hover={svgHover} />;
  } else if (ctaType == "none") {
    btnType = ``;
  }
  // changed border through global css as tailwind uses border-style which wasnt working so changed.
  return (
    <Link
      href={`${href}`}
      className={`button__link relative block border-[2px] border-solid rounded-sm small:border-${color} py-[1.1rem] max-w-[319.11px] mx-auto  w-full bg-${bgColor} transition duration-[350ms] hover:duration-[350ms] ${hover} group mb-[2px] xsmall:max-w-full

      ${
        bgColor == "white"
          ? `text-theme-purple bg-white`
          : bgColor == "theme-dark"
          ? `border-theme-dark text-white `
          : `text-${color}`
      } `}
    >
      <div
        className={`flex justify-center items-center gap-6 mx-auto h-full w-full max-w-fit ${
          ctaType == "email" || "phone" ? `px-[2.2rem]` : `px-11`
        } min-w-[176px] `}
      >
        {btnType}
        <span className="uppercase text-center font-[700] font-headings tracking-[0.06em] text-[1.6rem] bg-transparent hover:bg-transparent">
          <span className="absolute top-0 left-0 w-full h-full "></span>
          {text}
        </span>
      </div>
    </Link>
  );
};

export default ButtonLinkNew;

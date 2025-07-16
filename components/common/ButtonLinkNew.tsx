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
  let bgSvg;
  let bgHover;

  if (hoverEffect == "outline") {
    hover = `hover:text-[#6015EF]`;
    svgHover = `group-hover:fill-[#6015EF] `;
    bgHover = `group-hover:bg-transparent `;
    bgSvg = `group-hover:stroke-[#6015EF]`;
  } else if (hoverEffect == "fill-col") {
    hover = `hover:text-white`;
    bgHover = `group-hover:bg-[#6015EF] `;
    svgHover = `group-hover:fill-white `;
    bgSvg = `group-hover:fill-[#6015EF] group-hover:stroke-[#6015ef]`;
  } else if (hoverEffect == "fill-white") {
    hover = `hover:text-[#6015EF] `;
    bgHover = `group-hover:bg-[#6015EF] `;
    svgHover = `group-hover:fill-[#6015EF] `;
    bgSvg = `group-hover:fill-white stroke-white`;
  } else {
    hover = ``;
    svgHover = ``;
    bgSvg = ``;
    bgHover = ``;
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
      // className={`button__link relative block border-[2px] border-solid rounded-sm small:border-${color} py-[1.1rem] max-w-[319.11px] mx-auto  w-full bg-${bgColor} transition duration-[350ms] hover:duration-[350ms] ${hover} group mb-[2px] xsmall:max-w-full
      className={`button__link w-full relative block border-[2px] border-solid border-transparent py-[1.1rem] max-w-[319.11px] mx-auto transition duration-300 group mb-[2px] xsmall:max-w-full ${hover}

      ${
        bgColor == "white"
          ? `text-theme-purple`
          : bgColor == "theme-dark"
            ? `text-white `
            : `text-${color}`
      } `}
    >
      <div className="button__link__bg__block">
        {/* small */}
        <svg
          className={`button__link__svg button__link__svg__small ${bgSvg} -z-0 duration-300`}
          preserveAspectRatio="none"
          viewBox="0 0 175 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M173.229 1V43.2227L162.849 49H1.54785V6.74023L11.8662 1H173.229Z"
            stroke="currentColor"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            className={`${bgSvg} duration-300`}
          />
        </svg>

        {/* 200 */}
        <svg
          className={`button__link__svg button__link__svg__200 ${bgSvg}  -z-0 duration-300`}
          preserveAspectRatio="none"
          viewBox="0 0 211 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M209.389 1.5V43.7178L198.82 49.5H1.38867V7.24512L11.8936 1.5H209.389Z"
            stroke="currentColor"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            className={`${bgSvg} duration-300`}
          />
        </svg>

        {/* 300 */}
        <svg
          className={`button__link__svg button__link__svg__300 ${bgSvg} -z-0 duration-300`}
          preserveAspectRatio="none"
          viewBox="0 0 311 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M310 1V43.2256L299.739 49H1V6.73828L11.2617 1H310Z"
            stroke="currentColor"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            className={`${bgSvg} duration-300`}
          />
        </svg>

        {/* 400 */}
        <svg
          className={`button__link__svg button__link__svg__400 ${bgSvg} -z-0 duration-300`}
          preserveAspectRatio="none"
          viewBox="0 0 401 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M400 1V43.2295L389.876 49H1V6.73828L11.2617 1H400Z"
            stroke="currentColor"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            className={`${bgSvg} duration-300`}
          />
        </svg>

        {/* 500 */}
        <svg
          className={`button__link__svg button__link__svg__500 ${bgSvg} -z-0 duration-300`}
          preserveAspectRatio="none"
          viewBox="0 0 512 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M510.275 1V43.2178L499.707 49H1V6.74512L11.5049 1H510.275Z"
            stroke="currentColor"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            className={`${bgSvg} duration-300`}
          />
        </svg>
      </div>

      <div
        className={`flex justify-center items-center gap-6 mx-auto h-full w-full max-w-fit ${
          ctaType == "email" || "phone" ? `px-[2.2rem]` : `px-11`
        } min-w-[210px] z-10 relative`}
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

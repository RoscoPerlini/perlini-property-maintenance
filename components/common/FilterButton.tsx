import React from "react";
import { General } from "./IconSvgs";
interface FilterButtonProps {
  text: string;
  selected?: boolean;
  onClick?: () => void; // Add onClick to the type definition
  serviceSubFilter?: boolean;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  text,
  onClick,
  selected,
  serviceSubFilter,
}: FilterButtonProps) => {
  return (
    <div
      className={`${selected ? "" : ""} ${
        serviceSubFilter ? "w-fit" : "w-full"
      } block relative py-[1.1rem] text-white transition group cursor-pointer w-full`}
      onClick={onClick}
    >
      <div className="button__link__bg__block">
        {/* small */}
        <svg
          className={`${selected ? "fill-theme-purple stroke-theme-purple " : "bg-transparent  stroke-white"} ${serviceSubFilter ? "group-hover:fill-white" : ""} group-hover:duration-300 button__link__svg button__link__svg__small -z-0 duration-300`}
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
            className={`duration-300 ${selected ? "stroke-theme-purple" : ""}`}
          />
        </svg>

        {/* 200 */}
        <svg
          className={`${selected ? "fill-theme-purple stroke-theme-purple " : "bg-transparent  stroke-white"} ${serviceSubFilter ? "group-hover:fill-white" : ""} group-hover:duration-300 button__link__svg button__link__svg__200 -z-0 duration-300`}
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
            className={`duration-300 ${selected ? "stroke-theme-purple" : ""}`}
          />
        </svg>

        {/* 300 */}
        <svg
          className={`${selected ? "fill-theme-purple stroke-theme-purple " : "bg-transparent  stroke-white"} ${serviceSubFilter ? "group-hover:fill-white" : ""} group-hover:duration-300 button__link__svg button__link__svg__300 -z-0 duration-300`}
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
            className={`duration-300 ${selected ? "stroke-theme-purple" : ""}`}
          />
        </svg>

        {/* 400 */}
        <svg
          className={`${selected ? "fill-theme-purple stroke-theme-purple " : "bg-transparent  stroke-white"} ${serviceSubFilter ? "group-hover:fill-white" : ""} group-hover:duration-300 button__link__svg button__link__svg__400 -z-0 duration-300`}
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
            className={`duration-300 ${selected ? "stroke-theme-purple" : ""}`}
          />
        </svg>

        {/* 500 */}
        <svg
          className={`${selected ? "fill-theme-purple stroke-theme-purple " : "bg-transparent  stroke-white"} ${serviceSubFilter ? "group-hover:fill-white" : ""} group-hover:duration-300 button__link__svg button__link__svg__500 -z-0 duration-300`}
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
            className={`duration-300 ${selected ? "stroke-theme-purple" : ""}`}
          />
        </svg>
      </div>

      <div className="relative flex justify-center items-center gap-6 mx-auto min-w-[176px] px-[1.4rem] small:min-w-0 ">
        {serviceSubFilter && (
          <General fill="fill-white" hover="group-hover:fill-[#6015EF]" />
        )}

        <h5 className="uppercase text-center group-hover:text-[#6015EF]">
          {text}
        </h5>
      </div>
    </div>
  );
};

export default FilterButton;

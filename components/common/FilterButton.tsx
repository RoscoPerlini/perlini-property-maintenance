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
      className={`${
        selected
          ? "bg-theme-purple text-white border-theme-purple "
          : "bg-transparent text-white border-white"
      } ${
        serviceSubFilter
          ? "hover:bg-white hover:text-theme-purple w-fit"
          : "w-full"
      } block rounded-sm border-solid py-[1.1rem] border-[2px] transition hover:duration-300 group cursor-pointer w-full`}
      onClick={onClick}
    >
      <div className="flex justify-center items-center gap-6 mx-auto min-w-[176px] px-[1.4rem] small:min-w-0">
        {serviceSubFilter && (
          <General fill="fill-white" hover="group-hover:fill-[#6015EF]" />
        )}

        <h5 className="uppercase text-center">{text}</h5>
      </div>
    </div>
  );
};

export default FilterButton;

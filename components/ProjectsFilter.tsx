"use client";
import { useEffect, useState } from "react";
import type { projectType, projectsPageType } from "@/types";
import BgDots from "./assets/BgDots";
import ProjectsComponent from "./ProjectComponent";
import FilterButton from "./common/FilterButton";
import { FilterButtonSwiper } from "./swiper/Swipers";
import { useSearchParams } from "next/navigation";
import { removelineBreakCodeFromHTML } from "./utils/lineBreaks";
import { motion } from "framer-motion";

export default function ProjectsFilter({
  projects,
  assets,
}: {
  projects: projectType[];
  assets: projectsPageType[];
}) {
  const [filters, setFilters] = useState<{ id: number; category: string }[]>(
    []
  );
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");
  const allProjects = [...projects];
  const [iteration, setIteration] = useState(4);

  // console.log(allProjects, "this is all the projects");

  useEffect(() => {
    // Check if there is a filterParam in the URL
    if (filterParam) {
      // Assuming categoriesArray is available here or you fetch it similarly
      const categoriesArray = projects.reduce<string[]>((acc, project) => {
        project.categories.forEach((category) => {
          if (
            category.serviceTitle !== "" &&
            !acc.includes(category.serviceTitle)
          ) {
            acc.push(category.serviceTitle);
          }
        });
        return acc;
      }, []);

      // Set the initial filter based on filterParam
      const initialFilter = categoriesArray.includes(filterParam)
        ? [{ id: Math.random(), category: filterParam }] // Using Math.random() for unique ID, adjust as needed
        : [];
      setFilters(initialFilter);
    }
  }, [filterParam]);

  const handleFilter = (category: string) => {
    // Check if the category already exists in the filters array

    const filterIndex = filters.findIndex(
      (filter) => filter.category === category
    );

    if (filterIndex !== -1) {
      // Remove the filter if it already exists
      const updatedFilters = [...filters];
      updatedFilters.splice(filterIndex, 1);
      setFilters(updatedFilters);
    } else {
      // Add the filter if it doesn't exist
      const newFilter: { id: number; category: string } = {
        id: filters.length, // Assign a unique ID to the filter
        category: category,
      };
      setFilters([...filters, newFilter]);
    }
  };

  const handleFilterToggle = () => {
    if (filters.length === categoriesArray.length) {
      // If all categories are already selected, clear all filters
      setFilters([]);
    } else {
      // Otherwise, populate filters with all categories
      setFilters(
        categoriesArray.map((category, index) => ({ id: index, category }))
      );
    }
  };

  let categories = new Set<string>();
  projects.forEach((project) => {
    project.categories.forEach((category) => {
      if (category.serviceTitle !== "") {
        // added removelineBreakCodeFromHTML() function so that sort function(below) matches the set order (also below)
        categories.add(removelineBreakCodeFromHTML(category.serviceTitle));
      }
    });
  });
  const order: string[] = [
    "damp proofing",
    "leak detection",
    "water damage repairs",
    "maintenance",
    "renovation",
    "roofing",
  ];

  // Assuming `categories` is a Set<string> with your categories
  const categoriesArray = Array.from(categories);

  // Ensure sorting is robust against case sensitivity and missing items
  const sortedCategories: string[] = categoriesArray.sort((a, b) => {
    const indexA = order.indexOf(a.toLowerCase()); // Ensure case-insensitive comparison
    const indexB = order.indexOf(b.toLowerCase()); // Ensure case-insensitive comparison

    if (indexA === -1) return 1; // Push a to end if not found
    if (indexB === -1) return -1; // Push b to end if not found
    return indexA - indexB;
  });

  return (
    <div>
      <div className="relative bg-theme-dark overflow-hidden pt-[3.7rem] pb-[5rem] px-[5%] xsmall:px-0 xsmall:pt-[4.2rem] small:pt-[9rem] small:pb-[11rem] small:px-layout-small">
        {/* top right */}
        <div className="hidden xsmall:block absolute top-0 right-0 h-[140%] w-auto mix-blend-multiply rotate-180 scale-y-[-1]">
          <BgDots />
        </div>
        <div className="hidden xsmall:block absolute top-0 right-0 h-[140%] w-auto mix-blend-multiply rotate-180 scale-y-[-1]">
          <BgDots />
        </div>
        <div className="hidden xsmall:block absolute top-0 right-0 h-[140%] w-auto mix-blend-multiply rotate-180 scale-y-[-1]">
          <BgDots />
        </div>
        <div className="hidden xsmall:block absolute top-0 right-0 h-[140%] w-auto mix-blend-multiply rotate-180 scale-y-[-1]">
          <BgDots />
        </div>
        <div className="hidden xsmall:block absolute top-0 right-0 h-[140%] w-auto mix-blend-multiply rotate-180 scale-y-[-1]">
          <BgDots />
        </div>

        {/* top left */}
        <div className="hidden small:block absolute top-0 left-0 h-[140%] w-auto mix-blend-multiply">
          <BgDots />
        </div>
        <div className="hidden small:block absolute top-0 left-0 h-[140%] w-auto mix-blend-multiply">
          <BgDots />
        </div>
        <div className="hidden small:block absolute top-0 left-0 h-[140%] w-auto mix-blend-multiply">
          <BgDots />
        </div>
        <div className="hidden small:block absolute top-0 left-0 h-[140%] w-auto mix-blend-multiply">
          <BgDots />
        </div>
        <div className="hidden small:block absolute top-0 left-0 h-[140%] w-auto mix-blend-multiply">
          <BgDots />
        </div>
        <div className="relative medium:max-w-[1120px] medium:mx-auto">
          <h2 className="text-white xsmall:px-[5%] small:px-0">
            Latest Projects
          </h2>

          <div className="uppercase  font-semibold tracking[0.06em]  text-white flex justify-between pt-[3.5rem] pb-[3.3rem] xsmall:pt-[5rem] xsmall:px-[5%] small:px-0 small:pt-[6rem] small:pb-[4rem]">
            <p className="text-[1.4rem] opacity-60 xsmall:opacity-100 xsmall:text-[1.6rem]">
              Filter by
            </p>
            <div className="flex gap-[1.5rem] items-center">
              <p className=" text-[1.4rem] opacity-60 xsmall:opacity-100 xsmall:text-[1.6rem]">
                view all
              </p>

              <div
                className="bg-white rounded-full w-[56px] h-[28px] relative flex justify-start items-center px-[2px] cursor-pointer"
                onClick={() => handleFilterToggle()}
              >
                <span
                  className={`w-[23.33px] aspect-square rounded-[100%] bg-theme-purple ${
                    filters.length === categoriesArray.length
                      ? "ml-auto"
                      : "ml-0"
                  }`}
                  style={{ transition: "all 5s ease" }}
                ></span>
              </div>
            </div>
          </div>

          <div className="hidden xsmall:block small:hidden">
            <FilterButtonSwiper
              categories={categoriesArray}
              filters={filters}
              onClick={handleFilter}
            />
          </div>

          <div className="filter__flex flex flex-col gap-4 xsmall:hidden small:flex small:flex-row flex-wrap small:justify-between">
            {categoriesArray.map((category, index) => {
              const filterMatch = filters.some(
                (filter) => filter.category === category
              );

              return (
                <div key={index} className="xsmall:w-fit flex-grow">
                  <FilterButton
                    text={removelineBreakCodeFromHTML(category)}
                    selected={filterMatch} // Pass the boolean value of filterMatch
                    onClick={() => handleFilter(category)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* projects */}
      <div>
        {assets.map((content, index) => (
          <div key={content._id + index}>
            {allProjects
              .filter((project) =>
                filters.length > 0
                  ? project.categories.some((category) =>
                      filters.some((filter) =>
                        removelineBreakCodeFromHTML(
                          category.serviceTitle
                        ).includes(filter.category)
                      )
                    )
                  : true
              )
              .map((filteredProject, index) => {
                if (filteredProject && index + 1 <= iteration) {
                  return (
                    <div
                      key={filteredProject._id}
                      className="mt-section-gap small:mt-[325px]"
                    >
                      <ProjectsComponent
                        key={filteredProject._id}
                        project={filteredProject}
                        bg={content.ProjectsPage.BgImage}
                      />
                    </div>
                  );
                }
              })}
          </div>
        ))}
        <div
          className={`${
            projects.length <= 4 || projects.length <= iteration
              ? "hidden"
              : "block"
          } w-full mx-auto mt-section-gap px-[5%] xsmall:w-fit `}
        >
          <button
            type="submit"
            className="relative w-full text-theme-dark bg-white border-2 border-theme-dark rounded-sm cursor-pointer font-headings h-[5rem] font-[600] p-4 uppercase text-[1.6rem] tracking-[0.06em]  xsmall:w-[17.6rem] z-20 text-center hover:border-[#6015EF] hover:text-[#6015EF] hover:border-[3px] transition hover:duration-300"
            onClick={() => setIteration(iteration + 4)}
          >
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { projectType } from "@/types";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import ProjectsFilter from "../ProjectsFilter";

export default function ProjectsFilterPreview({
  initial,
  originalContent,
  assets,
}: {
  initial: QueryResponseInitial<projectType[]>;
  originalContent: any;
  assets: any;
}) {
  function compareByPostition(a: projectType, b: projectType) {
    return a.orderPosition - b.orderPosition;
  }

  const { data } = useQuery<projectType[] | null>(
    originalContent,
    {},
    { initial }
  );

  const sortedData = data?.sort(compareByPostition);

  // constg sortedData = data.
  return sortedData ? (
    <div>
      <ProjectsFilter projects={sortedData} assets={assets} />
    </div>
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}

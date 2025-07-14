"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { projectType } from "@/types";
import { ProjectsSwiper } from "../swiper/Swipers";

export default function ProjectsSwiperPreview({
  initial,
  originalContent,
}: {
  initial: QueryResponseInitial<projectType[]>;
  originalContent: any;
}) {
  const { data } = useQuery<projectType[] | null>(
    originalContent,
    {},
    { initial }
  );

  return data ? (
    <ProjectsSwiper data={data} />
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}

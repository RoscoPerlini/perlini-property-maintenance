"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import type { serviceType } from "@/types";
import { ServiceSwiper } from "../swiper/Swipers";

export default function ServiceSwiperPreview({
  initial,
  originalContent,
}: {
  initial: QueryResponseInitial<serviceType[]>;
  originalContent: any;
}) {
  const { data } = useQuery<serviceType[] | null>(
    originalContent,
    {},
    { initial }
  );

  return data ? (
    <div>
      <ServiceSwiper data={data} />
    </div>
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}

"use client";

import { getServiceLinks, getServicesPageContent } from "@/sanity/sanity.query";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import ServiceImageLink from "../ServiceImageLink";
import type { serviceType } from "@/types";
import { ServicesBannerContent } from "../ServicesBannerContent";

export default function ServicesBannerContentPreview({
  initial,
  allServices,
}: {
  initial: QueryResponseInitial<SanityDocument>;
  allServices: serviceType[];
}) {
  const { data } = useQuery<SanityDocument | null>(
    getServicesPageContent,
    {},
    { initial }
  );

  return data ? (
    <ServicesBannerContent
      servicePageContent={data}
      allServices={allServices}
    />
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}

"use client";
import { getServiceLinks } from "@/sanity/sanity.query";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import ServiceImageLink from "../ServiceImageLink";
import type { serviceType } from "@/types";

export default function ServiceImageLinkPreview({
  initial,
}: {
  initial: QueryResponseInitial<serviceType[]>;
}) {
  const { data } = useQuery<serviceType[] | null>(
    getServiceLinks,
    {},
    { initial }
  );

  return data ? (
    data.map((service, index) => (
      <ServiceImageLink key={service._id} service={service} index={index} />
    ))
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}

"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import { getServicesPageContent } from "@/sanity/sanity.query";
import ServicesPageContent from "../ServicesPageContent";

export default function ServicesPageContentPreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument>;
}) {
  const { data } = useQuery<SanityDocument | null>(
    getServicesPageContent,
    {},
    { initial }
  );

  return data ? (
    <div>
      <ServicesPageContent pageData={data} />
    </div>
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}

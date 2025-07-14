"use client";
import { getServiceLinks } from "@/sanity/sanity.query";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
// import type { serviceType } from "@/types";
import ServiceItem from "../ServiceItem";

export default function DetailedServiceListPreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument[]>;
}) {
  const { data } = useQuery<SanityDocument[] | null>(
    getServiceLinks,
    {},
    { initial }
  );

  return data ? (
    <div>
      {data.map((service, index) => {
        return (
          <div key={service._id}>
            <ServiceItem
              key={service._id}
              title={service.serviceTitle}
              slug={service.slug}
              image={service.servicePageImage}
              heading={service.serviceSummary}
              headingListBody={service.serviceSummaryBodyVersion}
              text={service.description}
              index={index}
            />
          </div>
        );
      })}
    </div>
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}

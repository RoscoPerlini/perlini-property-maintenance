"use client";

import { SINGLE_SERVICE } from "@/sanity/sanity.query";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { QueryParams, SanityDocument } from "next-sanity";

import ServicePageContent from "../ServicePageContent";

export default function ServicePageContentPreview({
  initial,
  params,
}: {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams;
}) {
  const { data } = useQuery<SanityDocument | null>(SINGLE_SERVICE, params, {
    initial,
  });

  return data ? (
    <ServicePageContent data={data} />
  ) : (
    <div className="bg-red-100">Post not found</div>
  );
}

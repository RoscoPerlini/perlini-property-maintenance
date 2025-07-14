"use client";

import { awardsType } from "@/types";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import AwardsSection from "../AwardsSection";

export default function AwardsSectionPreview({
  initial,
  originalContent,
}: {
  initial: QueryResponseInitial<awardsType[]>;
  originalContent: any;
}) {
  const { data } = useQuery<awardsType[] | null>(
    originalContent,
    {},
    { initial }
  );

  return data ? (
    <div>
      <AwardsSection awards={data} />
    </div>
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}

"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import AboutPageAwards from "../AboutPageAwards";
import { awardList } from "@/sanity/sanity.query";
import { awardsType } from "@/types";

export default function AboutPageAwardsPreview({
  initial,
}: {
  initial: QueryResponseInitial<awardsType[]>;
}) {
  const { data } = useQuery<awardsType[] | null>(awardList, {}, { initial });

  return data ? (
    <div>
      <AboutPageAwards awards={data} />
    </div>
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}

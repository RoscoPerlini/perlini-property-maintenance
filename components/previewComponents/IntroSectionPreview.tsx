"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import type { introType } from "@/types";
import IntroSection from "../IntroSection";

export default function IntroSectionPreview({
  initial,
  originalContent,
}: {
  initial: QueryResponseInitial<introType[]>;
  originalContent: any;
}) {
  const { data } = useQuery<introType[] | null>(
    originalContent,
    {},
    { initial }
  );

  return data ? (
    <div>
      <IntroSection intro={data} />
    </div>
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}

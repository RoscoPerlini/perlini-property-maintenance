"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import type { heroType } from "@/types";
import Hero from "../Hero";

export default function HeroPreview({
  initial,
  originalContent,
}: {
  initial: QueryResponseInitial<heroType[]>;
  originalContent: any;
}) {
  const { data } = useQuery<heroType[] | null>(
    originalContent,
    {},
    { initial }
  );

  return data ? (
    <div>
      <Hero content={data} />
    </div>
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}

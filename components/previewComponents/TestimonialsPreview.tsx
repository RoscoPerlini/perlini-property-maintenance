"use client";

import { testimonialsType } from "@/types";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import Testimonials from "../Testimonials";

export default function TestimonialsPreview({
  initial,
  originalContent,
}: {
  initial: QueryResponseInitial<testimonialsType[]>;
  originalContent: any;
}) {
  const { data } = useQuery<testimonialsType[] | null>(
    originalContent,
    {},
    { initial }
  );

  return data ? (
    <div>
      <Testimonials testimonials={data} />
    </div>
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}

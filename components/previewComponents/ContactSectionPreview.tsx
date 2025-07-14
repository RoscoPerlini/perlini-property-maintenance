"use client";

import { awardsType, contactType } from "@/types";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import AwardsSection from "../AwardsSection";
import ContactSection from "../ContactSection";

export default function ContactSectionPreview({
  initial,
  originalContent,
}: {
  initial: QueryResponseInitial<contactType[]>;
  originalContent: any;
}) {
  const { data } = useQuery<contactType[] | null>(
    originalContent,
    {},
    { initial }
  );

  return data ? (
    <div>
      <ContactSection contactContent={data} />
    </div>
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}

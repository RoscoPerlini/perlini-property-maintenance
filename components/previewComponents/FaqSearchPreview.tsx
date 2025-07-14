"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import FaqSearch from "../FaqSearch";
import { faqItems } from "@/sanity/sanity.query";

interface Faq {
  _id: string;
  question: string;
  answer: string;
}

export default function FaqSearchPreview({
  initial,
  placeholder,
}: {
  initial: QueryResponseInitial<any[]>;
  placeholder: string;
}) {
  const { data } = useQuery<any[] | null>(faqItems, {}, { initial });

  return data ? (
    <div>
      <FaqSearch placeholder={placeholder} faqs={data} />
    </div>
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}

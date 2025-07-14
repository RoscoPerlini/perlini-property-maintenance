"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import FaqIntro from "../FaqIntro";
import { faqPageType } from "@/types";

export default function FaqIntroPreview({
  initial,
  originalContent,
}: {
  initial: QueryResponseInitial<faqPageType[]>;
  originalContent: any;
}) {
  const { data } = useQuery<faqPageType[] | null>(
    originalContent,
    {},
    { initial }
  );

  if (data) {
    return (
      <div>
        <FaqIntro
          introTitle={data[0].FaqPage.introTitle}
          messageWithLineBreaks={data[0].FaqPage.introMessage}
        />
      </div>
    );
  } else {
    return <div className="bg-red-100">No posts found</div>;
  }
}

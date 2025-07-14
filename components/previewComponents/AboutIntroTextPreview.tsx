"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import AboutIntroText from "../AboutIntroText";
import { aboutPageContent } from "@/sanity/sanity.query";
// import { getServicesPageContent } from "@/sanity/sanity.query";
// import InnerHero from "../InnerHero";
// import { useEffect, useState } from "react";

// interface PageData {
//   pageHeading: string;
//   pageImage: {
//     url: string;
//     alt: string;
//   };
// }

export default function AboutIntroTextPreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument>;
}) {
  const { data } = useQuery<SanityDocument | null>(
    aboutPageContent,
    {},
    { initial }
  );

  return data ? (
    <div>
      <AboutIntroText
        heading={data[0]?.aboutPage?.introHeading}
        text={data[0]?.aboutPage?.introText}
      />
    </div>
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}

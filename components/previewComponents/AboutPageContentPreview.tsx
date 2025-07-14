"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import AboutIntroText from "../AboutIntroText";
import { aboutPageContent } from "@/sanity/sanity.query";
import AboutPageContent from "../AboutPageContent";
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

export default function AboutPageContentPreview({
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
      <AboutPageContent
        contentArea={data[0]?.aboutPage?.contentArea}
        featureText={data[0]?.aboutPage?.featureText}
      />
    </div>
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}

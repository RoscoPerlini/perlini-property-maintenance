"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import { getServicesPageContent } from "@/sanity/sanity.query";
import InnerHero from "../InnerHero";
import { useEffect, useState } from "react";

interface PageData {
  pageHeading: string;
  pageImage: {
    url: string;
    alt: string;
  };
}

export default function InnerHeroPreview({
  initial,
  sectionTitle,
  pageNumber,
  originalContent,
  pageVariable,
}: {
  initial: QueryResponseInitial<SanityDocument>;
  sectionTitle: string;
  pageNumber: string;
  originalContent: any;
  pageVariable: string;
}) {
  const { data } = useQuery<SanityDocument | null>(
    originalContent,
    {},
    { initial }
  );

  const [heroData, setHeroData] = useState<any>();

  useEffect(() => {
    if (data) {
      setHeroData(data[0]);
    }
    // console.log(heroData);
  }, [data]);

  // title={data[0]?.ServicesPage.pageHeading}

  // const heroTitle = data[0]?.[pageVariable].pageHeading;

  return heroData ? (
    <div>
      <InnerHero
        title={heroData?.[pageVariable]?.pageHeading}
        image={heroData?.[pageVariable]?.pageImage}
        sectionTitle={sectionTitle}
        imageAltText={heroData?.[pageVariable]?.pageImage?.alt}
        pageNumber={pageNumber}
        imageCaptionText={heroData?.[pageVariable]?.serviceAreas}
      />
    </div>
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}

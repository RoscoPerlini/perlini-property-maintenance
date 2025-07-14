import { getFaqPageContent } from "@/sanity/sanity.query";

import type { faqPageType } from "@/types";
import Image from "next/image";

export default async function SearchResultImage() {
  const faqPageContent: faqPageType[] = await getFaqPageContent();
  return (
    <div className="relative min-w-[52px] min-h-[52px] aspect-square cursor-pointer">
      {faqPageContent.map((content) => {
        return (
          <Image
            src={content.FaqPage.pageImage.image}
            fill={true}
            alt={content.FaqPage.pageImage.alt}
            className=""
          />
        );
      })}
    </div>
  );
}

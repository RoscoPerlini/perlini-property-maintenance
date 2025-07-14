import ContactSection from "@/components/ContactSection";
import FaqIntro from "@/components/FaqIntro";
import FaqSearch from "@/components/FaqSearch";
import InnerHero from "@/components/InnerHero";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";
import BgDots from "@/components/assets/BgDots";
import FaqIntroPreview from "@/components/previewComponents/FaqIntroPreview";
import FaqSearchPreview from "@/components/previewComponents/FaqSearchPreview";
import InnerHeroPreview from "@/components/previewComponents/InnerHeroPreview";
import { removelineBreakCodeFromHTML } from "@/components/utils/lineBreaks";
import { loadQuery } from "@/sanity/lib/store";
import {
  faqItems,
  faqPageInitialContent,
  getContactContent,
  getFaqPageContent,
  getFaqs,
} from "@/sanity/sanity.query";
import type { contactType, faqPageType } from "@/types";
import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import { Suspense } from "react";
interface Faq {
  _id: string;
  question: string;
  answer: PortableTextBlock[];
}

export async function metadata() {
  const faqPageContent: faqPageType[] = await getFaqPageContent();
  return {
    title: `Perlini Property Management | ${faqPageContent[0]?.FaqPage?.pageMetadata?.pageTitle || "FAQ's page"}`,

    description:
      faqPageContent[0]?.FaqPage?.pageMetadata?.pageDescription ||
      removelineBreakCodeFromHTML(faqPageContent[0].FaqPage.pageHeading),
    openGraph: {
      images: faqPageContent[0].FaqPage.pageImage.image,
    },
  };
}

export default async function faqs() {
  const faqPageContent: faqPageType[] = await getFaqPageContent();
  const faqs: Faq[] = await getFaqs();
  const contactContent: contactType[] = await getContactContent();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const initialFaqPageContent = await loadQuery<SanityDocument>(
    faqPageInitialContent,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  const initialFaqItems = await loadQuery<SanityDocument>(
    faqItems,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={<div>Loading search parameters...</div>}>
        {draftMode().isEnabled ? (
          <InnerHeroPreview
            pageVariable="FaqPage"
            initial={initialFaqPageContent.data[0]}
            sectionTitle="FAQ's"
            pageNumber="05"
            originalContent={faqPageInitialContent}
          />
        ) : (
          <InnerHero
            title={faqPageContent[0].FaqPage.pageHeading}
            image={faqPageContent[0].FaqPage.pageImage}
            sectionTitle="FAQ's"
            imageAltText={faqPageContent[0].FaqPage.pageImage.alt}
            pageNumber="05"
          />
        )}
        <div>
          <div className="relative bg-theme-dark overflow-hidden pt-[5rem] pb-[16rem] px-[5%] xsmall:pt-[5.2rem] xsmall:pb-[10rem] small:pt-[9rem] small:pb-[20rem] small:px-layout-small mt-section-gap">
            {/* top right */}
            <div className="hidden xsmall:block absolute top-0 right-0 h-[140%] w-auto mix-blend-multiply rotate-180 scale-y-[-1]">
              <BgDots />
            </div>
            <div className="hidden xsmall:block absolute top-0 right-0 h-[140%] w-auto mix-blend-multiply rotate-180 scale-y-[-1]">
              <BgDots />
            </div>
            <div className="hidden xsmall:block absolute top-0 right-0 h-[140%] w-auto mix-blend-multiply rotate-180 scale-y-[-1]">
              <BgDots />
            </div>
            <div className="hidden xsmall:block absolute top-0 right-0 h-[140%] w-auto mix-blend-multiply rotate-180 scale-y-[-1]">
              <BgDots />
            </div>
            <div className="hidden xsmall:block absolute top-0 right-0 h-[140%] w-auto mix-blend-multiply rotate-180 scale-y-[-1]">
              <BgDots />
            </div>

            {/* top left */}
            <div className="hidden small:block absolute top-0 left-0 h-[140%] w-auto mix-blend-multiply">
              <BgDots />
            </div>
            <div className="hidden small:block absolute top-0 left-0 h-[140%] w-auto mix-blend-multiply">
              <BgDots />
            </div>
            <div className="hidden small:block absolute top-0 left-0 h-[140%] w-auto mix-blend-multiply">
              <BgDots />
            </div>
            <div className="hidden small:block absolute top-0 left-0 h-[140%] w-auto mix-blend-multiply">
              <BgDots />
            </div>
            <div className="hidden small:block absolute top-0 left-0 h-[140%] w-auto mix-blend-multiply">
              <BgDots />
            </div>

            {draftMode().isEnabled ? (
              <FaqIntroPreview
                initial={initialFaqPageContent.data[0]}
                originalContent={faqPageInitialContent}
              />
            ) : (
              <FaqIntro
                messageWithLineBreaks={faqPageContent[0].FaqPage.introMessage}
                introTitle={faqPageContent[0].FaqPage.introTitle}
              />
            )}
          </div>

          {draftMode().isEnabled ? (
            <FaqSearchPreview
              placeholder={faqPageContent[0].FaqPage.formPlaceholder}
              initial={initialFaqItems.data[0]}
            />
          ) : (
            <FaqSearch
              placeholder={faqPageContent[0].FaqPage.formPlaceholder}
              faqs={faqs}
            />
          )}

          {/* <FaqSearch
                placeholder={content.FaqPage.formPlaceholder}
                faqs={faqs}
              /> */}
        </div>
        <div className="mt-[10rem] xsmall:mt-[12rem]">
          <ContactSection contactContent={contactContent} />
        </div>
      </Suspense>
    </main>
  );
}

import AboutPageAwards from "@/components/AboutPageAwards";
import ContactSection from "@/components/ContactSection";
import InnerHero from "@/components/InnerHero";
import MailingListCta from "@/components/MailingListCta";
import ServiceImageLinkSwiper from "@/components/ServiceImageLinkSwiper";
// import TotPromo from "@/components/TotPromo";
import LatestProjects from "@/components/LatestProjects";
import BgDots from "@/components/assets/BgDots";
import {
  getCroppedImageSrc,
  getAboutPageContent,
  aboutPageContent,
  getAwards,
  awardList,
  getMailingListCta,
  // getTotPromo,
  getContactContent,
} from "@/sanity/sanity.query";
import type {
  aboutPageType,
  awardsType,
  contactType,
  mailingListType,
  // TotPromoType,
} from "@/types";
import { PortableText } from "@portabletext/react";

import { getTextWithLineBreaks } from "@/components/utils/getTextWithLineBreaks";
import { removelineBreakCodeFromHTML } from "@/components/utils/lineBreaks";
import { loadQuery } from "@/sanity/lib/store";
import { draftMode } from "next/headers";
import { SanityDocument } from "next-sanity";
import InnerHeroPreview from "@/components/previewComponents/InnerHeroPreview";
import AboutIntroText from "@/components/AboutIntroText";
import AboutIntroTextPreview from "@/components/previewComponents/AboutIntroTextPreview";
import AboutPageContent from "@/components/AboutPageContent";
import AboutPageContentPreview from "@/components/previewComponents/AboutPageContentPreview";
import AboutPageAwardsPreview from "@/components/previewComponents/AboutPageAwardsPreview";
import contact from "../contact/page";

export async function metadata() {
  const aboutContent: aboutPageType[] = await getAboutPageContent();

  return {
    title: `Perlini Property Management | ${aboutContent[0]?.aboutPage?.pageMetadata?.pageTitle || "About Us"}`,

    description:
      aboutContent[0]?.aboutPage?.pageMetadata?.pageDescription ||
      removelineBreakCodeFromHTML(aboutContent[0].aboutPage.pageHeading),
    openGraph: {
      images: aboutContent[0].aboutPage.pageImage.image,
    },
  };
}

export default async function About() {
  const aboutContent: aboutPageType[] = await getAboutPageContent();
  const awards: awardsType[] = await getAwards();
  const mailingList: mailingListType[] = await getMailingListCta();
  // const totPromo: TotPromoType[] = await getTotPromo();
  const contactContent: contactType[] = await getContactContent();

  const initialAboutPageContent = await loadQuery<SanityDocument>(
    aboutPageContent,
    {},
    {
      // Because of Next.js, RSC and Dynamic Routes this currently
      // cannot be set on the loadQuery function at the "top level"
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  const initialAwards = await loadQuery<SanityDocument>(
    awardList,
    {},
    {
      // Because of Next.js, RSC and Dynamic Routes this currently
      // cannot be set on the loadQuery function at the "top level"
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return (
    <section>
      {draftMode().isEnabled ? (
        <InnerHeroPreview
          pageVariable="aboutPage"
          initial={initialAboutPageContent.data[0]}
          sectionTitle="about us"
          pageNumber="02"
          originalContent={aboutPageContent}
        />
      ) : (
        <InnerHero
          title={aboutContent[0].aboutPage.pageHeading}
          image={aboutContent[0].aboutPage.pageImage}
          sectionTitle="about us"
          subtext={aboutContent[0].aboutPage.pageHeadingSubtext}
          imageAltText={aboutContent[0].aboutPage.pageImage.alt}
          pageNumber="02"
        />
      )}

      <div className="mt-[5.5rem] xsmall:mt-[7rem] small:mt-[clamp(50px,6.3vw,90px)] w-screen">
        <section>
          <div className="relative bg-theme-dark w-full h-auto">
            <div
              style={
                {
                  "--image-url": `url(${getCroppedImageSrc(
                    aboutContent[0].aboutPage.introBgImage
                  )})`,
                } as React.CSSProperties
              }
              className="absolute top-0 left-0 mix-blend-overlay opacity-30 bg-[image:var(--image-url)] bg-cover w-full h-full"
            ></div>

            {draftMode().isEnabled ? (
              <AboutIntroTextPreview
                initial={initialAboutPageContent.data[0]}
              />
            ) : (
              <AboutIntroText
                heading={aboutContent[0].aboutPage.introHeading}
                text={aboutContent[0].aboutPage.introText}
              />
            )}

            {/* <div className="relative px-[5%] pb-[16.6rem] xsmall:pb-[15rem] small:pb-[22.7rem] text-white max-w-[1147px] mx-auto small:px-5 z-10">
                  <h3 className="text-[3.2rem] font-bold pt-[4.7rem] xsmall:pt-[6rem] small:pt-[12.5rem] pb-[3.5rem] xsmall:pb-[5.4rem] small:pb-[4.7rem]">
                    {content.aboutPage.introHeading}
                  </h3>
                  <div className="small:w-[87%]">
                    <PortableText value={content.aboutPage.introText} />
                  </div>
                </div> */}
          </div>

          {draftMode().isEnabled ? (
            <AboutPageContentPreview
              initial={initialAboutPageContent.data[0]}
            />
          ) : (
            <AboutPageContent
              contentArea={aboutContent[0].aboutPage.contentArea}
              featureText={aboutContent[0]?.aboutPage?.featureText}
            />
          )}

          <section className="my-section-gap xsmall:my-section-gap-xsmall small:my-section-gap-small">
            {draftMode().isEnabled ? (
              <AboutPageAwardsPreview initial={initialAwards.data[0]} />
            ) : (
              <AboutPageAwards awards={awards} />
            )}
          </section>
        </section>
        <section>
          <ServiceImageLinkSwiper />
        </section>
        {/* <section>
          <TotPromo totPromo={totPromo} />
        </section> */}
        <section className="my-section-gap xsmall:my-section-gap-xsmall small:my-section-gap-small">
          <LatestProjects />
        </section>
        <section className="mb-section-gap hidden xsmall:block xsmall:mb-section-gap-xsmall small:mb-section-gap-small">
          <MailingListCta content={mailingList} />
        </section>
        <section>
          <ContactSection contactContent={contactContent} />
        </section>
      </div>
    </section>
  );
}

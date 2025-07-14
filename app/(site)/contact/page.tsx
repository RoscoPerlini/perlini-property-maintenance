import ContactSection from "@/components/ContactSection";
import InnerHero from "@/components/InnerHero";
import LatestProjects from "@/components/LatestProjects";
import TotPromo from "@/components/TotPromo";
import {
  contactPageInitialContent,
  contactUsContent,
  getContactContent,
  getContactUsPageContent,
  getTotPromo,
} from "@/sanity/sanity.query";
import type { contactPageType, contactType, TotPromoType } from "@/types";
import contactMap from "../assets/images/contact_map.png";
import { removelineBreakCodeFromHTML } from "@/components/utils/lineBreaks";
import InnerHeroPreview from "@/components/previewComponents/InnerHeroPreview";
import { draftMode } from "next/headers";
import { loadQuery } from "@/sanity/lib/store";
import { SanityDocument } from "next-sanity";
import ContactSectionPreview from "@/components/previewComponents/ContactSectionPreview";

export async function metadata() {
  const contactPageContent: contactPageType[] = await getContactUsPageContent();
  return {
    title: `Perlini Property Management | ${contactPageContent[0]?.ContactPage?.pageMetadata?.pageTitle || "Contact Us"}`,
    description:
      contactPageContent[0]?.ContactPage?.pageMetadata?.pageDescription ||
      removelineBreakCodeFromHTML(
        contactPageContent[0].ContactPage.pageHeading
      ),
    openGraph: {
      images: contactMap,
    },
  };
}

export default async function contact() {
  const contactPageContent: contactPageType[] = await getContactUsPageContent();
  const contactContent: contactType[] = await getContactContent();

  const totPromo: TotPromoType[] = await getTotPromo();
  const initialContactPageContent = await loadQuery<SanityDocument>(
    contactPageInitialContent,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  const initialContactContent = await loadQuery<SanityDocument>(
    contactUsContent,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  return (
    <main>
      {draftMode().isEnabled ? (
        <InnerHeroPreview
          pageVariable="ContactPage"
          initial={initialContactPageContent.data[0]}
          sectionTitle="contact us"
          pageNumber="06"
          originalContent={contactPageInitialContent}
        />
      ) : (
        <InnerHero
          title={contactPageContent[0].ContactPage.pageHeading}
          sectionTitle="contact us"
          pageNumber="06"
          image={contactPageContent[0].ContactPage.pageImage}
          imageCaptionText={contactPageContent[0].ContactPage.serviceAreas}
          imageAltText={contactPageContent[0].ContactPage.pageImage.alt}
        />
      )}

      <div className="my-section-gap">
        {draftMode().isEnabled ? (
          <ContactSectionPreview
            initial={initialContactContent.data[0]}
            originalContent={contactUsContent}
          />
        ) : (
          <ContactSection contactContent={contactContent} />
        )}{" "}
      </div>

      <LatestProjects />
      <div className="my-section-gap mb-0">
        <TotPromo totPromo={totPromo} />
      </div>
    </main>
  );
}

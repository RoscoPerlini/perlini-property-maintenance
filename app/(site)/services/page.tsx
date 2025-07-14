import InnerHero from "@/components/InnerHero";
import {
  getContactContent,
  getCroppedImageSrc,
  getMailingListCta,
  getServicesPageContent,
} from "@/sanity/sanity.query";
import type { contactType, mailingListType, servicesPageType } from "@/types";

import { getServiceLinks } from "@/sanity/sanity.query";

import type { serviceType } from "@/types";
import BgDots from "@/components/assets/BgDots";
import LatestProjects from "@/components/LatestProjects";
import MailingListCta from "@/components/MailingListCta";
import ContactSection from "@/components/ContactSection";
import DetailedServiceList from "@/components/DetailedServiceList";
import { removelineBreakCodeFromHTML } from "@/components/utils/lineBreaks";
import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/sanity.client";
import DetailedServiceListPreview from "@/components/previewComponents/DetailedServiceListPreview";
import { draftMode } from "next/headers";
import { loadQuery } from "@/sanity/lib/store";
import InnerHeroPreview from "@/components/previewComponents/InnerHeroPreview";
import { ServicesBannerContent } from "@/components/ServicesBannerContent";
import ServicesBannerContentPreview from "@/components/previewComponents/ServicesBannerContentPreview";

export async function metadata() {
  const servicesContent = await client.fetch<servicesPageType[]>(
    getServicesPageContent
  );
  return {
    title: `Perlini Property Maintenance | ${servicesContent[0]?.ServicesPage?.pageMetadata?.pageTitle || "Services"}`,
    // description: removelineBreakCodeFromHTML(
    //   servicesContent[0].ServicesPage.pageHeading
    // ),
    description:
      servicesContent[0]?.ServicesPage?.pageMetadata?.pageDescription ||
      removelineBreakCodeFromHTML(servicesContent[0].ServicesPage.pageHeading),
    openGraph: {
      images: servicesContent[0].ServicesPage.pageImage.image,
    },
  };
}

export default async function Services() {
  // const servicesContent: servicesPageType[] = await getServicesPageContent();
  const services = await client.fetch<serviceType[]>(getServiceLinks);
  const servicesPageContent = await client.fetch<SanityDocument>(
    getServicesPageContent
  );
  const mailingList: mailingListType[] = await getMailingListCta();
  const contactContent: contactType[] = await getContactContent();

  const initial = await loadQuery<SanityDocument[]>(
    getServiceLinks,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  // DRAFT PAGE CONTENT:
  const initialServicesContent = await loadQuery<SanityDocument>(
    getServicesPageContent,
    {},
    {
      // Because of Next.js, RSC and Dynamic Routes this currently
      // cannot be set on the loadQuery function at the "top level"
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return (
    <>
      {draftMode().isEnabled ? (
        <InnerHeroPreview
          initial={initialServicesContent.data[0]}
          sectionTitle="services"
          pageNumber="03"
          originalContent={getServicesPageContent}
          pageVariable="ServicesPage"
        />
      ) : (
        <InnerHero
          title={servicesPageContent[0].ServicesPage.pageHeading}
          image={servicesPageContent[0].ServicesPage.pageImage}
          sectionTitle="services"
          imageAltText={servicesPageContent[0].ServicesPage.pageImage.alt}
          pageNumber="03"
        />
      )}
      <section
        style={
          {
            "--image-url": `url(${getCroppedImageSrc(
              servicesPageContent[0].ServicesPage.introBgImage
            )})`,
          } as React.CSSProperties
        }
        className="relative w-full h-full bg-[image:var(--image-url)] bg-cover  mb-20 overflow-hidden my-[56px] xsmall:my-[80px]"
      >
        <div className="hidden small:block absolute top-0 left-0 h-[150%] w-auto mix-blend-multiply">
          <BgDots />
        </div>
        <div className="hidden small:block absolute top-0 left-0 h-[150%] w-auto mix-blend-multiply">
          <BgDots />
        </div>
        <div className="hidden small:block absolute top-0 left-0 h-[150%] w-auto mix-blend-multiply">
          <BgDots />
        </div>

        <div className="absolute bottom-0 right-0 h-full xsmall:h-[120%] small:h-[150%] w-auto mix-blend-multiply rotate-180">
          <BgDots />
        </div>
        <div className="absolute bottom-0 right-0 h-full xsmall:h-[120%] small:h-[150%] w-auto mix-blend-multiply rotate-180">
          <BgDots />
        </div>
        <div className="absolute bottom-0 right-0 h-full xsmall:h-[120%] small:h-[150%] w-auto mix-blend-multiply rotate-180">
          <BgDots />
        </div>
        <div className="absolute bottom-0 right-0 h-full xsmall:h-[120%] small:h-[150%] w-auto mix-blend-multiply rotate-180">
          <BgDots />
        </div>

        {/* BANNER CONTENT */}

        {draftMode().isEnabled ? (
          <ServicesBannerContentPreview
            initial={initialServicesContent}
            allServices={services}
          />
        ) : (
          <ServicesBannerContent
            servicePageContent={servicesPageContent}
            allServices={services}
          />
        )}
      </section>
      <section>
        {draftMode().isEnabled ? (
          <DetailedServiceListPreview initial={initial} />
        ) : (
          <DetailedServiceList allServices={services} />
        )}
      </section>
      <LatestProjects />
      <section className="my-section-gap hidden xsmall:block xsmall:my-section-gap-xsmall small:my-section-gap-small">
        <MailingListCta content={mailingList} />
      </section>
      <section className="my-section-gap xsmall:my-0">
        <ContactSection contactContent={contactContent} />
      </section>
    </>
  );
}

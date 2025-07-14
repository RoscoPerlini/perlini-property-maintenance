import Image from "next/image";
import { Metadata } from "next";
import {
  SINGLE_SERVICE,
  getContactContent,
  getMailingListCta,
  getSingleService,
} from "@/sanity/sanity.query";
import type { contactType, mailingListType, serviceType } from "@/types";
import { getServiceLinks } from "@/sanity/sanity.query";
import MailingListCta from "@/components/MailingListCta";
import ContactSection from "@/components/ContactSection";
import DetailedServiceList from "@/components/DetailedServiceList";
import ServiceImageSlideshow from "@/components/ServiceImageSlideshow";
import { removelineBreakCodeFromHTML } from "@/components/utils/lineBreaks";
import { loadQuery } from "@/sanity/lib/store";
import ServicePageContent from "@/components/ServicePageContent";
import { draftMode } from "next/headers";
import { QueryParams, SanityDocument } from "next-sanity";
import ServicePageContentPreview from "@/components/previewComponents/ServicePageContentPreview";
import { client } from "@/sanity/sanity.client";
import DetailedServiceListPreview from "@/components/previewComponents/DetailedServiceListPreview";
export const dynamic = "force-static";
type Props = {
  params: {
    service: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.service;
  const service: serviceType = await getSingleService(slug);

  return {
    title: `Service | ${service?.pageMetadata?.pageTitle || removelineBreakCodeFromHTML(service?.serviceTitle)}`,
    description:
      service?.pageMetadata?.pageDescription ||
      removelineBreakCodeFromHTML(service?.serviceSummary),
    openGraph: {
      images: service?.coverImage?.image || "add-a-fallback-project-image-here",
      title: removelineBreakCodeFromHTML(service?.serviceTitle),
      description: removelineBreakCodeFromHTML(service?.serviceSummary),
    },
  };
}

export async function generateStaticParams() {
  const allServices = await client.fetch<SanityDocument[]>(getServiceLinks);

  return allServices.map((service) => ({
    slug: service.slug.current,
  }));
}

export default async function Service({ params }: { params: QueryParams }) {
  const slug = params.service;
  const allServices = await loadQuery<serviceType[]>(getServiceLinks);
  const queryParams = { slug }; // Create a new queryParams object with the correct key
  const mailingList: mailingListType[] = await getMailingListCta();
  const contactContent: contactType[] = await getContactContent();

  const allServicesInitial = await loadQuery<SanityDocument[]>(
    getServiceLinks,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  const initial = await loadQuery<SanityDocument>(SINGLE_SERVICE, queryParams, {
    // Because of Next.js, RSC and Dynamic Routes this currently
    // cannot be set on the loadQuery function at the "top level"
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  return (
    <div>
      {draftMode().isEnabled ? (
        <>
          <ServicePageContentPreview initial={initial} params={queryParams} />
          <DetailedServiceListPreview initial={allServicesInitial} />
        </>
      ) : (
        <>
          <ServicePageContent data={initial.data} />
          <DetailedServiceList allServices={allServices.data} />
        </>
      )}

      <div className="my-section-gap hidden xsmall:block xsmall:my-section-gap-xsmall small:my-section-gap-small">
        <MailingListCta content={mailingList} />
      </div>
      <ContactSection contactContent={contactContent} />
    </div>
  );
}

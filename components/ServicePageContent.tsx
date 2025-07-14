"use client";

import type { serviceType } from "@/types";
import ContactSection from "./ContactSection";
import MailingListCta from "./MailingListCta";
import InnerHero from "./InnerHero";
import ServiceBanner from "./ServiceBanner";
import ServiceImageSlideshow from "./ServiceImageSlideshow";
import { SanityDocument } from "next-sanity";

export default function ServicePageContent({ data }: { data: SanityDocument }) {
  return (
    <>
      <InnerHero
        sectionTitle={data?.serviceTitle}
        title={data?.serviceSummary}
        image={data?.servicePageImage}
        imageAltText={data?.servicePageImage.alt}
      />

      <ServiceBanner
        backgroundImage={data?.serviceBannerImage}
        serviceTitle={data?.serviceTitle}
        serviceText={data?.description}
        additionalInfo={data?.additionalInfo?.additionalList}
        awardHighlight={data?.awardHighlight}
        asideList={data?.serviceAsideList}
      />
      {data?.gallery?.images?.length > 0 && (
        <div className=" max-w-[1220px] mx-auto">
          <ServiceImageSlideshow images={data?.gallery.images} />
        </div>
      )}

      {/* commented out as showing below components in services slug page.tsx */}
      {/* <DetailedServiceList allServices={allServices.data} /> */}

      {/* <div className="my-section-gap xsmall:my-section-gap-xsmall small:my-section-gap-small">
        <MailingListCta />
      </div>
      <ContactSection /> */}
    </>
  );
}

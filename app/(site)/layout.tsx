import "../globals.css";
import type { Metadata } from "next";
import { LocalBusiness, WithContext } from "schema-dts";
import { Montserrat, Raleway, Open_Sans } from "next/font/google";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { heroType, metadataType } from "@/types";
import { getHero, getMetadata } from "@/sanity/sanity.query";
import thumbnail from "./assets/Thumbnail_1280x720.png";
import { removelineBreakCodeFromHTML } from "@/components/utils/lineBreaks";
import GoogleAnalytics from "@/components/utils/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner";
import { draftMode } from "next/headers";
import LiveVisualEditing from "@/components/LiveVisualEditing";
export const revalidate = 6000;
// export const revalidate = 60;

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});
const opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});

export async function Metadata() {
  const hero: heroType[] = await getHero();
  return {
    title: "Perlini Property Management",
    description: removelineBreakCodeFromHTML(hero[0].heroHeading[0]),
    openGraph: {
      images: thumbnail.src,
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const meta: metadataType[] = await getMetadata();

  let phoneNumberOnly = meta[0].contactDetails.telephone;
  // Check if heroHeading is a string and includes the newline character
  if (typeof phoneNumberOnly === "string" && phoneNumberOnly.includes(" ")) {
    phoneNumberOnly = phoneNumberOnly.replace(" ", "");
  }

  const jsonLd: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.perlini.co.uk/",
    name: meta[0].companyName,
    description: meta[0].description,
    url: "https://www.perlini.co.uk/",
    logo: "https://www.perlini.co.uk/favicon.ico",
    address: {
      "@type": "PostalAddress",
      streetAddress: meta[0].location.streetAddress,
      addressLocality: meta[0].location.addressLocality,
      addressRegion: meta[0].location.addressRegion,
      addressCountry: meta[0].location.addressCountry,
      postalCode: meta[0].location.postalCode,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: phoneNumberOnly,
      email: meta[0].contactDetails.email,
    },
    image: thumbnail.src,
    geo: {
      "@type": "GeoCoordinates",
      latitude: meta[0].location.geo.latitude,
      longitude: meta[0].location.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: meta[0].openingHours.open,
      closes: meta[0].openingHours.close,
    },
    areaServed: meta[0].areasServed,
  };

  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-4D66S7T7SN" />

      <body
        className={` ${opensans.variable}  ${raleway.variable} ${montserrat.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        {draftMode().isEnabled && <LiveVisualEditing />}

        <CookieBanner />

        <Footer />
      </body>
    </html>
  );
}

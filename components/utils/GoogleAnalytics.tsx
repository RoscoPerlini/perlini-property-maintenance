"use client";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "../../app/lib/gtagHelper";
import { useState, Suspense } from "react";

export default function GoogleAnalytics({
  GA_MEASUREMENT_ID,
}: {
  GA_MEASUREMENT_ID: string;
}) {
  const [pathname, setPathname] = useState("");
  const [searchParams, setSearchParams] = useState(new URLSearchParams());

  useEffect(() => {
    setPathname(window.location.pathname);
    setSearchParams(new URLSearchParams(window.location.search));
    // Now call your page view function or any other code that depends on these values
  }, [GA_MEASUREMENT_ID]); // GA_MEASUREMENT_ID included if it might affect how effects run

  useEffect(() => {
    if (pathname && searchParams) {
      const url = pathname + searchParams.toString();
      pageview(GA_MEASUREMENT_ID, url);
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('consent', 'default', {
                  'analytics_storage': 'denied'
              });

              gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
              });
              `,
        }}
      />
    </>
  );
}

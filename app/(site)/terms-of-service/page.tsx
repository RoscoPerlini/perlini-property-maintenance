import { getTermsPageData } from "@/sanity/sanity.query";
import { termsPageType } from "@/types";
import { PortableText } from "@portabletext/react";
import "../privacy-policy/privacy.css";

export default async function termsOfService() {
  const data: termsPageType[] = await getTermsPageData();

  return (
    <main className="mt-[10rem] max-w-[1120px] mx-auto px-[5%] small:px-layout-small">
      <section className="max-w-[1120px] mx-auto pt-[4rem] small:pt-[7rem]">
        <h3 className="text-center xsmall:max-w-[80%] mx-auto  uppercase text-[1.8rem]">
          {data[0]?.terms?.pageTitle}
        </h3>
        <div className="rich-text-container pt-[1rem]">
          <PortableText value={data[0]?.terms?.terms} />
        </div>
      </section>
    </main>
  );
}

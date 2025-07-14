import { getPoliciesPageData } from "@/sanity/sanity.query";
import { policiesPageType } from "@/types";
import { PortableText } from "@portabletext/react";
import "./privacy.css";

export default async function privacyPolicy() {
  const data: policiesPageType[] = await getPoliciesPageData();

  return (
    <main className="mt-[10rem] max-w-[1120px] mx-auto px-[5%] small:px-layout-small">
      <section className="max-w-[1120px] mx-auto pt-[4rem] small:pt-[7rem]">
        <h3 className="text-center xsmall:max-w-[80%] mx-auto text-[1.8rem] uppercase">
          {data[0].policies.pageTitle}
        </h3>
        <div className="rich-text-container pt-[1rem]">
          <PortableText value={data[0].policies.policies} />
        </div>
      </section>
    </main>
  );
}

"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import MailingListCta from "../MailingListCta";
import { mailingListType } from "@/types";

export default function MailingListCtaPreview({
  initial,
  originalContent,
}: {
  initial: QueryResponseInitial<mailingListType[]>;
  originalContent: any;
}) {
  const { data } = useQuery<mailingListType[] | null>(
    originalContent,
    {},
    { initial }
  );

  return data ? (
    <div>
      <MailingListCta content={data} />
    </div>
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}

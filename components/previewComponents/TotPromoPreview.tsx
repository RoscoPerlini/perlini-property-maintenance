"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import type { TotPromoType } from "@/types";
import TotPromo from "../TotPromo";

export default function TotPromoPreview({
  initial,
  originalContent,
}: {
  initial: QueryResponseInitial<TotPromoType[]>;
  originalContent: any;
}) {
  const { data } = useQuery<TotPromoType[] | null>(
    originalContent,
    {},
    { initial }
  );

  return data ? (
    <TotPromo totPromo={data} />
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}

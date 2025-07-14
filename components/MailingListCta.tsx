import { getMailingListCta } from "@/sanity/sanity.query";
import type { mailingListType } from "@/types";
import MailingListForm from "./MailingListForm";

export default function MailingListCta({
  content,
}: {
  content: mailingListType[];
}) {
  // const mailingList: mailingListType[] = await getMailingListCta();

  return (
    <div>
      {content.map((content) => {
        const {
          mailingListHeading,
          mailingListText,
          mailingListPlaceholder,
          mailingListButtonText,
        } = content.mailingListCta;

        return (
          <section
            key={content.mailingListCta._id}
            className=" small:px-layout-small small:mx-auto"
          >
            <div className="bg-theme-purple relative px-10 py-[4.5rem] flex flex-col items-center justify-center text-center xsmall:py-[4rem] small:flex-row small:justify-between small:text-left small:px-[64px] small:max-w-[1121px] small:mx-auto">
              <div className="small:w-[356px]">
                <h3 className="text-white uppercase pb-[1.5rem] small:pb-6">
                  {mailingListHeading}
                </h3>
                <p className="text-white pb-[1.8rem] small:pb-0 font-light small:pr-[3rem]">
                  {mailingListText}
                </p>
              </div>
              <MailingListForm
                theme="light"
                placeholder={mailingListPlaceholder}
                buttonText={mailingListButtonText}
              />
            </div>
          </section>
        );
      })}
    </div>
  );
}

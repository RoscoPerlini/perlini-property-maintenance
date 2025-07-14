import React from "react";
import { removelineBreakCodeFromHTML } from "./utils/lineBreaks";
import Link from "next/link";
import type { serviceType } from "@/types";
import { getTextWithLineBreaks } from "./utils/getTextWithLineBreaks";

export const ServicesBannerContent = ({
  servicePageContent,
  allServices,
}: {
  servicePageContent: any;
  allServices: serviceType[];
}) => {
  return (
    <div className="relative text-white pt-[4rem] pb-[6.5rem] px-[5%] xsmall:pr-[9%] xsmall:pt-[6rem] small:flex small:flex-row small:gap-10  small:pt-[9.4rem] small:pb-[12rem] medium:max-w-[1120px] medium:px-0 mx-auto">
      <div className="small:max-w-[488px] small:mx-auto medium:ml-0">
        <h2 className="pb-[1.5rem]">
          {servicePageContent[0].ServicesPage.introHeading}
        </h2>
        <p className="pt-10">
          {getTextWithLineBreaks(servicePageContent[0].ServicesPage.introText)}
        </p>
      </div>

      <ul className="pt-[3rem] small:max-w-[500px] mx-auto">
        {allServices.map((service, index) => {
          return (
            <li key={service._id} className="pt-2 xsmall:pt-0 small:pt-[1rem]">
              <Link href={`services/${service.slug}`}>
                <h4 className="service__list__link uppercase text-[clamp(1.5rem,4.7vw,2rem)] xsmall:text-[2.2rem] font-bold tracking-[0.24em] flex items-center gap-[1.6rem]">
                  <span className=" xsmall:pr-4">
                    <svg
                      width="7"
                      height="10"
                      viewBox="0 0 7 10"
                      className=""
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1.33343 9.79138C1.25132 9.79176 1.16995 9.77575 1.09411 9.74426C1.01826 9.71278 0.949472 9.66647 0.891768 9.60804C0.774726 9.49086 0.708984 9.332 0.708984 9.16638C0.708984 9.00075 0.774726 8.8419 0.891768 8.72471L4.61677 4.99971L0.891768 1.27471C0.781368 1.15623 0.721265 0.999525 0.724122 0.837607C0.726978 0.67569 0.792572 0.521202 0.907083 0.406691C1.02159 0.29218 1.17608 0.226587 1.338 0.22373C1.49992 0.220873 1.65662 0.280976 1.7751 0.391376L5.94177 4.55804C6.05881 4.67523 6.12455 4.83408 6.12455 4.99971C6.12455 5.16533 6.05881 5.32419 5.94177 5.44138L1.7751 9.60804C1.7174 9.66647 1.64861 9.71278 1.57276 9.74426C1.49692 9.77575 1.41555 9.79176 1.33343 9.79138Z" />
                    </svg>
                  </span>
                  <span className="service__list__link__item">
                    {removelineBreakCodeFromHTML(service.serviceTitle)}
                  </span>
                </h4>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

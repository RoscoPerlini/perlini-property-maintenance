"use client";

import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "../app/lib/storageHelper";
import { useState, useEffect } from "react";
import ButtonLink from "./common/ButtonLink";
import { General } from "./common/IconSvgs";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);
  return (
    <div
      className={`w-screen fixed bottom-0 left-0 right-0 bg-gray-100 z-50 ${
        cookieConsent !== null ? "hidden" : "flex"
      }`}
    >
      <div className="flex px-0 py-[1rem] xsmall:px-[5%] small:py-[3rem] small:px-0 justify-between text-center items-center flex-col gap-4 small:flex-row small:text-left w-full small:max-w-[1120px] mx-auto">
        <div className="text-theme-dark pb-[0.5rem] w-full small:max-w-[647px] small:pb-0">
          {/* <Link href="/info/cookies"> */}
          <h4 className="font-bold pb-0 mt-0 text-[clamp(1.4rem,5vw,1.6rem)] small:pb-[1rem] tracking-[0.06em]">
            Our cookies policy
          </h4>
          <p className=" text-[clamp(1rem,3.3vw,1.4rem)] px-[2%] small:px-0 leading-[1.8rem] xsmall:leading-[2rem] small:leading-[2rem]">
            <span className="hidden xsmall:block">
              We value your privacy. Our website uses cookies to enhance your
              browsing experience. <br></br>
            </span>
            <span>
              {" "}
              By clicking ‘Accept All’ you consent to our use of cookies.
            </span>
            <span className="font-bold underline block xsmall:inline mt-[0.3rem]">
              <Link href="/privacy-policy">Read more about our policies</Link>
            </span>
          </p>
          {/* </Link> */}
        </div>

        <div className="flex gap-2 mx-auto xsmall:w-fit small:mr-0 h-[4rem] xsmall:h-fit">
          <button
            aria-label="decline cookies"
            onClick={() => setCookieConsent(false)}
            className="relative block border-[2px] border-solid border-theme-dark rounded-sm text-theme-dark bg-white hover:text-white hover:bg-theme-purple hover:border-theme-purple transition duration-300 hover:duration-300 group"
          >
            <div className="flex justify-center items-center gap-6 mx-auto w-full px-8 xsmall:px-11 min-w-[140px] xsmall:h-[4.2rem] xsmall:min-w-[174px]">
              <General fill="fill-[#2F3047]" hover="group-hover:fill-white" />
              <span className="uppercase text-center font-bold font-headings tracking-[0.06em] text-[1.3rem] xsmall:text-[1.6rem]">
                DECLINE
              </span>
            </div>
          </button>

          <button
            aria-label="accept cookies"
            onClick={() => setCookieConsent(true)}
            className="relative block border-[2px] border-solid bg-theme-dark border-theme-dark rounded-sm text-white hover:bg-theme-purple hover:border-theme-purple transition duration-300 hover:duration-300 group"
          >
            <div className="flex justify-center items-center gap-6 mx-auto h-full w-full px-8 xsmall:px-11 min-w-[140px] xsmall:min-w-[176px]">
              <span>
                <General fill="fill-white" hover="group-hover:fill-white" />
              </span>
              <span className="uppercase text-center font-bold font-headings tracking-[0.06em] text-[1.3rem] xsmall:text-[1.6rem] whitespace-nowrap">
                ACCEPT ALL
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

import { getCroppedImageSrc } from "@/sanity/sanity.query";
import { SanityImageQueryResult } from "@/types";
import React from "react";

export default async function OldBorderedImage({
  image,
}: {
  image: SanityImageQueryResult;
}) {
  return (
    <div className="relative w-full mx-auto aspect-square xsmall:px-0 xsmall:aspect-[690/451] small:max-w-[700px] medium:mr-0 medium:ml-auto">
      <div className="absolute -top-[5.2%] -left-[5.8%] xsmall:-left-[4.4%] xsmall:-top-[6.5%] w-[112%] h-[112%]">
        <svg
          viewBox="0 0 385 412"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block xsmall:hidden"
          preserveAspectRatio="xMidYMin meet"
        >
          <rect
            x="20"
            y="16"
            width="349"
            height="372"
            stroke="url(#paint0_linear_17_3269)"
            strokeOpacity="0.5"
            strokeWidth="40"
          />
          <defs>
            <linearGradient
              id="paint0_linear_17_3269"
              x1="383.689"
              y1="5.10812"
              x2="-41.2097"
              y2="210.621"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.161927" stopColor="#4804F8" />
              <stop offset="0.375" stopColor="#FF4A1D" />
              <stop offset="0.635417" stopColor="#F9BA17" />
              <stop offset="0.978225" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          width="100%"
          height="100%"
          viewBox="0 0 731 510"
          fill="none"
          className="hidden xsmall:block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="28"
            width="703"
            height="454"
            stroke="url(#paint0_linear_0_4932)"
            strokeOpacity="0.5"
            strokeWidth="56"
            className="mix-blend-color-dodge "
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_4931"
              x1="732.588"
              y1="14.7072"
              x2="370.402"
              y2="433.912"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.161927" stopColor="#4804F8" />
              <stop offset="0.741249" stopColor="#FF4A1D" />
              <stop offset="0.838542" stopColor="#F9BA17" />
              <stop offset="0.978225" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div
        style={
          {
            "--image-url": `url(${getCroppedImageSrc(image)})`,
          } as React.CSSProperties
        }
        className="relative bg-[image:var(--image-url)] bg-cover w-full mx-auto aspect-[349/372] xsmall:px-0 xsmall:aspect-[690/451] group"
      >
        <div className="absolute -top-[5.2%] -left-[5.8%] xsmall:-left-[4.4%] xsmall:-top-[6.5%] -small-[6.2%] w-[112%] h-[112%] small:h-[112%]">
          <svg
            viewBox="0 0 385 412"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mix-blend-color-dodge block xsmall:hidden"
            preserveAspectRatio="none"
          >
            <rect
              x="20"
              y="16"
              width="349"
              height="372"
              stroke="url(#paint0_linear_17_3269)"
              strokeOpacity="0.5"
              strokeWidth="40"
            />
            <defs>
              <linearGradient
                id="paint0_linear_17_3269"
                x1="383.689"
                y1="5.10812"
                x2="-41.2097"
                y2="210.621"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.161927" stopColor="#4804F8" />
                <stop offset="0.375" stopColor="#FF4A1D" />
                <stop offset="0.635417" stopColor="#F9BA17" />
                <stop offset="0.978225" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            width="100%"
            height="100%"
            viewBox="0 0 731 510"
            fill="none"
            className="hidden xsmall:block"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="28"
              width="703"
              height="454"
              stroke="url(#paint0_linear_0_4932)"
              strokeOpacity="0.5"
              strokeWidth="56"
              className="mix-blend-color-dodge "
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_4932"
                x1="732.588"
                y1="14.7072"
                x2="87.5547"
                y2="529.643"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.161927" stopColor="#4804F8" />
                <stop offset="0.375" stopColor="#FF4A1D" />
                <stop offset="0.635417" stopColor="#F9BA17" />
                <stop offset="0.978225" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

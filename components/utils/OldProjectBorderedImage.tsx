import getPositionFromHotspot, {
  getCroppedImageSrc,
} from "@/sanity/sanity.query";
import { SanityImageQueryResult } from "@/types";
import Image from "next/image";

export default async function OldProjectBorderedImage({
  image,
}: {
  image: SanityImageQueryResult;
}) {
  return (
    <div className="project__image w-full px-[4%] pt-[5%] pb-20 xsmall:px-[3%] xsmall:pt-[3%] small:py-25 small:pl-[2%] small:pt-[2.2%] small:pb-[2.1%] small:pr-[2.6%] order-1">
      <div className=" relative w-full mx-auto aspect-square xsmall:aspect-[690/451] small:aspect-[567/456]">
        <div className="absolute w-[112%] h-[112%] -top-[6%] -left-[8.4%] xsmall:-left-[4.4%] small:-left-[5.4%]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 389 412"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block xsmall:hidden small:hidden"
          >
            <rect
              x="20"
              y="20"
              width="372"
              height="372"
              stroke="url(#paint0_linear_62_2866)"
              strokeOpacity="0.25"
              strokeWidth="40"
              className="mix-blend-color-dodge"
            />
            <defs>
              <linearGradient
                id="paint0_linear_62_2866"
                x1="383.689"
                y1="9.10812"
                x2="-41.2097"
                y2="214.621"
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
            className="hidden xsmall:block small:hidden"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="28"
              width="703"
              height="454"
              stroke="url(#paintzzzz_linear_0_4932)"
              strokeOpacity="0.5"
              strokeWidth="56"
            />
            <defs>
              <linearGradient
                id="paintzzzz_linear_0_4931"
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
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 623 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden small:block"
          >
            <rect
              x="28"
              y="28"
              width="567"
              height="456"
              stroke="url(#paintxxxx_linear_1601_4743)"
              strokeOpacity="0.25"
              strokeWidth="56"
            />
            <defs>
              <linearGradient
                id="paintxxxx_linear_1601_4743"
                x1="618.864"
                y1="14.6487"
                x2="15.1537"
                y2="401.655"
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

        <div
          // style={
          //   {
          //     // "--image-url": `url(${getCroppedImageSrc(project.image)})`,
          //     "--image-url": `url(${image.image})`,
          //   } as React.CSSProperties
          // }
          className="relative bg-[image:var(--image-url)] bg-cover w-full mx-auto aspect-square xsmall:px-0 xsmall:aspect-[690/451] small:aspect-[567/456] cursor-pointer group small:min-w-[522px]"
        >
          {/* background linear gradient */}
          {/* <div className="bg-opacity-5 bg-cover absolute top-0 left-0 bg-gradient-to-l from-black to-white mix-blend-multiply opacity-[0.7] w-full h-full"></div> */}

          <div className="absolute w-[112%] h-[112%] -top-[6%] -left-[8.4%] xsmall:-left-[4.4%] small:-left-[5.4%]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 389 412"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block xsmall:hidden xsmall:opacity-0"
            >
              <rect
                x="20"
                y="20"
                width="372"
                height="372"
                stroke="url(#paint0_linear_62_2866)"
                strokeOpacity="0.5"
                strokeWidth="40"
                className="mix-blend-color-dodge"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_62_2866"
                  x1="383.689"
                  y1="9.10812"
                  x2="-41.2097"
                  y2="214.621"
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
              className="hidden xsmall:block small:hidden"
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
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 623 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden small:block"
            >
              <rect
                x="28"
                y="28"
                width="567"
                height="456"
                stroke="url(#paint0_linear_1601_4743)"
                strokeOpacity="0.5"
                strokeWidth="56"
                className="mix-blend-color-dodge "
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1601_4743"
                  x1="618.864"
                  y1="14.6487"
                  x2="15.1537"
                  y2="401.655"
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
    </div>
  );
}

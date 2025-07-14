import getPositionFromHotspot, {
  getCroppedImageSrc,
} from "@/sanity/sanity.query";
import { SanityImageQueryResult } from "@/types";
import Image from "next/image";

export default function BorderedImageAbout({
  image,
}: {
  image: SanityImageQueryResult;
}) {
  return (
    <div className="relative w-full h-auto small:max-w-[700px] medium:mr-0 medium:ml-auto">
      <div className="relative w-[100.3vw] aspect-[386/412] -ml-[4.3%] -mt-[5.5%] xsmall:aspect-[690/451] xsmall:w-[104.5vw] xsmall:ml-[-6.9%] xsmall:-mt-[4.5%] small:ml-[-4.6%] small:absolute small:top-0 small:left-0 small:w-[109.4%] small:h-auto small:mt-[-4.1%] small:aspect-[703/454]">
        {/* 2 x mobile only border svgs */}
        <svg
          viewBox="0 0 386 412"
          fill="none"
          className="mix-blend-color-dodge absolute top-0 w-full h-full xsmall:hidden"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 20H365.5V392H16.5V20Z"
            stroke="url(#aboutBorderMob)"
            strokeOpacity="0.5"
            strokeWidth="40"
          />
          <defs>
            <linearGradient
              id="aboutBorderMob"
              x1="383.689"
              y1="-76.8917"
              x2="-41.2097"
              y2="128.621"
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
          viewBox="0 0 386 412"
          fill="none"
          className="mix-blend-color-dodge absolute top-0 w-full h-full -z-10 xsmall:hidden"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 20H365.5V392H16.5V20Z"
            stroke="url(#aboutBorderMob2)"
            strokeOpacity="0.5"
            strokeWidth="40"
          />
          <defs>
            <linearGradient
              id="aboutBorderMob2"
              x1="383.689"
              y1="-76.8917"
              x2="-41.2097"
              y2="128.621"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.161927" stopColor="#4804F8" />
              <stop offset="0.375" stopColor="#FF4A1D" />
              <stop offset="0.635417" stopColor="#F9BA17" />
              <stop offset="0.978225" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* 2 x TABLET+ SCREEN border svgs */}

        <svg
          viewBox="0 0 743 507"
          className="mix-blend-color-dodge hidden xsmall:block small:hidden absolute top-0 w-full h-full -z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="26"
            y="28"
            width="690"
            height="451.417"
            stroke="url(#back-tab)"
            strokeOpacity="0.5"
            strokeWidth="55"
          />
          <defs>
            <linearGradient
              id="back-tab"
              x1="745.04"
              y1="14.7829"
              x2="384.268"
              y2="426.977"
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
          viewBox="0 0 743 507"
          className="mix-blend-color-dodge hidden xsmall:block small:hidden absolute top-0 w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="26"
            y="28"
            width="690"
            height="451.417"
            stroke="url(#tab-front)"
            strokeOpacity="0.5"
            strokeWidth="55"
          />
          <defs>
            <linearGradient
              id="tab-front"
              x1="745.04"
              y1="14.7829"
              x2="105.567"
              y2="518.708"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.161927" stopColor="#4804F8" />
              <stop offset="0.375" stopColor="#FF4A1D" />
              <stop offset="0.635417" stopColor="#F9BA17" />
              <stop offset="0.978225" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* laptop+ screen */}
        <svg
          viewBox="0 0 759 510"
          className="hidden small:block absolute top-0 left-0 mix-blend-color-dodge -z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="28"
            y="28"
            width="703"
            height="454"
            stroke="url(#lap-back)"
            strokeOpacity="0.5"
            strokeWidth="56"
          />
          <defs>
            <linearGradient
              id="lap-back"
              x1="760.588"
              y1="14.7072"
              x2="398.402"
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
          viewBox="0 0 760 510"
          className="hidden small:block absolute top-0 left-0 mix-blend-color-dodge"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.5 28H731.5V482H28.5V28Z"
            stroke="url(#lap-front)"
            strokeOpacity="0.5"
            strokeWidth="56"
          />
          <defs>
            <linearGradient
              id="lap-front"
              x1="676.588"
              y1="14.7073"
              x2="31.5547"
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
      <div className="absolute top-[0%] left-[-0.5%] right-0 w-[99%] mx-auto aspect-[349/372] overflow-hidden xsmall:w-[calc(100%+0.6%)] xsmall:left-[-0.5%]  xsmall:absolute xsmall:aspect-[690/451] small:w-[calc(100%+1.2%)] small:relative small:aspect-[703/454] small:mt-0">
        <Image
          src={getCroppedImageSrc(image)}
          alt={image.alt}
          fill
          className="object-cover -z-10"
          style={{
            objectPosition: `${getPositionFromHotspot(image?.hotspot)}`,
          }}
        />
      </div>
    </div>
  );
}

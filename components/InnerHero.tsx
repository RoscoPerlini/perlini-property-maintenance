import getPositionFromHotspot, {
  getCroppedImageSrc,
} from "@/sanity/sanity.query";
import type { SanityImageQueryResult } from "@/types";
import ButtonLink from "./common/ButtonLink";
import GradientLineThick from "./assets/GradientLineThick";
import GradientLineVerticalThick from "./assets/GradientLineVerticalThick";
import { MapProvider } from "@/components/providers/map-provider";
import { MapComponent } from "@/components/Map";
import Image from "next/image";
import { removelineBreakCodeFromHTML } from "./utils/lineBreaks";
import { getTextWithLineBreaks } from "./utils/getTextWithLineBreaks";
import ButtonLinkNew from "./common/ButtonLinkNew";
import mapMarker from "../app/(site)/assets/images/marker.png";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

export default function InnerHero({
  title,
  sectionTitle,
  imageAltText,
  image,
  pageNumber,
  imageCaptionText,
  subtext,
}: {
  title: string;
  sectionTitle: string;
  imageAltText?: string;
  image?: SanityImageQueryResult | undefined;
  pageNumber?: string;
  imageCaptionText?: any;
  // subtext?: PortableTextBlock[] | undefined;
  subtext?: any;
}) {
  return (
    <section
      className={`mt-[7rem] xsmall:mt-[10rem] small:mt-0 ${imageCaptionText && "pb-[2rem] small:pb-0"}`}
    >
      <div className="gap-10 max-w-[1440px] small:flex small:justify-between small:mr-0 small:ml-auto  small:mt-[104px] small:gap-0 medium:mx-auto small:pt-[3rem]">
        <div className="text-theme-dark text-center pt-[5.5rem] mx-auto xsmall:ml-0 xsmall:pt-[4rem] small:text-left small:pt-0 small:mt-[6rem] small:max-w-full ">
          {/* xsmall:text-left */}
          <h3 className="uppercase font-semibold  small:ml-layout-small">
            {/* xsmall:ml-[7.5rem] */}
            {removelineBreakCodeFromHTML(sectionTitle)}
          </h3>
          <div className="w-full order-last small:order-first px-[5%] small:px-0">
            <div className="w-full relative pl-0 small:pr-0 xsmall:mt-[0.7em] xsmall:pb-[3rem] xsmall:text-[clamp(3.5rem,6.3vw,4rem)] small:text-[clamp(3.2rem,2.8vw,4rem)] large:static pb-12 small:pl-layout-small">
              {/* xsmall:pl-[3.7rem] */}
              <h1 className="absolute -left-5 hidden xsmall:block xsmall:-translate-x-[5.3vw] small:-translate-x-0 w-fit h-auto font-body small:top-0 large:top-[26rem] mt-[0.1rem] ">
                {pageNumber}
              </h1>

              {/* NOTE: if/else for variable line breaks in cms. see also small:pr-[clamp(...)] which may be individual per page */}

              {/* desktop has line breaks... */}
              <h1 className="inner__hero__title pt-[3rem] mx-auto max-w-[383px] font-bold pb-[2rem] xsmall:max-w-[80%] xsmall:pt-0 xsmall:pb-0 small:ml-0 small:w-[clamp(400px,43vw,558px)] small:pr-[2rem]">
                {title && getTextWithLineBreaks(title)}
              </h1>
              <div className="homepage__hero__text__region small:max-w-[48rem] pt-[3.7rem] pb-[0.6rem]">
                <PortableText value={subtext} />
              </div>
            </div>
          </div>
          {pageNumber !== "06" && (
            <div className=" inner__button__container w-full mx-auto px-[8%] xsmall:px-0 pb-[5rem] xsmall:pb-[6.5rem] xsmall:w-fit xsmall:mx-auto small:ml-layout-small">
              {/* xsmall:ml-[7.5rem] */}
              <ButtonLinkNew
                theme="dark"
                text="Get in touch"
                destination="/contact"
                ctaType="general"
                hoverEffect="fill-col"
              />
            </div>
          )}
        </div>
        <div className="relative w-full mx-[390/408] aspect-square xsmall:px-0 xsmall:aspect-[744/408] small:aspect-[704/480] small:w-full small:h-auto small:max-w-[704px] small:mr-0">
          {pageNumber === "06" && (
            <div className="z-10 absolute left-[6%] top-[38.5%] w-[clamp(119px,34%,192px)] xsmall:left-[23.7%] xsmall:top-[35%] xsmall:w-[clamp(113px,20%,192px)] small:top-[37%] small:left-[16%] small:w-[clamp(100px,27%,192px)] h-auto">
              <svg
                width="175"
                height="52"
                viewBox="0 0 175 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="175"
                  height="52"
                  rx="2"
                  transform="matrix(1 0 0 -1 0 52)"
                  fill="url(#paint0_linear_1377_13006)"
                />
                <path
                  d="M151.001 41.4167C150.756 41.4191 150.516 41.3432 150.317 41.2C149.817 40.8833 138.084 33 138.084 23.4167C138.084 19.991 139.445 16.7055 141.867 14.2832C144.29 11.8609 147.575 10.5 151.001 10.5C154.426 10.5 157.712 11.8609 160.134 14.2832C162.556 16.7055 163.917 19.991 163.917 23.4167C163.917 33 152.251 40.8833 151.684 41.2C151.485 41.3432 151.246 41.4191 151.001 41.4167ZM151.001 13.0833C148.25 13.0745 145.608 14.1577 143.655 16.0951C141.702 18.0325 140.597 20.6657 140.584 23.4167C140.584 30.4333 148.567 36.85 151.001 38.6333C153.434 36.85 161.417 30.4333 161.417 23.4167C161.404 20.6657 160.3 18.0325 158.347 16.0951C156.394 14.1577 153.752 13.0745 151.001 13.0833Z"
                  fill="white"
                />
                <path
                  d="M151.001 27.2507C150.095 27.2507 149.209 26.9818 148.455 26.4782C147.701 25.9746 147.114 25.2588 146.767 24.4213C146.42 23.5838 146.329 22.6622 146.506 21.7732C146.683 20.8841 147.119 20.0674 147.76 19.4264C148.401 18.7854 149.218 18.3489 150.107 18.1721C150.996 17.9952 151.918 18.086 152.755 18.4329C153.593 18.7798 154.309 19.3672 154.812 20.121C155.316 20.8747 155.585 21.7608 155.585 22.6673C155.585 23.8829 155.102 25.0487 154.242 25.9082C153.383 26.7678 152.217 27.2507 151.001 27.2507ZM151.001 20.584C150.589 20.584 150.186 20.7062 149.844 20.9351C149.501 21.164 149.234 21.4894 149.077 21.8701C148.919 22.2507 148.878 22.6696 148.958 23.0738C149.038 23.4779 149.237 23.8491 149.528 24.1405C149.82 24.4318 150.191 24.6302 150.595 24.7106C150.999 24.791 151.418 24.7498 151.799 24.5921C152.179 24.4344 152.505 24.1674 152.734 23.8248C152.962 23.4822 153.085 23.0794 153.085 22.6673C153.085 22.1148 152.865 21.5849 152.474 21.1942C152.084 20.8035 151.554 20.584 151.001 20.584Z"
                  fill="white"
                />
                <path
                  d="M60.5045 35.2419V19.2298H64.7689C67.2836 19.2298 68.8878 20.8525 68.8878 23.9262V24.7804C68.8878 27.8971 67.2836 29.5849 64.7689 29.5849H63.5116V35.2419H60.5045ZM63.5116 22.2178V26.5952H64.6234C65.4983 26.5952 66.0077 26.0189 66.0077 24.5678V24.1407C66.0077 22.7324 65.4966 22.2196 64.6234 22.2196H63.5116V22.2178Z"
                  fill="white"
                />
                <path
                  d="M77.2898 35.2419H70.4735V19.2298H77.2898V22.3259H73.5364V25.5283H76.926V28.6244H73.5364V32.1475H77.2898V35.2436V35.2419Z"
                  fill="white"
                />
                <path
                  d="M79.0565 35.2419V19.2298H83.612C85.944 19.2298 87.6396 20.681 87.6396 23.3928V24.012C87.6396 25.9983 86.7292 27.2779 85.3432 27.8336L87.9848 35.2419H84.5766L82.1161 27.3636V35.2419H79.0548H79.0565ZM82.1178 22.2178V26.3173H83.1924C84.0486 26.3173 84.5783 25.741 84.5783 24.3105V24.012C84.5783 22.6878 84.0503 22.2178 83.1924 22.2178H82.1178Z"
                  fill="white"
                />
                <path
                  d="M96.2057 35.2419H89.3894V19.2298H92.4879V32.1458H96.2057V35.2419Z"
                  fill="white"
                />
                <path
                  d="M97.6086 35.2419V19.2298H100.707V35.2419H97.6086Z"
                  fill="white"
                />
                <path
                  d="M109.253 32.7015V19.2298H111.768V35.2419H107.285L105.352 21.5575V35.2419H102.838V19.2298H107.32L109.253 32.7015Z"
                  fill="white"
                />
                <path
                  d="M113.901 35.2419V19.2298H117V35.2419H113.901Z"
                  fill="white"
                />
                <path
                  d="M24 19.2676V35.1595L27.1662 36.9623V30.0926L34.9048 34.5111L35.3583 34.777V25.7393L24 19.2676ZM32.0991 27.5678V29.2264L27.1662 26.4117V24.753L32.0991 27.5678Z"
                  fill="white"
                />
                <path
                  d="M39.3233 11.8696L37.8645 11.0309L37.8053 11H37.6784L25.9139 17.717L29.1376 19.5609L32.8877 17.4237L41.5164 22.3431L49.6053 17.7307L39.3233 11.8696ZM43.1291 17.7221L41.5012 18.6518L36.1181 15.5815L37.7461 14.6518L43.1291 17.7221Z"
                  fill="white"
                />
                <path
                  d="M37.5159 27.2436V39.1801L29.4033 34.5523V38.235L37.7562 43L40.6821 41.3276V29.1218L42.9091 27.8525V40.0583L46.0753 38.2487V26.048L48.3125 24.7684V36.9726L51.482 35.1647V19.2779L37.5159 27.2436Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1377_13006"
                    x1="268.437"
                    y1="-9.69491"
                    x2="248.68"
                    y2="132.918"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.078125" stopColor="#6015EF" />
                    <stop offset="0.213542" stopColor="#4532D1" />
                    <stop offset="0.526042" stopColor="#CB425C" />
                    <stop offset="0.677083" stopColor="#F9BA17" />
                    <stop
                      offset="0.885417"
                      stopColor="#D9D9D9"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          )}
          {image && (
            <div>
              <Image
                src={getCroppedImageSrc(image)}
                alt={image.alt}
                fill
                priority
                className="object-cover"
                style={{
                  objectPosition: `${getPositionFromHotspot(image?.hotspot)}`,
                }}
              />

              <div className="map__caption__text text-theme-dark absolute text-[clamp(1.4rem,5vw,1.4rem)] text-center leading-normal left-0 right-0 px-[2%] xsmall:px-0 w-fit mx-auto small:text-left small:ml-0 small:left-0 small:right-0 top-[103%] ">
                <PortableText value={imageCaptionText} />

                {/* {imageCaptionText} */}
              </div>
            </div>
          )}

          {/* <MapProvider>
              <MapComponent />
            </MapProvider> */}
          <div className="absolute top-0 left-0 w-full h-[1.7rem]">
            <GradientLineThick />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[1.7rem]">
            <GradientLineThick />
          </div>

          <div className="absolute bottom-0 left-0 h-full w-[1.7rem] hidden small:block">
            <GradientLineVerticalThick />
          </div>
          <div className="hidden overLarge:block absolute bottom-0 right-0 h-full w-[1.7rem]">
            <GradientLineVerticalThick />
          </div>
        </div>
      </div>
    </section>
  );
}

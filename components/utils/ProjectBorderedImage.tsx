import getPositionFromHotspot, {
  getCroppedImageSrc,
} from "@/sanity/sanity.query";
import { SanityImageQueryResult } from "@/types";
import Image from "next/image";

export default function ProjectBorderedImage({
  image,
}: {
  image: SanityImageQueryResult;
}) {
  return (
    <div className="project__image relative w-full mx-auto mt-[-0.38%] aspect-[349/372] xsmall:aspect-[638/388] small:aspect-[567/456] small:min-w-[522px] order-1 px-[5%] pt-[5.4%] pb-[5%] xsmall:px-[3%] xsmall:pt-[3%] small:py-25 small:pl-[2%] small:pt-[2.2%] small:pb-[2.1%] small:pr-[1.7%]">
      <div className="relative w-full h-full mix-blend-color-burn">
        <div className="relative ml-[-5.6%] mt-[-5.6%] w-[100vw] xsmall:mt-[-3%] xsmall:ml-[-3.4%] xsmall:w-[calc(100vw-11.5%)] small:absolute small:top-[0] small:left-0 small:w-[104%] small:h-[110%] small:mt-[-3.5%] small:ml-[-0.7%] dodge">
          {/* mobile border radial */}

          <svg
            viewBox="0 0 389 412"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-full top-0 left-0 -z-10 xsmall:hidden"
          >
            <rect
              x="20"
              y="20"
              width="349"
              height="372"
              stroke="url(#projBorderMob-back)"
              strokeOpacity="0.5"
              strokeWidth="40"
            />
            <defs>
              <linearGradient
                id="projBorderMob-back"
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
            viewBox="0 0 389 412"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-full top-0 left-0 mix-blend-color-dodge xsmall:hidden"
          >
            <rect
              x="20"
              y="20"
              width="349"
              height="372"
              stroke="url(#projBorderMob-front)"
              strokeOpacity="0.5"
              strokeWidth="40"
            />
            <defs>
              <linearGradient
                id="projBorderMob-front"
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

          {/* tablet border radial */}
          <svg
            viewBox="0 0 679 400"
            className="invisible xsmall:visible small:invisible absolute w-full -z-10 top-0 opacity-80 left-0 "
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="20.5"
              y="21"
              width="638"
              height="358"
              stroke="url(#projBorderTab-back)"
              strokeOpacity="0.5"
              strokeWidth="40.1985"
            />
            <defs>
              <linearGradient
                id="projBorderTab-back"
                x1="685.352"
                y1="10.518"
                x2="165.62"
                y2="488.035"
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
            viewBox="0 0 679 400"
            className="invisible xsmall:visible small:invisible absolute w-full top-0 left-0 mix-blend-color-dodge"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="20.5"
              y="21"
              width="638"
              height="358"
              stroke="url(#projBorderTab-front)"
              strokeOpacity="0.5"
              strokeWidth="40.1985"
            />
            <defs>
              <linearGradient
                id="projBorderTab-front"
                x1="685.352"
                y1="10.518"
                x2="165.62"
                y2="488.035"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.161927" stopColor="#4804F8" />
                <stop offset="0.375" stopColor="#FF4A1D" />
                <stop offset="0.635417" stopColor="#F9BA17" />
                <stop offset="0.978225" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* laptop border radial */}
          <svg
            viewBox="0 0 623 512"
            fill="none"
            className="invisible small:visible absolute top-0 left-0 w-full h-full mix-blend-color-dodge -z-10"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="28"
              y="28"
              width="567"
              height="456"
              stroke="url(#proj-back-lap)"
              strokeOpacity="0.5"
              strokeWidth="56"
            />
            <defs>
              <linearGradient
                id="proj-back-lap"
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
          <svg
            viewBox="0 0 623 512"
            fill="none"
            className="invisible small:visible z-20 absolute top-0 left-0 w-full h-full mix-blend-color-dodge"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="28"
              y="28"
              width="567"
              height="456"
              stroke="url(#proj-front-lap)"
              strokeOpacity="0.5"
              strokeWidth="56"
            />
            <defs>
              <linearGradient
                id="proj-front-lap"
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
        <div className="absolute overflow-hidden aspect-[349/372] top-[-0.1%] left-[-0.5%] w-[100.3%] mt-[5.6%] xsmall:left-0 xsmall:w-full xsmall:aspect-[691/388] xsmall:top-0 xsmall:mt-[3.5%] small:mt-[0.9%] small:aspect-[567/456] small:w-[95.4%] small:h-[98.4%] small:right-0 small:ml-[3.7%] small:z-10">
          <Image
            src={getCroppedImageSrc(image)}
            alt={image?.alt}
            fill
            className="-z-10 object-cover"
            style={{
              objectPosition: `${getPositionFromHotspot(image?.hotspot)}`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

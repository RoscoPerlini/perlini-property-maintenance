"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const ImageSlider = ({
  before,
  after,
  linearId,
  thumbnail,
}: {
  before: string;
  after: string;
  linearId?: string;
  thumbnail?: boolean;
}) => {
  const [sliderPosition, setSliderPosition] = useState(10);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };
  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(
      0,
      Math.min(event.touches[0].clientX - rect.left, rect.width)
    );
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setTimeout(() => {
      setIsDragging(true);
    }, 0);

    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="w-full relative"
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
    >
      <div
        className={`relative object-cover w-full overflow-hidden select-none ${
          thumbnail
            ? "aspect-square"
            : "aspect-[357/383] xsmall:aspect-[929/522]"
        }`}
        onMouseMove={handleMove}
        onTouchMove={handleTouchMove}
        // onMouseDown={handleMouseDown}
        // onTouchStart={handleMouseDown}
      >
        <Image
          alt="before Image"
          fill
          className="object-cover"
          sizes="auto"
          priority
          src={after}
        />

        <div
          className={`absolute object-cover top-0 left-0 right-0 w-full ${
            thumbnail
              ? "aspect-square"
              : "aspect-[357/383] xsmall:aspect-[929/522]"
          } overflow-hidden select-none`}
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            fill
            className="object-cover"
            priority
            alt="After Image"
            sizes="auto"
            src={before}
          />
        </div>
        <div
          className={`${
            thumbnail ? "hidden" : "block"
          } absolute top-0 bottom-0 w-[0.44rem] bg-transparent cursor-grab active:cursor-grabbing`}
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="absolute top-0 left-0 h-full w-[22px] -translate-x-[39%] ">
            <svg
              viewBox="0 0 22 383"
              fill="none"
              height="100%"
              width="100%"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.7"
                width="382.65"
                height="21.2583"
                x="21.2583"
                transform="rotate(90 21.2583 0)"
                fill={`url(#${linearId})`}
              />
              <defs>
                <linearGradient
                  id={`${linearId}`}
                  x1="403.908"
                  y1="21.2575"
                  x2="21.2583"
                  y2="21.2575"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D9D9D9" stopOpacity="0" />
                  <stop
                    offset="0.15625"
                    stopColor="#5003B4"
                    stopOpacity="0.5"
                  />
                  <stop offset="0.317708" stopColor="#CB425C" />
                  <stop offset="0.5" stopColor="#580BE5" />
                  <stop offset="0.708333" stopColor="#4804F8" />
                  <stop
                    offset="0.921875"
                    stopColor="#F9BA17"
                    stopOpacity="0.6"
                  />
                  <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute top-0 bottom-0 h-[7rem] w-[7rem] my-auto bg-transparent -translate-x-[46.5%] rounded-full border-[0.44rem] border-white  flex justify-center items-center">
            <div className="absolute top-[6.4rem] left-0 right-0 mx-auto bg-white w-[0.44rem] h-[250px]"></div>
            <div className="absolute bottom-[6.4rem] left-0 right-0 mx-auto bg-white w-[0.44rem] h-[250px]"></div>
            <svg
              width="23"
              height="18"
              viewBox="0 0 23 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.249 9.05827L13.4525 17.8548L13.4525 0.261718L22.249 9.05827Z"
                fill="white"
              />
              <path
                d="M0.257813 9.05827L9.05437 17.8548L9.05437 0.261718L0.257813 9.05827Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

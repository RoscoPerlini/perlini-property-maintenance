"use client";
import { PortableText } from "@portabletext/react";
import { useEffect, useRef, useState } from "react";
import { PortableTextBlock } from "sanity";

interface AdditionalInfoItem {
  listItem: string;
  listItemDetails: string;
}
const OverflowText = ({
  serviceTitle,
  serviceText,
  additionalInfo,
}: {
  serviceText: PortableTextBlock;
  serviceTitle: string;
  additionalInfo?: AdditionalInfoItem;
}) => {
  const [scrollbarStates, setScrollbarStates] = useState<boolean[]>([]);
  const overflowRefs = useRef<Array<HTMLDivElement | null>>([]);

  const updateScrollbarStates = () => {
    const newScrollbarStates = overflowRefs.current.map((ref) => {
      if (!ref) return false; // Guard clause to handle null refs
      return ref.scrollHeight > ref.offsetHeight;
    });
    setScrollbarStates(newScrollbarStates);
  };

  useEffect(() => {
    updateScrollbarStates(); // Update scrollbar states initially

    const handleResize = () => {
      updateScrollbarStates(); // Update scrollbar states when window resizes
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener on component unmount
    };
  }, []);

  const titleWithLineBreaks = serviceTitle?.replace(/\\n/g, "\n");
  const titleWithoutLineBreaks = serviceTitle?.replace(/\\n/g, " ");

  return (
    <div>
      <h2 className="pb-[1.5rem] ">
        <span className="leading-[4rem] xsmall:hidden">
          {titleWithLineBreaks?.split("\n").map((line, index) => (
            <span key={index}>
              {line} <br />
            </span>
          ))}
        </span>
        <span className="hidden xsmall:block">{titleWithoutLineBreaks}</span>
      </h2>

      <div className="relative scrollbar-and-text-container">
        <div
          ref={(ref) => {
            overflowRefs.current[0] = ref;
          }}
          className={`portable--overflow mt-10 max-h-[300px] pr-[10.5%] font-[300] overflow-y-auto ${
            additionalInfo ? "small:max-h-[145px]" : "small:max-h-[260px]"
          } `}
        >
          <PortableText value={serviceText} />
        </div>
        {scrollbarStates[0] && (
          <div className="your-after-element z-10 top-0 right-0 h-full absolute"></div>
        )}
      </div>
    </div>
  );
};

export default OverflowText;

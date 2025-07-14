export default function GradientLine({
  position,
}: {
  position: "top" | "bottom";
}) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 390 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        opacity="0.7"
        y="0.5"
        width="100%"
        height="4"
        fill={`url(#${position == "top" ? "top" : "bottom"})`}
      />
      <defs>
        <linearGradient
          id={`${position == "top" ? "top" : "bottom"}`}
          x1="390"
          y1="4.49985"
          x2="0"
          y2="4.49985"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9D9D9" stopOpacity="0" />
          <stop offset="0.15625" stopColor="#5003B4" stopOpacity="0.5" />
          <stop offset="0.317708" stopColor="#CB425C" />
          <stop offset="0.5" stopColor="#580BE5" />
          <stop offset="0.708333" stopColor="#4804F8" />
          <stop offset="0.921875" stopColor="#F9BA17" stopOpacity="0.6" />
          <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

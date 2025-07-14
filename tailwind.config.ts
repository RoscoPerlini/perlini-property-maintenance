// import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  plugins: [],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-dark": "#2F3047",
        "theme-off-white": "#C4C4C412",
        "theme-purple": "#6015EF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xsmall: "512px",
        small: "1024px",
        overSmall: "1145px",
        medium: "1280px",
        large: "1440px",
        overLarge: "1444px",
        xlarge: "1680px",
      },
      fontFamily: {
        body: ["var(--font-montserrat)"],
        sans: ["var(--font-opensans)"],
        headings: ["var(--font-raleway)"],
      },
      borderRadius: {
        sm: "0.4rem", // You can adjust the value accordingly
      },
      padding: {
        "layout-small": "clamp(8rem,11.1vw,16rem)", // Define your custom padding size here
      },
      margin: {
        "section-gap": "64px",
        "section-gap-xsmall": "72px",
        "section-gap-small": "80px",
        "layout-small": "clamp(8rem,11.1vw,16rem)",
      },
      border: {
        "solid-fix": "solid",
      },
      content: {
        // searchIcon: 'url("../app/assets/images/search.png")',
      },
    },
  },
});

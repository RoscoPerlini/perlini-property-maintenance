import { heroType } from "@/types";
import "./globals.css";
import { Montserrat, Raleway, Open_Sans } from "next/font/google";
import { getHero } from "@/sanity/sanity.query";
import thumbnail from "./(site)/assets/Thumbnail_1280x720.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});
const opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});
export async function metadata() {
  const hero: heroType[] = await getHero();
  let titleWithLineBreaks;
  hero.map((content) => {
    titleWithLineBreaks = content.heroHeading;
    if (
      typeof titleWithLineBreaks === "string" &&
      titleWithLineBreaks.includes("\\n")
    ) {
      titleWithLineBreaks = titleWithLineBreaks.replace(/\\n/g, "");
    }
  });

  return {
    title: "Perlini Property Management",
    description: titleWithLineBreaks,
    openGraph: {
      images: thumbnail.src,
    },
    twitter: {
      card: "summary_large_image", // Or "summary" depending on your preferred card type
      title: "Perlini Property Management",
      description: titleWithLineBreaks,
      image: thumbnail.src,
    },
  };
}

export default function notFound({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={` ${opensans.variable}  ${raleway.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

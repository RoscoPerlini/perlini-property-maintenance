import Image from "next/image";
import bg from "../app/(site)/assets/images/bg-image.png";
import texLeft from "../app/(site)/assets/images/tex-left.png";
import texRight from "../app/(site)/assets/images/tex-right.png";
import texTop from "../app/(site)/assets/images/tex-top.png";
import texBottom from "../app/(site)/assets/images/tex-bottom.png";
import smBottomRight from "../app/(site)/assets/images/sm-bottom-right.png";

const TotBackgrounds = () => {
  return (
    <div className="relative z-0 w-full h-full top-0 left-0 bg-theme-dark overflow-hidden">
      {/* mob-textures */}
      <Image
        src={texTop}
        alt="texture"
        className="z-10 absolute -top-[10%] left-0 w-full h-auto block xsmall:-top-[30%] small:hidden"
      />
      <Image
        src={texTop}
        alt="texture"
        className="z-10 absolute -top-[10%] left-0 w-full h-auto block xsmall:-top-[30%] small:hidden"
      />
      <Image
        src={texBottom}
        alt="texture"
        className="z-10 absolute -bottom-[10%] left-0 w-full h-auto block xsmall:hidden"
      />
      <Image
        src={texBottom}
        alt="texture"
        className="z-10 absolute -bottom-[10%] left-0 w-full h-auto block xsmall:hidden"
      />

      {/* laptop + -textures */}
      <Image
        src={texLeft}
        alt="texture"
        className="z-10 absolute top-0 -left-[50%] h-full w-auto hidden small:-left-[10%] small:block medium:left-0"
      />
      <Image
        src={texLeft}
        alt="texture"
        className="z-10 absolute top-0 -left-[50%] h-full w-auto hidden small:-left-[10%] small:block medium:left-0"
      />
      <Image
        src={smBottomRight}
        alt="texture"
        className="z-10 absolute bottom-0 -right-0 h-[45%] small:h-[65%] w-auto hidden xsmall:block medium:h-full"
      />
      <Image
        src={smBottomRight}
        alt="texture"
        className="z-10 absolute bottom-0 -right-0 h-[45%] small:h-[65%] w-auto hidden xsmall:block medium:h-full"
      />
    </div>
  );
};

export default TotBackgrounds;

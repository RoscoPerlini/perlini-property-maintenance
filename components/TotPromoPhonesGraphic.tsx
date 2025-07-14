import Image from "next/image";
import newPhones from "../app/(site)/assets/images/new-phones.png";
import phones from "../app/(site)/assets/images/new-phones.png";
import flashGraphic from "../app/(site)/assets/images/flash-graphic.png";
import GraphicLogo from "../components/assets/GraphicLogo";

const PhoneGraphic = () => {
  return (
    <div className="absolute w-[118vw] h-auto -ml-[14vw] top-0 left-0 object-contain xsmall:relative xsmall:w-[80vw] xsmall:-ml-0 xsmall:mx-auto small:w-[40vw] small:h-auto small:max-w-[404px]">
      <Image
        src={phones}
        alt="graphic of phones for app 'Trick of the Trades'"
        className="absolute transform object-center translate3d(0, 0, 0) top-0 left-0 mix-blend-multiply z-0 h-auto w-full"
      />
      <Image
        src={flashGraphic}
        alt="graphic showing a flash"
        className="flash-img absolute -top-[50%] left-[50%] object-center mix-blend-plus-lighter w-[95%] h-auto -translate-x-[49%] -translate-y-[8%] z-10"
      />
      <div className="absolute top-[50%] left-[50%] w-[24%] h-auto -translate-x-[50%] translate-y-[175%]">
        <GraphicLogo />
      </div>
    </div>
  );
};

export default PhoneGraphic;

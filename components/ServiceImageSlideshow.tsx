import GradientLineThick from "./assets/GradientLineThick";
import GradientLineVerticalThick from "./assets/GradientLineVerticalThick";
import {
  ServiceGalleryPaginationSwiper,
  ServiceGallerySwiper,
} from "./swiper/Swipers";

export default function ServiceImageSlideshow({
  images,
}: {
  images: {
    _id: string;
    alt: string;
    image: string;
    asset: {
      _ref: string;
    };
    crop: {
      _type: "sanity.imageCrop";
      bottom: number;
      left: number;
      right: number;
      top: number;
    };
    hotspot: {
      _type: "sanity.imageHotspot";
      height: number;
      width: number;
      x: number;
      y: number;
    };
  }[];
}) {
  return (
    <div className=" w-full small:px-layout-small">
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-[1.7rem] z-10">
          <GradientLineThick />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1.7rem] z-10">
          <GradientLineThick />
        </div>
        <div className="absolute bottom-0 left-0 h-full w-[1.7rem] hidden small:block z-10">
          <GradientLineVerticalThick />
        </div>
        <div className="absolute bottom-0 right-0 h-full w-[1.7rem] small:block hidden z-10">
          <GradientLineVerticalThick />
        </div>
        <ServiceGallerySwiper images={images} />
      </div>
      <ServiceGalleryPaginationSwiper data={images} />
    </div>
  );
}

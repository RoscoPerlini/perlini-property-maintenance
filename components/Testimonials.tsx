import { getTestimonials } from "@/sanity/sanity.query";
import type { testimonialsType } from "@/types";
import { TestimonialSwiper } from "./swiper/Swipers";
import { SwiperArrowNext, SwiperArrowPrev } from "./common/SwiperArrows";

export default function Testimonials({
  testimonials,
}: {
  testimonials: testimonialsType[];
}) {
  // const testimonials: testimonialsType[] = await getTestimonials();

  return (
    <section className="my-section-gap">
      <div className="small:px-layout-small">
        <div className="relative text-theme-dark bg-[#f8f8f8] w-full pt-[3.5rem] pb-40 px-[5%]  xsmall:pt-[5rem] xsmall:pb-[16rem] small:pb-32 medium:max-w-[1120px] medium:mx-auto">
          <h2 className="w-[95%] leading-[1.2em]">
            {testimonials[0].testimonialsSection.testimonialsSectionTitle}
          </h2>

          <div className="pt-10 w-full xsmall:w-[86%] small:max-w-[615px]">
            <TestimonialSwiper data={testimonials} />
          </div>
          <div className="absolute invisible bottom-10 left-0 px-[5%] xsmall:px-[50px] w-full h-full z-20 flex justify-between items-end">
            <div className="hidden">
              {/* put in for flex to act differently. may be able to remove */}
            </div>
            <div className="testimonial-pagination visible h-10 w-[40%] z-30 mb-[1.4rem] flex gap-3 items-center xsmall:mb-[4.5%] xsmall:absolute xsmall:right-0 xsmall:bottom-0 xsmall:pl-[8.4%] xsmall:w-fit xsmall:justify-start xsmall:-ml-[5%] xsmall:mr-[5%] small:mb-0 small:pl-[5%] small:justify-center small:mx-auto small:left-0 small:mr-[13px]"></div>
            {/* reference for projects navigation - added h-full to parent absolute container. then see classes used to position */}
            <div className="flex visible gap-4 xsmall:absolute xsmall:top-[83%] small:top-1/2 xsmall:right-[5%] small:right-[7%] small:rotate-0 z-50">
              <SwiperArrowPrev swiperDivName="prev-testimonial" />
              <SwiperArrowNext swiperDivName="next-testimonial" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

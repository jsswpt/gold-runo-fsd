import st from "../../styles.module.scss";
import cn from "classnames";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import { memo } from "react";
import { CustomSwiper } from "@/shared/ui";

const slides = [0, 1, 2];

export const Banner = memo(() => {
  return (
    <section className={cn(st.section_banner)}>
      <CustomSwiper
        navType="plates"
        wrapperClassName={st.banner_wrap__slider}
        className={st.banner_wrap__slider}
        slidesPerView={1}
      >
        {slides.map((item) => (
          <SwiperSlide key={item}>Slide {item}</SwiperSlide>
        ))}
      </CustomSwiper>
    </section>
  );
});

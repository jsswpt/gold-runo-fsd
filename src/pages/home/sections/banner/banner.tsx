import st from "../../styles.module.scss";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Container } from "@/shared/ui";
import { memo } from "react";

export const Banner = memo(() => {
  return (
    <section className={cn(st.section_banner)}>
      <Swiper loop slidesPerView={1} className={st.swiper}>
        <SwiperSlide style={{ background: "blue" }} className={st.swiper_slide}>
          1
        </SwiperSlide>
        <SwiperSlide className={st.swiper_slide}>слайд 3</SwiperSlide>
        <SwiperSlide className={st.swiper_slide}>слайд 4</SwiperSlide>
        <SwiperSlide className={st.swiper_slide}>слайд 5</SwiperSlide>
        <SwiperSlide className={st.swiper_slide}>слайд 6</SwiperSlide>
      </Swiper>
    </section>
  );
});

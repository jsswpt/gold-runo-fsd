import { CSSProperties, Ref, useEffect, useRef, useState } from "react";

import st from "../styles.module.scss";
import cn from "classnames";
import { Container } from "@/shared/ui";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperT from "swiper";
import "swiper/css";
import { ProductCard } from "@/widgets";
import { useScreen } from "@/shared/hooks";

export const Banner = () => {
  const { currentScreen } = useScreen();

  return (
    <section className={cn(st.section_banner)}>
      <Swiper
        loop
        slidesPerView={
          currentScreen === "xxxl" ? 5 : currentScreen === "xs" ? 1 : 2
        }
        spaceBetween={16}
        className={st.swiper}
      >
        {/* <SwiperSlide className={st.swiper_slide}>
          <video
            poster="https://kaksamsdelal.ru/wp-content/uploads/7/c/4/7c468e9cd6b69e59ce43dfc930d62c3d.jpeg"
            autoPlay
            loop
            className={st.banner_bg}
            height="100%"
            width="100%"
            muted
          >
            <source
              type="video/mp4"
              src={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
            />
          </video>
        </SwiperSlide>
        <SwiperSlide className={st.swiper_slide}></SwiperSlide>
        <SwiperSlide className={st.swiper_slide}>слайд 3</SwiperSlide>
        <SwiperSlide className={st.swiper_slide}>слайд 4</SwiperSlide>
        <SwiperSlide className={st.swiper_slide}>слайд 5</SwiperSlide>
        <SwiperSlide className={st.swiper_slide}>слайд 6</SwiperSlide> */}
        <SwiperSlide>
          <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard></ProductCard>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

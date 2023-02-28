import { useMemo, useState, useEffect } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { SwiperButtons } from "./swiper-buttons/swiper-buttons";
import { Swiper as SwiperT } from "swiper";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { SwiperNavPlates } from "./swiper-nav-plates/swiper-nav-plates";
import { SwiperSlideIndicator } from "./swiper-slide-indicator/swiper-slide-indicator";

type CustomSwiper = {
  className?: any;
  wrapperClassName?: any;
  navType?: "buttons" | "plates" | "points" | "numbers" | null;
  swiperProps?: SwiperProps;
  slidesPerView?: number;
  children: React.ReactNode;
  disableShadows?: boolean;
  enableIndicator?: boolean;
};

export const CustomSwiper = (props: CustomSwiper) => {
  const [swiper, setSwiper] = useState<SwiperT | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (swiper) {
      if (swiper.slides) {
        setLength(swiper.slides.length - 1);
      }
    }
  }, [swiper]);

  return (
    <div className={cn(st.swiper_wrap, props.wrapperClassName)}>
      <Swiper
        {...props.swiperProps}
        slidesPerView={props.slidesPerView || 1}
        onSlideNextTransitionStart={(e) => setCurrentSlide(e.activeIndex)}
        onSlidePrevTransitionStart={(e) => setCurrentSlide(e.activeIndex)}
        onInit={(el) => setSwiper(el)}
        className={cn(
          st.swiper,
          !props.disableShadows && st.with_shadows,
          props.className
        )}
      >
        {swiper && props.children}
      </Swiper>
      {props.enableIndicator && (
        <SwiperSlideIndicator currentSlide={currentSlide} length={length} />
      )}
      {swiper && props.navType === "buttons" && (
        <SwiperButtons
          activeIndex={currentSlide}
          length={length}
          slideBack={() => {
            if (swiper.slidePrev) {
              swiper.slidePrev();
            }
          }}
          slideNext={() => {
            if (swiper.slideNext) {
              swiper.slideNext();
            }
          }}
          slidesPerView={props.slidesPerView || 1}
        />
      )}
      {swiper && props.navType === "plates" && (
        <SwiperNavPlates
          activeIndex={currentSlide}
          length={length}
          slideTo={(arg) => {
            if (swiper.slideTo) {
              swiper.slideTo(arg);
            }
          }}
        />
      )}
    </div>
  );
};

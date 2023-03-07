import { useEffect, useMemo } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { useScreen } from "@/shared/hooks";
import { CustomSwiper } from "../custom-swiper/custom-swiper";
import Swiper from "swiper";

/**Чилдреном принимает SwiperSlide */
type PreviewSliderLayout = {
  children: React.ReactNode;
  maxSlidesPerScreen?: number;
  setSlidesPerView?: (arg: number) => void;
  onSlideChange?: (swiper: Swiper) => void;
};

export const PreviewSliderLayout = (props: PreviewSliderLayout) => {
  const { currentScreen } = useScreen();

  const slidesPerView = useMemo(() => {
    if (currentScreen === "xs") {
      return 1.25;
    } else if (currentScreen === "sm" || currentScreen === "md") {
      return 2;
    } else if (currentScreen === "lg") {
      return 3;
    } else {
      return props.maxSlidesPerScreen ? props.maxSlidesPerScreen : 4;
    }
  }, [currentScreen]);

  useEffect(() => {
    props.setSlidesPerView && props.setSlidesPerView(slidesPerView);
  }, [slidesPerView]);

  return (
    <CustomSwiper
      navType={currentScreen === "xs" ? null : "buttons"}
      swiperProps={{
        onSlideChange(swiper) {
          props.onSlideChange && props.onSlideChange(swiper);
        },
        centeredSlides: currentScreen === "xs" && true,
        spaceBetween: currentScreen === "xs" ? 16 : 32,
      }}
      enableIndicator={currentScreen === "xs"}
      slidesPerView={slidesPerView}
    >
      {props.children}
    </CustomSwiper>
  );
};

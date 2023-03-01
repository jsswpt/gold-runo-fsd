import { useMemo } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { useScreen } from "@/shared/hooks";
import { CustomSwiper } from "../custom-swiper/custom-swiper";

/**Чилдреном принимает SwiperSlide */
type PreviewSliderLayout = { children: React.ReactNode };

export const PreviewSliderLayout = (props: PreviewSliderLayout) => {
  const { currentScreen } = useScreen();

  const slidesPerView = useMemo(() => {
    if (currentScreen === "xs") {
      return 1;
    } else if (currentScreen === "sm") {
      return 2;
    } else if (currentScreen === "md" || currentScreen === "lg") {
      return 3;
    }
    return 4;
  }, [currentScreen]);

  return (
    <CustomSwiper
      navType={
        currentScreen === "xs" || currentScreen === "sm" ? null : "buttons"
      }
      swiperProps={{
        centeredSlides:
          (currentScreen === "xs" || currentScreen === "sm") && true,
        spaceBetween:
          currentScreen === "xs" || currentScreen === "sm" ? 16 : 32,
      }}
      enableIndicator={currentScreen === "xs" || currentScreen === "sm"}
      slidesPerView={slidesPerView}
    >
      {props.children}
    </CustomSwiper>
  );
};

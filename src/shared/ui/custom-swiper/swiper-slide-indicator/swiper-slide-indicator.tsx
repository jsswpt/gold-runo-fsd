import { useMemo } from "react";

import st from "../styles.module.scss";
import cn from "classnames";

type SwiperSlideIndicator = {
  length: number;
  currentSlide: number;
};

export const SwiperSlideIndicator = (props: SwiperSlideIndicator) => {
  const list = useMemo(() => {
    return (
      <>
        {Array(props.length + 1)
          .fill(0)
          .map((item, idx) => (
            <div
              key={idx}
              className={cn(
                st.swiper_indicator_plate,
                props.currentSlide === idx && st.swiper_indicator_plate__active
              )}
            ></div>
          ))}
      </>
    );
  }, [props.currentSlide, props.length]);

  return (
    <div className={st.swiper_slide_indicator_wrap}>
      <div className={st.swiper_slide_indicator_wrapper}>{list}</div>
    </div>
  );
};

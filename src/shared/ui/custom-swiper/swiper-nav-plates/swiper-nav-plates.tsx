import {} from "react";

import st from "../styles.module.scss";
import cn from "classnames";

type SwiperNavPlates = {
  length: number;
  slideTo: (arg: number) => void;
  activeIndex: number;
};

export const SwiperNavPlates = ({
  length,
  slideTo,
  activeIndex,
}: SwiperNavPlates) => {
  return (
    <>
      <div className={st.swiper_nav_plates_wrap}>
        {Array(length + 1)
          .fill(0)
          .map((_, idx) => (
            <button
              onClick={() => slideTo(idx)}
              key={idx}
              className={cn(
                st.swiper_nav_plate,
                idx === activeIndex && st.swiper_nav_plate__active
              )}
            ></button>
          ))}
      </div>
    </>
  );
};

import {} from "react";

import st from "../styles.module.scss";
import cn from "classnames";
import { ChevronRight } from "@/shared/assets/ui/svgs/chevron-right";
import { AnimatePresence, motion } from "framer-motion";
import { IconButton } from "../../button/icon-button";
import { ChevronLeft } from "@/shared/assets";

type SwiperButtons = {
  slideBack: () => void;
  slideNext: () => void;
  activeIndex: number;
  slidesPerView: number;
  length: number;
};

export const SwiperButtons = (props: SwiperButtons) => {
  const { activeIndex, length, slideBack, slideNext, slidesPerView } = props;
  return length > 0 ? (
    <div className={st.swiper_buttons_wrapper}>
      <IconButton
        shadow="always"
        size="sm"
        color={activeIndex > 0 ? "default" : "vanish"}
        onClick={slideBack}
        disabled={activeIndex <= 0}
      >
        <ChevronLeft />
      </IconButton>

      <IconButton
        shadow="always"
        size="sm"
        color="default"
        onClick={slideNext}
        disabled={activeIndex >= length - slidesPerView}
      >
        <ChevronRight />
      </IconButton>
    </div>
  ) : (
    <></>
  );
};

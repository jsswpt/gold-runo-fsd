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
    <>
      <AnimatePresence mode="wait" initial={false}>
        {activeIndex > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={st.button_prev_wrapper}
          >
            <IconButton
              shadow="always"
              size="lg"
              color="default"
              onClick={slideBack}
            >
              <ChevronLeft />
            </IconButton>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait" initial={false}>
        {activeIndex <= length - slidesPerView && (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={st.button_next_wrapper}
          >
            <IconButton
              shadow="always"
              size="lg"
              color="default"
              onClick={slideNext}
            >
              <ChevronRight />
            </IconButton>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  ) : (
    <></>
  );
};

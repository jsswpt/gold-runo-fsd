import { useState, memo, useMemo } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { MediaType } from "@/shared/api/internal";
import { SwiperItem } from "../swiper-item/swiper-item";
import { AnimatePresence, motion } from "framer-motion";

type HoverSwiper = {
  list: MediaType[];
};

export const HoverSwiper = memo((props: HoverSwiper) => {
  const [currentItem, setCurrentItem] = useState<MediaType>(props.list[0]);
  const [isHovered, setIsHovered] = useState(false);

  const memoizedSelector = useMemo(() => {
    return props.list.map((item) => (
      <div
        className={st.slide_selector}
        onMouseOver={() => setCurrentItem(item)}
      ></div>
    ));
  }, []);

  const memoizedPresentator = useMemo(() => {
    return props.list.map((item, idx) => (
      <div
        className={cn(
          st.slides_presentator,
          item.id === currentItem.id && st.slides_presentator_active
        )}
      ></div>
    ));
  }, [currentItem]);

  return (
    <div
      className={st.hover_swiper}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.32 }}
          className={st.animation_wrapper}
          key={currentItem.id}
        >
          <SwiperItem item={currentItem} />
        </motion.div>
      </AnimatePresence>
      {isHovered && memoizedSelector}

      <AnimatePresence mode="wait">
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
            className={st.slides_presentator_wrap}
          >
            {memoizedPresentator}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

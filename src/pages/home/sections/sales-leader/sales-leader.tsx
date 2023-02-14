import { memo, useMemo, useState } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { Container, IconButton, SectionLayout } from "@/shared/ui";
import { ProductCard } from "@/widgets";
import { Swiper, SwiperSlide } from "swiper/react";

import { AnimatePresence, motion } from "framer-motion";
import { useScreen } from "@/shared/hooks";
import { ChevronLeft } from "@/shared/assets";
import { ChevronRight } from "@/shared/assets/ui/svgs/chevron-right";

const length = 7;

export const SalesLeader = memo(() => {
  const { currentScreen } = useScreen();

  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const slidesPerView = useMemo(() => {
    if (currentScreen === "xs") {
      return 1;
    } else if (currentScreen === "sm" || currentScreen === "md") {
      return 2;
    } else if (currentScreen === "lg") {
      return 3;
    } else return 4;
  }, [currentScreen]);

  return (
    <SectionLayout
      title="Лидеры продаж"
      subElement="Наиболее популярные модели из всех категорий интернет-магазина"
    >
      <div className={cn(st.sales_wrap, st.sales_wrap__products)}>
        <AnimatePresence mode="wait">
          {activeIndex > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.32 }}
              className={st.button_back_wrapper}
              key="back"
            >
              <IconButton size="lg" onClick={() => swiper.slidePrev()}>
                <ChevronLeft />
              </IconButton>
            </motion.div>
          )}
        </AnimatePresence>

        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={32}
          className={st.swiper}
          onSlideChange={(e) => setActiveIndex(e.activeIndex)}
          onInit={(e) => setSwiper(e)}
        >
          {Array(length)
            .fill(0)
            .map((item, idx) => (
              <SwiperSlide key={idx} className={st.swiper_slide}>
                <motion.div
                  viewport={{ once: true }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.32 }}
                >
                  <ProductCard />
                </motion.div>
              </SwiperSlide>
            ))}
          <SwiperSlide className={st.swiper_slide}>Увидеть больше</SwiperSlide>
        </Swiper>

        <AnimatePresence mode="wait">
          {activeIndex + slidesPerView <= length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.32 }}
              className={st.button_forward_wrapper}
              key="forward"
            >
              <IconButton size="lg" onClick={() => swiper.slideNext()}>
                <ChevronRight />
              </IconButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionLayout>
  );
});

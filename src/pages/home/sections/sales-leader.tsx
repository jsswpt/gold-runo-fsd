import { useMemo, useState } from "react";

import st from "../styles.module.scss";
import cn from "classnames";
import { Container, IconButton } from "@/shared/ui";
import { ProductCard } from "@/widgets";
import { Swiper, SwiperSlide } from "swiper/react";

import { AnimatePresence, motion } from "framer-motion";
import { useScreen } from "@/shared/hooks";

const length = 7;

export const SalesLeader = () => {
  const { currentScreen } = useScreen();

  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const slidesPerView = useMemo(() => {
    if (currentScreen === "xs") {
      return 1;
    } else if (currentScreen === "sm" || currentScreen === "md") {
      return 2;
    }
    return 3;
  }, [currentScreen]);

  return (
    <section className={cn(st.section, st.sales_leader_section)}>
      <Container className={st.section_container}>
        <div className={st.section_wrap__headlines}>
          <h2 className={cn("h2", "dark-selection", st.section_title)}>
            Лидеры продаж
          </h2>
          <p className={cn("subtitle1", "dark-selection", st.section_subtitle)}>
            Наиболее популярные модели из всех категорий интернет-магазина
          </p>
        </div>
        <div className={st.section_wrap__body}>
          <div className={cn(st.sales_section_wrap, st.sales_wrap__products)}>
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
                  <IconButton onClick={() => swiper.slidePrev()}>b</IconButton>
                </motion.div>
              )}
            </AnimatePresence>

            <Swiper
              slidesPerView={slidesPerView}
              spaceBetween={16}
              className={st.swiper}
              onSlideChange={(e) => setActiveIndex(e.activeIndex)}
              onInit={(e) => setSwiper(e)}
            >
              {Array(length)
                .fill(0)
                .map((item, idx) => (
                  <SwiperSlide key={idx} className={st.swiper_slide}>
                    <motion.div
                      viewport={{ once: false }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.32 }}
                    >
                      <ProductCard />
                    </motion.div>
                  </SwiperSlide>
                ))}
              <SwiperSlide className={st.swiper_slide}>
                Увидеть больше
              </SwiperSlide>
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
                  <IconButton onClick={() => swiper.slideNext()}>f</IconButton>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};

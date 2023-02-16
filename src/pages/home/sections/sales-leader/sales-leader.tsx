import { memo, useMemo, useState } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { CustomSwiper, SectionLayout } from "@/shared/ui";
import { ProductCard } from "@/widgets";
import { SwiperSlide } from "swiper/react";

import SalesImg from "shared/assets/media/imgs/sales-example.jpeg";

import { useScreen } from "@/shared/hooks";

const length = 7;

export const SalesLeader = memo(() => {
  const { currentScreen } = useScreen();

  const slidesPerView = useMemo(() => {
    if (currentScreen === "xs") {
      return 1;
    } else if (currentScreen === "sm" || currentScreen === "md") {
      return 2;
    } else if (currentScreen === "lg") {
      return 3;
    }
    return 4;
  }, [currentScreen]);

  return (
    <SectionLayout
      alignHeadlines="center"
      risingAnimation
      title="Лидеры продаж"
      subElement="Наиболее популярные модели из всех категорий интернет-магазина"
    >
      <div className={cn(st.sales_wrap, st.sales_wrap__products)}>
        <CustomSwiper
          slidesPerView={slidesPerView}
          navType="buttons"
          swiperProps={{ spaceBetween: 32 }}
        >
          {Array(length)
            .fill(0)
            .map((item, idx) => (
              <SwiperSlide key={idx}>
                <ProductCard
                  animation={{
                    exit: { opacity: 0 },
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    viewport: { amount: 0.5, once: true },
                  }}
                  colors={[]}
                  description="Описание"
                  id={1}
                  imgs={[SalesImg]}
                  name="Название"
                  oldPrice={null}
                  price={32000}
                />
              </SwiperSlide>
            ))}
          <SwiperSlide>
            <button>показать ещё</button>
          </SwiperSlide>
        </CustomSwiper>
      </div>
    </SectionLayout>
  );
});

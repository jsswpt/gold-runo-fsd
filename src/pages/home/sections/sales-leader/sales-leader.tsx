import { memo, useMemo, useState } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { CustomSwiper, SectionLayout } from "@/shared/ui";
import { SwiperSlide } from "swiper/react";

import SalesImg from "shared/assets/media/imgs/sales-example.jpeg";

import { useScreen } from "@/shared/hooks";
import { useAppSelector } from "@/shared/lib";

export const SalesLeader = memo(() => {
  const { currentScreen } = useScreen();

  const list = useAppSelector((state) => state["entities/sales-leader"].list);

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
      disablePaddingForBody
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
          {list.map((item, idx) => (
            <SwiperSlide key={item.id}></SwiperSlide>
          ))}
          <SwiperSlide>
            <button>показать ещё</button>
          </SwiperSlide>
        </CustomSwiper>
      </div>
    </SectionLayout>
  );
});

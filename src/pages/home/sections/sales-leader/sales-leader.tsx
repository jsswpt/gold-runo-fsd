import { memo, useMemo, useState } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { CustomSwiper, PreviewSliderLayout, SectionLayout } from "@/shared/ui";
import { SwiperSlide } from "swiper/react";

import SalesImg from "shared/assets/media/imgs/sales-example.jpeg";

import { useScreen } from "@/shared/hooks";
import { useAppSelector } from "@/shared/lib";
import { ProductCard } from "@/widgets";

export const SalesLeader = memo(() => {
  const list = useAppSelector((state) => state["entities/sales-leader"].list);

  return (
    <SectionLayout
      disablePaddingForBody
      risingAnimation
      title="Лидеры продаж"
      subElement="Наиболее популярные модели из всех категорий интернет-магазина"
    >
      <div className={cn(st.sales_wrap, st.sales_wrap__products)}>
        <PreviewSliderLayout maxSlidesPerScreen={5}>
          {list.map((item, idx) => (
            <SwiperSlide key={item.id}>
              <ProductCard
                blockProps={{
                  whileInView: { opacity: 1 },
                  initial: { opacity: 0 },
                  exit: { opacity: 0 },
                  viewport: { once: true, amount: 0.25 },
                }}
                href=""
                id={1}
                price={item.price}
                priceT={"min"}
                title={item.title}
                media={null}
                disableActions
              />
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <button>показать ещё</button>
          </SwiperSlide>
        </PreviewSliderLayout>
      </div>
    </SectionLayout>
  );
});

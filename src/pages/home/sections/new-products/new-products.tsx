import { useMemo } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { CustomSwiper, SectionLayout } from "@/shared/ui";
import { SwiperSlide } from "swiper/react";
import { ProductCard } from "@/widgets";
import { useScreen } from "@/shared/hooks";

import NewProductExample from "shared/assets/media/imgs/new-example.jpg";

type NewProducts = {};

export const NewProducts = (props: NewProducts) => {
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
      disablePaddingForBody
      disablePaddingForHeadlines
      risingAnimation
      alignHeadlines="center"
      title="Новинки"
      subElement="Обратите внимание на последние поступления"
    >
      <div className={st.new_products_wrap__slider}>
        <CustomSwiper
          navType="buttons"
          swiperProps={{ spaceBetween: 32 }}
          slidesPerView={slidesPerView}
          className={st.products_slider}
        >
          {Array(10)
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
                  media={[{ image_url: null, video_url: "" }]}
                />
              </SwiperSlide>
            ))}
        </CustomSwiper>
      </div>
    </SectionLayout>
  );
};

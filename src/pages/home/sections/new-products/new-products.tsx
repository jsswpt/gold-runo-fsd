import { useMemo } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { CustomSwiper, PreviewSliderLayout, SectionLayout } from "@/shared/ui";
import { SwiperSlide } from "swiper/react";
import { useScreen } from "@/shared/hooks";

import NewProductExample from "shared/assets/media/imgs/new-example.jpg";
import { ProductCard } from "@/widgets";

type NewProducts = {};

export const NewProducts = (props: NewProducts) => {
  const { currentScreen } = useScreen();

  const slidesPerView = useMemo(() => {
    if (currentScreen === "xs") {
      return 1.25;
    } else if (currentScreen === "sm" || currentScreen === "md") {
      return 2;
    } else if (currentScreen === "lg") {
      return 3;
    } else if (currentScreen === "xl") {
      return 4;
    } else return 5;
  }, [currentScreen]);

  return (
    <SectionLayout
      disablePaddingForBody
      disablePaddingForHeadlines
      risingAnimation
      title="Новинки"
      subElement="Обратите внимание на последние поступления"
    >
      <div className={st.new_products_wrap__slider}>
        <PreviewSliderLayout maxSlidesPerScreen={5}>
          {Array(10)
            .fill(0)
            .map((item, idx) => (
              <SwiperSlide key={idx}>
                <ProductCard
                  blockProps={{
                    whileInView: { opacity: 1 },
                    initial: { opacity: 0 },
                    exit: { opacity: 0 },
                    viewport: { once: true, amount: 0.25 },
                  }}
                  href=""
                  id={1}
                  media={null}
                  price={1}
                  priceT="static"
                  title="Новинка"
                  alternatePrice={1000}
                />
              </SwiperSlide>
            ))}
        </PreviewSliderLayout>
      </div>
    </SectionLayout>
  );
};

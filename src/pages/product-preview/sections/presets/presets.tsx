import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { PreviewSliderLayout, SectionLayout } from "@/shared/ui";
import { SwiperSlide } from "swiper/react";
import { CategoryCard } from "@/shared/ui/category-card/category-card";

import Image1 from "shared/assets/media/imgs/sofa-example.jpg";

type Presets = {};

export const Presets = (props: Presets) => {
  return (
    <SectionLayout
      title="Готовые стили"
      disablePaddingForBody
      subElement="Для вашего удобства, мы подобрали стили"
    >
      <PreviewSliderLayout>
        <SwiperSlide>
          <CategoryCard id={1} img={Image1} title="Диван" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard id={1} img={Image1} title="Диван" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard id={1} img={Image1} title="Диван" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard id={1} img={Image1} title="Диван" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard id={1} img={Image1} title="Диван" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard id={1} img={Image1} title="Диван" />
        </SwiperSlide>
      </PreviewSliderLayout>
    </SectionLayout>
  );
};

import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { PreviewSliderLayout, SectionLayout } from "@/shared/ui";
import { CategoryCard } from "@/shared/ui/category-card/category-card";
import { SwiperSlide } from "swiper/react";

import SofaExample from "shared/assets/media/imgs/sofa-example.jpg";

type Variants = {};

export const Variants = (props: Variants) => {
  return (
    <SectionLayout title="Варианты модели" disablePaddingForBody>
      <PreviewSliderLayout>
        <SwiperSlide>
          <CategoryCard id={"pryamie"} title="Вариант 1" img={SofaExample} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard id={"uglovie"} title="Вариант 2" img={SofaExample} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard id={"p-obraznie"} title="Вариант 3" img={SofaExample} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard
            id={"s-podstavkoy"}
            title="Вариант 4"
            img={SofaExample}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard id={"s-kompikom"} title="Вариант 5" img={SofaExample} />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard id={"s-kompikom"} title="Вариант 6" img={SofaExample} />
        </SwiperSlide>
      </PreviewSliderLayout>
    </SectionLayout>
  );
};

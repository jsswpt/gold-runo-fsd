import { useMemo } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { CustomSwiper, PreviewSliderLayout, SectionLayout } from "@/shared/ui";
import { SwiperSlide } from "swiper/react";
import { CategoryCard } from "@/shared/ui/category-card/category-card";

import SofaExample from "shared/assets/media/imgs/sofa-example.jpg";

import { useScreen } from "@/shared/hooks";

type Categories = {};

export const Categories = (props: Categories) => {
  return (
    <SectionLayout disableHeadlines disablePaddingForBody>
      <div className={st.categories_wrap__swiper}>
        <PreviewSliderLayout>
          <SwiperSlide>
            <CategoryCard
              blockProps={{
                whileInView: { opacity: 1 },
                initial: { opacity: 0 },
                exit: { opacity: 0 },
                viewport: { once: true, amount: 0.25 },
              }}
              id={"pryamie"}
              title="Прямые диваны"
              img={SofaExample}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              blockProps={{
                whileInView: { opacity: 1 },
                initial: { opacity: 0 },
                exit: { opacity: 0 },
                viewport: { once: true, amount: 0.25 },
              }}
              id={"uglovie"}
              title="Угловые диваны"
              img={SofaExample}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              blockProps={{
                whileInView: { opacity: 1 },
                initial: { opacity: 0 },
                exit: { opacity: 0 },
                viewport: { once: true, amount: 0.25 },
              }}
              id={"p-obraznie"}
              title="П-образные диваны"
              img={SofaExample}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              blockProps={{
                whileInView: { opacity: 1 },
                initial: { opacity: 0 },
                exit: { opacity: 0 },
                viewport: { once: true, amount: 0.25 },
              }}
              id={"s-podstavkoy"}
              title="Диваны с подставкой"
              img={SofaExample}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              blockProps={{
                whileInView: { opacity: 1 },
                initial: { opacity: 0 },
                exit: { opacity: 0 },
                viewport: { once: true, amount: 0.25 },
              }}
              id={"s-kompikom"}
              title="Диваны с компиком"
              img={SofaExample}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              blockProps={{
                whileInView: { opacity: 1 },
                initial: { opacity: 0 },
                exit: { opacity: 0 },
                viewport: { once: true, amount: 0.25 },
              }}
              id={"s-kompikom"}
              title="Диваны с компиком"
              img={SofaExample}
            />
          </SwiperSlide>
        </PreviewSliderLayout>
      </div>
    </SectionLayout>
  );
};

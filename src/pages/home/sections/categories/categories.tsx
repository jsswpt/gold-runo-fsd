import { useMemo } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { CustomSwiper, SectionLayout } from "@/shared/ui";
import { SwiperSlide } from "swiper/react";
import { CategoryCard } from "@/shared/ui/category-card/category-card";

import CategoryExample from "shared/assets/media/imgs/category-example.jpg";
import { useScreen } from "@/shared/hooks";

type Categories = {};

export const Categories = (props: Categories) => {
  const { currentScreen } = useScreen();

  const slidesPerView = useMemo(() => {
    if (currentScreen === "xs") {
      return 1;
    } else if (currentScreen === "sm") {
      return 2;
    } else if (currentScreen === "md" || currentScreen === "lg") {
      return 3;
    }
    return 4;
  }, [currentScreen]);

  return (
    <SectionLayout disableHeadlines disablePaddingForBody>
      <div className={st.categories_wrap__swiper}>
        <CustomSwiper
          navType="buttons"
          slidesPerView={slidesPerView}
          swiperProps={{ spaceBetween: 32 }}
        >
          <SwiperSlide>
            <CategoryCard
              animation={{
                whileInView: { opacity: 1 },
                initial: { opacity: 0 },
                exit: { opacity: 0 },
                viewport: { once: true, amount: 0.1 },
              }}
              id={"pryamie"}
              title="Прямые диваны"
              img={CategoryExample}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              animation={{
                whileInView: { opacity: 1 },
                initial: { opacity: 0 },
                exit: { opacity: 0 },
                viewport: { once: true, amount: 0.5 },
              }}
              id={"uglovie"}
              title="Угловые диваны"
              img={CategoryExample}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              animation={{
                whileInView: { opacity: 1 },
                initial: { opacity: 0 },
                exit: { opacity: 0 },
                viewport: { once: true, amount: 0.5 },
              }}
              id={"p-obraznie"}
              title="П-образные диваны"
              img={CategoryExample}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              animation={{
                whileInView: { opacity: 1 },
                initial: { opacity: 0 },
                exit: { opacity: 0 },
                viewport: { once: true, amount: 0.5 },
              }}
              id={"s-podstavkoy"}
              title="Диваны с подставкой"
              img={CategoryExample}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              animation={{
                whileInView: { opacity: 1 },
                initial: { opacity: 0 },
                exit: { opacity: 0 },
                viewport: { once: true, amount: 0.5 },
              }}
              id={"s-kompikom"}
              title="Диваны с компиком"
              img={CategoryExample}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              animation={{
                whileInView: { opacity: 1 },
                initial: { opacity: 0 },
                exit: { opacity: 0 },
                viewport: { once: true, amount: 0.5 },
              }}
              id={"s-kompikom"}
              title="Диваны с компиком"
              img={CategoryExample}
            />
          </SwiperSlide>
        </CustomSwiper>
      </div>
    </SectionLayout>
  );
};

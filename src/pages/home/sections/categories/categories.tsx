import { useMemo, useRef } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { CustomSwiper, PreviewSliderLayout, SectionLayout } from "@/shared/ui";
import { SwiperSlide } from "swiper/react";
import { CategoryCard } from "@/shared/ui/category-card/category-card";

import SofaExample from "shared/assets/media/imgs/sofa-example.jpg";

import { useScreen } from "@/shared/hooks";
import { useInView } from "framer-motion";

type Categories = {};

export const Categories = (props: Categories) => {
  return (
    <SectionLayout disableHeadlines disablePaddingForBody>
      <div className={st.categories_wrap__swiper}>
        <PreviewSliderLayout>
          {Array(10)
            .fill(0)
            .map((item, idx) => (
              <SwiperSlide key={idx}>
                <CategoryCard
                  blockProps={{
                    viewport: { once: true, amount: 0.32 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.48 },
                    initial: { opacity: 0, y: "-10%" },
                  }}
                  id={"pryamie"}
                  title="Прямые диваны"
                  img={SofaExample}
                />
              </SwiperSlide>
            ))}
        </PreviewSliderLayout>
      </div>
    </SectionLayout>
  );
};

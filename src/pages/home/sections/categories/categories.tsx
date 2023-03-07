import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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
                  id={"pryamie"}
                  title={`Диваны`}
                  img={SofaExample}
                />
              </SwiperSlide>
            ))}
        </PreviewSliderLayout>
      </div>
    </SectionLayout>
  );
};

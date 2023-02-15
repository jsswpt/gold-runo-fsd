import {} from "react";

import st from "../../styles.module.scss";
import cn from "classnames";

import { SwiperSlide } from "swiper/react";
import { CustomSwiper, ReviewSliderCard, SectionLayout } from "@/shared/ui";
import { useScreen } from "@/shared/hooks";

type Reviews = {};

export const Reviews = (props: Reviews) => {
  const { currentScreen } = useScreen();
  return (
    <SectionLayout
      alignHeadlines="start"
      subElement="Отзывы клиентов Yorcom"
      title="Отзывы"
    >
      <div className={st.reviews_wrap__swiper}>
        <CustomSwiper
          navType="buttons"
          slidesPerView={
            currentScreen === "xs" ? 1 : currentScreen === "sm" ? 1 : 2
          }
          swiperProps={{ spaceBetween: 48 }}
        >
          {Array(10)
            .fill(0)
            .map((item, idx) => (
              <SwiperSlide key={idx}>
                <ReviewSliderCard
                  animation={{
                    whileInView: { opacity: 1 },
                    exit: { opacity: 0 },
                    initial: { opacity: 0 },
                    transition: { duration: 0.64 },
                    viewport: { once: true },
                  }}
                  id="1"
                  img=""
                  name="Олег Майами"
                  city="Москва"
                />
              </SwiperSlide>
            ))}
        </CustomSwiper>
      </div>
    </SectionLayout>
  );
};

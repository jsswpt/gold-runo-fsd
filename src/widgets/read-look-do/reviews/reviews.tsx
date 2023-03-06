import { useMemo } from "react";

import st from "../styles.module.scss";
import cn from "classnames";
import {
  CustomSwiper,
  PreviewSliderLayout,
  ReviewAndBlogCard,
} from "@/shared/ui";
import { SwiperSlide } from "swiper/react";
import { useScreen } from "@/shared/hooks";

import { motion } from "framer-motion";

import ReviewImg from "shared/assets/media/imgs/review-example.jpg";

type ReviewsChunk = {};

export const ReviewsChunk = (props: ReviewsChunk) => {
  const { currentScreen } = useScreen();

  const slidesPerView = useMemo(() => {
    if (currentScreen === "xs") {
      return 1.25;
    } else if (currentScreen === "sm" || currentScreen === "md") {
      return 2;
    } else if (currentScreen === "lg") {
      return 3;
    } else {
      return 4;
    }
  }, [currentScreen]);
  return (
    <motion.div
      transition={{ when: "beforeChildren" }}
      className={st.reviews_wrap__swiper}
    >
      <PreviewSliderLayout>
        {Array(10)
          .fill(0)
          .map((item, idx) => (
            <SwiperSlide key={idx}>
              <ReviewAndBlogCard
                id={idx}
                img={ReviewImg}
                title="Олег монгол"
                body="Купил у вас диван, всё ваще мегашик"
              />
            </SwiperSlide>
          ))}
      </PreviewSliderLayout>
    </motion.div>
  );
};

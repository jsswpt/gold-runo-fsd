import {} from "react";

import st from "../../../styles.module.scss";
import cn from "classnames";
import { CustomSwiper, ReviewAndBlogCard } from "@/shared/ui";
import { SwiperSlide } from "swiper/react";
import { useScreen } from "@/shared/hooks";

import { motion } from "framer-motion";

import ReviewImg from "shared/assets/media/imgs/review-example.jpg";

type ReviewsChunk = {};

export const ReviewsChunk = (props: ReviewsChunk) => {
  const { currentScreen } = useScreen();
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ when: "beforeChildren" }}
      className={st.reviews_wrap__swiper}
    >
      <CustomSwiper
        navType="buttons"
        slidesPerView={
          currentScreen === "xs" ? 1 : currentScreen === "sm" ? 1 : 3
        }
        swiperProps={{ spaceBetween: 48 }}
      >
        {Array(10)
          .fill(0)
          .map((item, idx) => (
            <SwiperSlide key={idx}>
              <ReviewAndBlogCard
                animation={{
                  whileInView: { opacity: 1 },
                  exit: { opacity: 0 },
                  initial: { opacity: 0 },
                  transition: { duration: 0.64 },
                  viewport: { once: true },
                }}
                id={idx}
                img={ReviewImg}
                title="Олег монгол"
                body="Купил у вас диван, всё ваще мегашик"
              />
            </SwiperSlide>
          ))}
      </CustomSwiper>
    </motion.div>
  );
};

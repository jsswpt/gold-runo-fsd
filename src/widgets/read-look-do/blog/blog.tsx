import { useMemo } from "react";

import st from "../styles.module.scss";
import cn from "classnames";

import { motion } from "framer-motion";
import {
  CustomSwiper,
  PreviewSliderLayout,
  ReviewAndBlogCard,
} from "@/shared/ui";
import { SwiperSlide } from "swiper/react";
import { useScreen } from "@/shared/hooks";

import BlogExample from "shared/assets/media/imgs/blog-example.jpg";

type BlogChunk = {};

export const BlogChunk = (props: BlogChunk) => {
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
                img={BlogExample}
                title="Розыгрыш дивана!"
                body="Соверши покупку в период с 4 февраля по 30 апреля и участвуй в розыгрыше наших самых востребованных товаров. Или получи скидку за репост этой записи."
              />
            </SwiperSlide>
          ))}
      </PreviewSliderLayout>
    </motion.div>
  );
};

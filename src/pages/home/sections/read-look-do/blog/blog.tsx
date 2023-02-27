import {} from "react";

import st from "../../../styles.module.scss";
import cn from "classnames";

import { motion } from "framer-motion";
import { CustomSwiper, ReviewAndBlogCard } from "@/shared/ui";
import { SwiperSlide } from "swiper/react";
import { useScreen } from "@/shared/hooks";

import BlogExample from "shared/assets/media/imgs/blog-example.jpg";

type BlogChunk = {};

export const BlogChunk = (props: BlogChunk) => {
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
        swiperProps={{ spaceBetween: 32 }}
      >
        {Array(10)
          .fill(0)
          .map((item, idx) => (
            <SwiperSlide key={idx}>
              <ReviewAndBlogCard
                animation={{
                  exit: { opacity: 0 },
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { amount: 0.5, once: true },
                }}
                id={idx}
                img={BlogExample}
                title="Розыгрыш дивана!"
                body="Соверши покупку в период с 4 февраля по 30 апреля и участвуй в розыгрыше наших самых востребованных товаров. Или получи скидку за репост этой записи."
              />
            </SwiperSlide>
          ))}
      </CustomSwiper>
    </motion.div>
  );
};

import st from "./styles.module.scss";
import cn from "classnames";
import Link from "next/link";
import { Button } from "../button/button";

import { HTMLMotionProps, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type ReviewSliderCard = {
  id: string;
  city: string;
  name: string;
  img: string;
  animation?: HTMLMotionProps<"article">;
};

export const ReviewSliderCard = (props: ReviewSliderCard) => {
  const { inView, ref } = useInView({ threshold: 1, triggerOnce: true });

  return (
    <motion.article
      ref={ref}
      {...props.animation}
      className={st.review_slider_card}
    >
      <div className={st.review_wrap__img}>
        <div className={st.review_img}></div>
      </div>
      <motion.div
        initial={{ y: "500%", opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{ duration: 0.64, delay: 0 }}
        className={st.review_wrap__info}
      >
        <div className={st.review_info_wrap__top}>
          <h3 className={st.review_title}>{props.name}</h3>
        </div>
        <div className={st.review_info_wrap__bottom}>
          <div className={st.bottom_wrap__city}>
            <p className={st.city_title}>{props.city}</p>
          </div>
          <div className={st.bottom_wrap__button}>
            <Link href={`/reviews/${props.id}`}>
              <Button variant="outlined" size="sm">
                Подробнее
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
};

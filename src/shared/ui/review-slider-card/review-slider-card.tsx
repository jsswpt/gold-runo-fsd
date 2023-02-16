import st from "./styles.module.scss";
import cn from "classnames";
import Link from "next/link";
import { Button } from "../button/button";

import { HTMLMotionProps, motion } from "framer-motion";
import { memo } from "react";
import Image, { StaticImageData } from "next/image";

type ReviewSliderCard = {
  id: string;
  city: string;
  name: string;
  img: string | StaticImageData;
  animation?: HTMLMotionProps<"article">;
};

export const ReviewSliderCard = memo((props: ReviewSliderCard) => {
  return (
    <motion.article {...props.animation} className={st.review_slider_card}>
      <div className={st.review_wrap__img}>
        <Image
          src={props.img}
          alt="img"
          className={cn("dark-selection", st.review_img)}
        />
      </div>
      <div className={st.review_wrap__info}>
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
      </div>
    </motion.article>
  );
});

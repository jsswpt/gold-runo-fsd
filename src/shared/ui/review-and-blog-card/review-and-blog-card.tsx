import st from "./styles.module.scss";
import cn from "classnames";
import Link from "next/link";
import { Button } from "../button/button";

import { HTMLMotionProps, motion } from "framer-motion";
import { memo } from "react";
import Image, { StaticImageData } from "next/image";

type ReviewAndBlogCard = {
  id: number;
  title: string;
  body: string;
  img: string | StaticImageData;
  animation?: HTMLMotionProps<"article">;
};

export const ReviewAndBlogCard = memo((props: ReviewAndBlogCard) => {
  return (
    <motion.article {...props.animation} className={st.card}>
      <div className={st.card_wrap__img}>
        <Image src={props.img} alt={props.title} />
      </div>
      <div className={st.card_wrap__info}>
        <div className={st.info_wrap__top}>
          <div className={st.info_top_wrap__title}>
            <h3 className={st.info_title}>{props.title}</h3>
          </div>
          <div className={st.info_top_wrap__body}>
            <p className={cn("body2", st.info_body)}>{props.body}</p>
          </div>
        </div>
        <div className={st.info_wrap__bottom}>
          <div className={st.info_bottom_wrap__body}></div>
        </div>
      </div>
    </motion.article>
  );
});

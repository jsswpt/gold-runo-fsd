import st from "./styles.module.scss";
import cn from "classnames";
import Link from "next/link";
import { Button, Divider } from "@/shared/ui";
import { AddToCart, BuyByOneTap } from "@/features";
import { memo } from "react";
import { ProductVariantT } from "@/shared/api/internal";

import { HTMLMotionProps, motion } from "framer-motion";
import Image from "next/image";

interface ProductCard extends ProductVariantT {
  animation?: HTMLMotionProps<"article">;
}

export const ProductCard = memo((props: ProductCard) => {
  return (
    <motion.article {...props.animation} className={st.product_card}>
      <div className={st.product_card_image_wrapper}>
        <Link href={`/product/${props.id}`}>
          <Image
            src={props.imgs[0]}
            alt="Картинка"
            className="dark-selection"
          />
        </Link>
      </div>
      <div className={st.product_card_body}>
        <div className={st.product_card_info_wrapper}>
          {props.colors && (
            <div className={st.product_info_wrap__color}>
              {props.colors.map((item) => (
                <Link
                  href={`/product/${props.id}/${item.name}`}
                  className={st.color_point}
                >
                  {item.name}
                </Link>
              ))}
              <Link href={`/product/${props.id}`} className={st.color_point}>
                +7
              </Link>
            </div>
          )}

          <div className={st.product_info_wrap__name}>
            <h3 className={cn("subtitle2", "dark-selection", st.product_name)}>
              <Link href={""} className="dark-selection">
                {props.name}
              </Link>
            </h3>
          </div>
          <div className={st.product_info_wrap__price}>
            <p className={cn("dark-selection", st.product_current_price)}>
              {props.price} ₽
            </p>
            {props.oldPrice && (
              <p
                className={cn("body1", "dark-selection", st.product_old_price)}
              >
                {props.oldPrice} ₽
              </p>
            )}
          </div>
        </div>
        <Divider />
        <div className={st.product_card_actions_wrapper}>
          <AddToCart />
          <BuyByOneTap />
        </div>
      </div>
    </motion.article>
  );
});

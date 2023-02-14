import st from "./styles.module.scss";
import cn from "classnames";
import Link from "next/link";
import { Button, Divider } from "@/shared/ui";
import { AddToCart, BuyByOneTap } from "@/features";
import { memo } from "react";
import { ProductVariantT } from "@/shared/api/internal";

export const ProductCard = memo((props: ProductVariantT) => {
  return (
    <article className={st.product_card}>
      <div className={st.product_card_image_wrapper}>
        <Link href={`/product/${props.id}`}></Link>
      </div>
      <div className={st.product_card_body}>
        <div className={st.product_card_info_wrapper}>
          {props.colors && (
            <div className={st.product_info_wrap__color}>
              {props.colors.map((item) => (
                <div>{item.name}</div>
              ))}
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
            <p className={cn("body1", "dark-selection", st.product_old_price)}>
              {props.oldPrice} ₽
            </p>
          </div>
        </div>
        <Divider />
        <div className={st.product_card_actions_wrapper}>
          <AddToCart />
          <BuyByOneTap />
        </div>
      </div>
    </article>
  );
});

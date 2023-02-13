import st from "./styles.module.scss";
import cn from "classnames";
import Link from "next/link";
import { Button } from "@/shared/ui";
import { BuyByOneTap } from "@/features";

export const ProductCard = () => {
  return (
    <article className={st.product_card}>
      <div className={st.product_card_image_wrapper}>
        <Link href=""></Link>
      </div>
      <div className={st.product_card_body}>
        <div className={st.product_card_info_wrapper}>
          <div className={st.product_info_wrap__name}>
            <h3 className={cn("subtitle2", "dark-selection", st.product_name)}>
              <Link href={""}>Какой-то диван</Link>
            </h3>
          </div>
          <div className={st.product_info_wrap__price}>
            <p className={cn("dark-selection", st.product_current_price)}>
              35 890 ₽
            </p>
            <p className={cn("body1", "dark-selection", st.product_old_price)}>
              39 990 ₽
            </p>
          </div>
        </div>

        <div className={st.product_card_actions_wrapper}>
          <Button>В корзину</Button>
          <BuyByOneTap />
        </div>
      </div>
    </article>
  );
};

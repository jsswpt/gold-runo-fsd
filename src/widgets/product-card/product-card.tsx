import st from "./styles.module.scss";
import cn from "classnames";
import Link from "next/link";
import { Button } from "@/shared/ui";

export const ProductCard = () => {
  return (
    <article className={st.product_card}>
      <div className={st.product_card_image_wrapper}></div>
      <div className={st.product_card_body}>
        <div className={st.product_card_info_wrapper}>
          <div className={st.product_info_wrap__name}>
            <h3 className={cn("subtitle2", st.product_name)}>Какой-то диван</h3>
          </div>
          <div className={st.product_info_wrap__price}>
            <p className={cn(st.product_current_price)}>35 890 ₽</p>
            <p className={cn("body1", st.product_old_price)}>39 990 ₽</p>
          </div>
        </div>

        <div className={st.product_card_actions_wrapper}>
          <Button>В корзину</Button>
          <Link href="" className={cn(st.link)}>
            Купить в один клик
          </Link>
        </div>
      </div>
    </article>
  );
};

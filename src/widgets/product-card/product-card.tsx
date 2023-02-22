import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { MediaType, SizesObjT } from "@/shared/api/internal";

import { motion, HTMLMotionProps } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AddToCart, BuyByOneTap } from "@/features";
import { useScreen } from "@/shared/hooks";
import dynamic from "next/dynamic";

const HoverSwiper = dynamic(
  () => import("./ui/hover-swiper/hover-swiper").then((m) => m.HoverSwiper),
  { ssr: false, loading: (props) => (props.isLoading ? <>Loading...</> : null) }
);
const TapSwiper = dynamic(
  () => import("./ui/tap-swiper/tap-swiper").then((m) => m.TapSwiper),
  { ssr: false, loading: (props) => (props.isLoading ? <>Loading...</> : null) }
);

type ProductCard = {
  disableColors?: boolean;
  title: string;
  description?: string;
  sizes?: SizesObjT;
  priceT: "min" | "static";
  price: number;
  alternatePrice?: number;

  disableActions?: boolean;

  media: MediaType[];

  blockProps?: HTMLMotionProps<"article">;
};

// доработать
export const ProductCard = (props: ProductCard) => {
  const { inView, ref } = useInView({ threshold: 0.01, triggerOnce: true });

  const { currentScreen } = useScreen();

  return (
    <motion.article
      ref={ref}
      {...props.blockProps}
      className={cn(st.product_card)}
    >
      <div className={st.product_card_wrap__media}>
        {inView ? (
          <>
            {currentScreen === "xl" ||
            currentScreen === "xxl" ||
            currentScreen === "xxxl" ? (
              <HoverSwiper list={props.media} />
            ) : (
              <TapSwiper list={props.media} />
            )}
          </>
        ) : (
          <>скелетон</>
        )}
      </div>
      <div className={st.product_card_wrap__body}>
        <div className={st.product_body_wrap__main_info}>
          <h3 className={cn("subtitle2", "dark-selection", st.product_title)}>
            {props.title}
          </h3>
          {props.description && (
            <p
              className={cn("body2", "dark-selection", st.product_description)}
            >
              {props.description}
            </p>
          )}
        </div>
        {props.sizes && (
          <div className={st.product_body_wrap__sizes}>
            <p className={cn("body1", "dark-selection", st.product_size_title)}>
              Размер (ДхШхВ)
            </p>
            <p className={cn("dark-selection", st.product_size)}>
              {props.sizes.length} x {props.sizes.width} x {props.sizes.height}
            </p>
          </div>
        )}
        <div className={st.product_body_wrap__price}>
          <p className={cn("h6", "dark-selection", st.product_price_title)}>
            {props.priceT === "min" && "от"} {props.price} ₽
          </p>
          {props.alternatePrice && (
            <p
              className={cn(
                "subtitle1",
                "dark-selection",
                st.product_alternate_price_title
              )}
            >
              {props.alternatePrice} ₽
            </p>
          )}
        </div>
        <div className={st.product_body_wrap__rating}>Будет рейтинг</div>
        {!props.disableActions && (
          <div className={st.product_body_wrap__actions}>
            <div className={st.product_body_actions__item}>
              <AddToCart />
            </div>
            <div className={st.product_body_actions__item}>
              <BuyByOneTap />
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
};

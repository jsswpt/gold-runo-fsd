import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { MediaType, SizesObjT } from "@/shared/api/internal";

import { motion, HTMLMotionProps } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AddToCart, BuyByOneTap } from "@/features";
import { useScreen } from "@/shared/hooks";
import dynamic from "next/dynamic";
import { SofaIllustration } from "@/shared/assets";
import Link from "next/link";

const HoverSwiper = dynamic(
  () => import("./ui/hover-swiper/hover-swiper").then((m) => m.HoverSwiper),
  { ssr: false, loading: (props) => (props.isLoading ? <>Loading...</> : null) }
);
const TapSwiper = dynamic(
  () => import("./ui/tap-swiper/tap-swiper").then((m) => m.TapSwiper),
  { ssr: false, loading: (props) => (props.isLoading ? <>Loading...</> : null) }
);

type ProductCard = {
  id: number;
  href: string;
  disableColors?: boolean;
  title: string;
  description?: string;
  sizes?: SizesObjT;
  priceT: "min" | "static";
  price: number;
  alternatePrice?: number;

  rating?: number;

  actions?: boolean;

  media: MediaType[] | null;

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
      <Link href={props.href} className={st.product_card_wrap__media}>
        {inView && props.media ? (
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
          <>
            <SofaIllustration />
          </>
        )}
      </Link>
      <div className={st.product_card_wrap__body}>
        <div className={st.product_card_body_wrap__colors}>Цвета</div>
        <div className={st.product_card_body_wrap__main_info}>
          <div className={st.product_card_main_info_wrap__title}>
            <h4 className={cn("h4", "dark-selection")}>
              <Link
                href={props.href}
                className={cn("h4", "dark-selection", st.product_title)}
              >
                {props.title}
              </Link>
            </h4>
          </div>
          {props.description && (
            <div className={st.product_card_main_info_wrap__description}>
              <Link
                href={props.href}
                className={cn(
                  "subtitle1",
                  "dark-selection",
                  st.product_description
                )}
              >
                {props.description}
              </Link>
            </div>
          )}
          <div className={st.product_card_main_info_wrap__price}>
            <p className={cn("h3", "dark-selection", st.product_price)}>
              {props.priceT === "min" && "От"} {props.price} ₽
            </p>
            {props.alternatePrice && (
              <p
                className={cn(
                  "body2",
                  "dark-selection",
                  st.product_price_alternate
                )}
              >
                {props.alternatePrice} ₽
              </p>
            )}
          </div>
          {props.rating && (
            <div className={st.product_card_main_info_wrap__rating}></div>
          )}{" "}
        </div>
        {!props.actions && (
          <div className={st.product_card_body_wrap__actions}>
            {props.actions}
          </div>
        )}
      </div>
    </motion.article>
  );
};

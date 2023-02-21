import { memo } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import Link from "next/link";
import { ProductVariantT } from "@/shared/api/internal";

import { HTMLMotionProps, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useScreen } from "@/shared/hooks";
import { CustomSwiper } from "@/shared/ui";
import { SwiperSlide } from "swiper/react";
import { SwiperDesktop } from "./swiper-desktop/swiper-desktop";
import { SwiperMobile } from "./swiper-mobile/swiper-mobile";

interface ProductCard {
  animation?: HTMLMotionProps<"article">;
  media: Array<{
    image_url: string | StaticImageData | null;
    video_url: string | null;
  }>;
}

export const ProductCard = memo((props: ProductCard) => {
  const { media, animation } = props;

  const { currentScreen } = useScreen();
  return (
    <motion.article {...animation} className={st.product_card}>
      <div className={st.product_card__media}>
        {currentScreen === "xl" ||
        currentScreen === "xxl" ||
        currentScreen === "xxxl" ? (
          <>
            {media.length > 1 ? <SwiperDesktop list={media} /> : <>несколько</>}
          </>
        ) : (
          <>{media.length > 1 ? <SwiperMobile list={media} /> : <>один</>}</>
        )}
      </div>
      <div className={st.product_card__body}>
        <div className="asd">123</div>
      </div>
    </motion.article>
  );
});

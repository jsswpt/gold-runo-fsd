import { memo } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { CustomSwiper } from "@/shared/ui";
import { SwiperSlide } from "swiper/react";
import { SwiperItem } from "../swiper-item/swiper-item";
import { MediaType } from "@/shared/api/internal";

type TapSwiper = {
  list: MediaType[];
};

export const TapSwiper = memo((props: TapSwiper) => {
  return (
    <CustomSwiper
      className={st.swiper}
      swiperProps={{ loop: true }}
      disableShadows
    >
      {props.list.map((item) => (
        <SwiperSlide key={item.id}>
          <SwiperItem item={item} />
        </SwiperSlide>
      ))}
    </CustomSwiper>
  );
});

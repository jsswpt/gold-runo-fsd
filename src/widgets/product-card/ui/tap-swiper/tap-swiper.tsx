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
  if (props.list.length > 1) {
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
  } else if (props.list.length) {
    return <SwiperItem item={props.list[0]} />;
  } else {
    return <>где элементы сука</>;
  }
});

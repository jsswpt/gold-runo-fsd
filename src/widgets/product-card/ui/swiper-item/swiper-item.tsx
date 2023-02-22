import {} from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { MediaType } from "@/shared/api/internal";
import Image from "next/image";

type SwiperItem = {
  item: MediaType;
};

export const SwiperItem = (props: SwiperItem) => {
  return props.item.image_url !== null ? (
    <Image
      src={props.item.image_url}
      alt="img"
      className={st.swiper_item_inner}
      fill
    />
  ) : props.item.video_url ? (
    <Image
      src={props.item.video_url}
      alt="video"
      className={st.swiper_item_inner}
      fill
    />
  ) : (
    <></>
  );
};

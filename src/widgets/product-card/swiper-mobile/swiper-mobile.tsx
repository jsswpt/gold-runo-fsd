import {} from "react";

import st from "../styles.module.scss";
import cn from "classnames";
import { CustomSwiper } from "@/shared/ui";
import { SwiperSlide } from "swiper/react";
import { SwiperProps } from "../product-card.type";
import Image from "next/image";

interface SwiperMobile extends SwiperProps {}

export const SwiperMobile = (props: SwiperMobile) => {
  console.log(props);
  return (
    <CustomSwiper disableShadows className={st.some}>
      {props.list.map((item) => (
        <SwiperSlide className={st.media_wrap}>
          {item.image_url !== null ? (
            <Image fill src={item.image_url} alt="" />
          ) : (
            <video
              src={item.video_url!}
              controls={false}
              autoPlay
              preload="https://sun9-east.userapi.com/sun9-36/s/v1/ig2/Qvchsk8Wbo3ipAuOpt7SApDt0nqCLI3m7NsjskJPw3u-ZEDR0wmU8-POcX3xUivUh6IGoIb_JgaNnPB1nad1KJ37.jpg?size=1620x2160&quality=95&type=album"
              muted
              loop
            />
          )}
        </SwiperSlide>
      ))}
    </CustomSwiper>
  );
};

import st from "../../styles.module.scss";
import cn from "classnames";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import { memo } from "react";
import { CustomSwiper } from "@/shared/ui";

import BannerImage from "shared/assets/media/imgs/banner-example.jpg";
import Image from "next/image";

const slides = [0, 1, 2];

export const Banner = memo(() => {
  return (
    <section className={cn(st.section_banner)}>
      <CustomSwiper
        navType="plates"
        wrapperClassName={st.banner_wrap__slider}
        slidesPerView={1}
        swiperProps={{ spaceBetween: 32 }}
        className={st.banner_wrap__slider}
      >
        {slides.map((item) => (
          <SwiperSlide key={item}>
            <div className={st.banner_bg_wrapper}>
              <Image src={BannerImage} alt="banner" />
            </div>
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </section>
  );
});

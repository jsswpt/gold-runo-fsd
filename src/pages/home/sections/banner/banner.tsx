import st from "../../styles.module.scss";
import cn from "classnames";
import { SwiperSlide } from "swiper/react";
import { memo, useRef } from "react";
import { CustomSwiper } from "@/shared/ui";

import Image from "next/image";
import { useAppSelector } from "@/shared/lib";

import "swiper/css";

export const Banner = memo(() => {
  const slides = useAppSelector((state) => state["entities/banner"].slides);
  return (
    <section className={cn(st.section_banner)}>
      <CustomSwiper
        disableShadows
        navType="plates"
        wrapperClassName={st.banner_wrap__slider}
        slidesPerView={1}
        swiperProps={{
          spaceBetween: 32,
        }}
        className={st.banner_wrap__slider}
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={st.banner_bg_wrapper}>
              {item.image_url ? (
                <Image
                  // fill
                  src={item.image_url}
                  width={1920}
                  height={1080}
                  alt="banner"
                  className="dark-selection"
                />
              ) : (
                <>video</>
              )}
            </div>
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </section>
  );
});

import {} from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { CustomSwiper } from "@/shared/ui";
import { SwiperSlide } from "swiper/react";
import { MediaType } from "@/shared/api/internal";

import Banner1 from "shared/assets/media/imgs/banner-example-3.jpg";
import Banner2 from "shared/assets/media/imgs/set-example.jpg";
import Banner3 from "shared/assets/media/imgs/interior-example.jpg";
import Banner4 from "shared/assets/media/imgs/fake-video.jpg";
import Image from "next/image";

type Banner = {};

export const Banner = (props: Banner) => {
  const slides: MediaType[] = [
    { image_url: Banner1, video_url: null, id: 1 },
    { image_url: Banner2, video_url: null, id: 2 },
    { image_url: Banner3, video_url: null, id: 3 },
    { image_url: Banner4, video_url: null, id: 4 },
  ];
  return (
    <section className={cn(st.section_banner)}>
      <CustomSwiper
        disableShadows
        navType="plates"
        wrapperClassName={st.banner_wrap__slider}
        slidesPerView={1}
        swiperProps={{ spaceBetween: 32 }}
        className={st.banner_wrap__slider}
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={st.banner_bg_wrapper}>
              {item.image_url ? (
                <Image
                  // fill
                  src={item.image_url}
                  width={2560}
                  height={1200}
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
};

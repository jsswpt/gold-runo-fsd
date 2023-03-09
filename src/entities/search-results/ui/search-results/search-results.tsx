import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { CustomSwiper, ProductCard } from "@/shared/ui";
import { SwiperSlide } from "swiper/react";

type SearchResults = {};

export const SearchResults = (props: SearchResults) => {
  return (
    <CustomSwiper
      slidesPerView={3}
      navType={"buttons"}
      swiperProps={{ spaceBetween: 16 }}
    >
      <SwiperSlide>
        <ProductCard
          href="asdsad"
          id={1}
          media={null}
          price={1000}
          priceT={"static"}
          title="Диван"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard
          href="asdsad"
          id={1}
          media={null}
          price={1000}
          priceT={"static"}
          title="Диван"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard
          href="asdsad"
          id={1}
          media={null}
          price={1000}
          priceT={"static"}
          title="Диван"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard
          href="asdsad"
          id={1}
          media={null}
          price={1000}
          priceT={"static"}
          title="Диван"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard
          href="asdsad"
          id={1}
          media={null}
          price={1000}
          priceT={"static"}
          title="Диван"
        />
      </SwiperSlide>
    </CustomSwiper>
  );
};

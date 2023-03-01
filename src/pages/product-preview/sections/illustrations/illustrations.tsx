import {} from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { CustomSwiper } from "@/shared/ui";
import { SwiperSlide } from "swiper/react";

type Illustrations = {};

export const Illustrations = (props: Illustrations) => {
  return (
    <section className={st.section_illustrations}>
      <h2 className={cn("h2", "dark-selection", "hidden")}>Иллюстрации</h2>

      <div className={st.illustrations_wrap__grid}>
        <div className={st.illustrations_grid__item}>
          <div className={st.illustration_img}>
            <button>123213</button>
          </div>
        </div>
        <div className={st.illustrations_grid__item}>
          <div className={st.illustration_img}>2</div>
        </div>
        <div className={st.illustrations_grid__item}>
          <div className={st.illustration_img}>3</div>
        </div>
        <div className={st.illustrations_grid__item}>
          <div className={st.illustration_img}>4</div>
        </div>
        <div className={st.illustrations_grid__item}>
          <div className={st.illustration_img}>5</div>
        </div>
        <div className={st.illustrations_grid__item}>
          <div className={st.illustration_img}>6</div>
        </div>
      </div>
    </section>
  );
};

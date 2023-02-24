import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";

type ProductPresentatorLayout = {};

export const ProductPresentatorLayout = (props: ProductPresentatorLayout) => {
  return (
    <>
      <section className={st.section_banner}>типа баннер ахуенный</section>
      <section className={st.section_slider}>
        Краткое слайд-шоу к примеру с сборокй или 3д моделью ваще хз
      </section>
      <section className={st.section_info}>
        типа контент про товар хар-ки и тд тп ваще
      </section>
      <section className={st.section_variants}>
        типа варианты товара широкий маленький
      </section>
    </>
  );
};

import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";

type ProductPresentator = {};

export const ProductPresentator = (props: ProductPresentator) => {
  return (
    <>
      <section className={st.section_banner}>типа баннер хорошечный</section>
      <section className={st.section_banner}>
        Краткое слайд-шоу к примеру с сборокй или 3д моделью ваще хз
      </section>
      <section className={st.section_banner}>
        типа контент про товар хар-ки и тд тп ваще
      </section>
      <section className={st.section_banner}>
        типа варианты товара широкий маленький
      </section>
    </>
  );
};

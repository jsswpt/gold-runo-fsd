import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Button, SectionLayout } from "@/shared/ui";

type Products = {};

export const Products = (props: Products) => {
  return (
    <>
      <SectionLayout
        disableHeadlines
        disablePaddingForBody
        disablePaddingForHeadlines
      >
        хлебные крошки
      </SectionLayout>
      <SectionLayout
        title="Товары"
        subElement="В этом списке представлены все товары"
        disablePaddingForBody
        disablePaddingForHeadlines
      >
        <div className={st.products_wrap__filter}>фильтры</div>
        <div className={st.products_wrap__items}>Товары</div>
        <div className={st.products_wrap__banner}>Баннер</div>
        <div className={st.products_wrap__items}>Товары</div>
        <div className={st.products_wrap__items}>Пагинация</div>
      </SectionLayout>
    </>
  );
};

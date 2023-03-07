import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { ProductsGrid, SectionLayout } from "@/shared/ui";

type Product = {};

export const Product = (props: Product) => {
  return (
    <>
      <SectionLayout
        disableHeadlines
        disablePaddingForBody
        disablePaddingForHeadlines
      >
        хлебные крошки
      </SectionLayout>
      <SectionLayout>Типа товар</SectionLayout>
    </>
  );
};

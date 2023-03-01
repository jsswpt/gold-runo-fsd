import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Banner } from "./sections/banner/banner";
import { Variants } from "./sections/variants/variants";

type ProductPreview = {};

export const ProductPreview = (props: ProductPreview) => {
  return (
    <>
      <Banner />
      <Variants />
    </>
  );
};

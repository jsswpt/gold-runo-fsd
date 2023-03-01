import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Banner } from "./sections/banner/banner";
import { Variants } from "./sections/variants/variants";
import { Filling } from "./sections/filling/filling";
import { Illustrations } from "./sections/illustrations/illustrations";
import { Presets } from "./sections/presets/presets";
import { ReadLookDo } from "@/widgets";

type ProductPreview = {};

export const ProductPreview = (props: ProductPreview) => {
  return (
    <>
      <Banner />
      <Variants />
      <Filling />
      <Illustrations />
      <Presets />
      <ReadLookDo />
    </>
  );
};

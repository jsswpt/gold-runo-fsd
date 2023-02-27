import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Checkbox } from "@/shared/ui";

type FilterProductsByKind = {};

export const FilterProductsByKind = (props: FilterProductsByKind) => {
  return (
    <div className={st.filter_products_by_kind_wrapper}>
      <Checkbox type="checkbox">Прямые</Checkbox>
      <Checkbox type="checkbox">Угловые</Checkbox>
      <Checkbox type="checkbox">П-образные</Checkbox>
      <Checkbox type="checkbox">С приставкой</Checkbox>
    </div>
  );
};

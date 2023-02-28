import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";

import { FilterProductsByKind, BaseSort } from "@/features";

type FilterByKindAndSortProducts = {};

export const FilterByKindAndSortProducts = (
  props: FilterByKindAndSortProducts
) => {
  return (
    <div className={cn(st.filter_and_sort_wrapper)}>
      <div className={cn(st.filter_and_sort_wrap__filter)}>
        <FilterProductsByKind />
      </div>
      <div className={cn(st.filter_and_sort_wrap__sort)}>
        <BaseSort />
      </div>
    </div>
  );
};

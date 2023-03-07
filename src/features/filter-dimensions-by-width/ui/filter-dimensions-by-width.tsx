import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { FilterTwoInputsAndRangeLayout, Input, RangeSlider } from "@/shared/ui";

type FilterDimensionsByWidth = {};

export const FilterDimensionsByWidth = (props: FilterDimensionsByWidth) => {
  return (
    <FilterTwoInputsAndRangeLayout
      firstInput={<Input size="sm" placeholder="От" />}
      secondInput={<Input size="sm" placeholder="До" />}
      range={
        <RangeSlider max={1000} maxValue={1000} min={256} minValue={256} />
      }
    />
  );
};

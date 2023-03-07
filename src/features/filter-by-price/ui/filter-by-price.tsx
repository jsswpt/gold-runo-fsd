import { useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import {
  Button,
  FilterTwoInputsAndRangeLayout,
  Input,
  RangeSlider,
} from "@/shared/ui";

type FilterByPrice = {};

export const FilterByPrice = (props: FilterByPrice) => {
  const [minValue, setMinValue] = useState(100);
  const [maxValue, setMaxValue] = useState(1000);

  const minValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinValue(+e.currentTarget.value);
  };
  const maxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxValue(+e.currentTarget.value);
  };

  return (
    <form>
      <FilterTwoInputsAndRangeLayout
        firstInput={<Input placeholder="От" size="sm" />}
        secondInput={<Input placeholder="До" size="sm" />}
        range={
          <RangeSlider
            min={10000}
            max={100000}
            maxValue={80000}
            minValue={20000}
          />
        }
      />
    </form>
  );
};

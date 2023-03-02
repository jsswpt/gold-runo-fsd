import { useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Button, Input, RangeSlider } from "@/shared/ui";

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
      <div>
        {minValue <= maxValue ? (
          <>
            <Input
              value={minValue}
              type="number"
              min={100}
              max={10000}
              onChange={minValueHandler}
            />
            <Input
              value={maxValue}
              type="number"
              min={100}
              max={10000}
              onChange={maxValueHandler}
            />
          </>
        ) : (
          <>
            <Input
              value={maxValue}
              type="number"
              min={100}
              max={10000}
              onChange={maxValueHandler}
            />
            <Input
              value={minValue}
              type="number"
              min={100}
              max={10000}
              onChange={minValueHandler}
            />
          </>
        )}
      </div>
      <div>
        <RangeSlider
          maxValue={maxValue}
          minValue={minValue}
          onMaxChange={(e) => setMaxValue(+e.currentTarget.value)}
          onMinChange={(e) => setMinValue(+e.currentTarget.value)}
          max={10000}
          min={100}
        />
      </div>
      <div>
        <Button fullWidth color="success">
          Применить
        </Button>
      </div>
    </form>
  );
};

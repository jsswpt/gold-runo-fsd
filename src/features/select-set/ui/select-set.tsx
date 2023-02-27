import { useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { setsPreview } from "entities/index";
import { Checkbox, Select } from "@/shared/ui";

type SelectSet = {};

export const SelectSet = (props: SelectSet) => {
  const list = useAppSelector(
    (state) => state["entities/sets"].setsForChoose,
    (prev, next) => prev === next
  );

  const dispatch = useAppDispatch();

  const currentSet = useAppSelector(
    (state) => state["entities/sets"].currentSet,
    (prev, next) => prev === next
  );

  return (
    <div className={st.select_set_wrapper}>
      {list.map((item) => (
        <Checkbox
          type="radio"
          name="select-set"
          onChange={() => dispatch(setsPreview.actions.setCurrentSet(item.id))}
          key={item.id}
        >
          {item.name}
        </Checkbox>
      ))}
    </div>
  );
};

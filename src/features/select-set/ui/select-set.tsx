import { useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { setsPreview } from "entities/index";
import { Select } from "@/shared/ui";

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
        <Select
          value={item.id}
          id={`radio-${item.id}`}
          selectName={`select-set`}
          title={item.name}
          onSelect={(val) => dispatch(setsPreview.actions.setCurrentSet(val))}
          key={item.id}
        />
      ))}
    </div>
  );
};

import { useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { setsPreview } from "entities/index";

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
        <div key={item.id}>
          <input
            name="set-radio"
            checked={currentSet?.id === item.id}
            type={"radio"}
            hidden
          />
          <label
            htmlFor="set-radio"
            onClick={() => dispatch(setsPreview.actions.setCurrentSet(item.id))}
          >
            <p
              className={cn(
                "body2",
                "dark-selection",
                st.select,
                currentSet?.id === item.id && st.active
              )}
            >
              Комплект {item.name}
            </p>
          </label>
        </div>
      ))}
    </div>
  );
};

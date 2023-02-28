import { useEffect, useRef, useState } from "react";

import st from "../styles.module.scss";
import cn from "classnames";
import { SelectItemT } from "../select.type";

export const SelectItem = (props: SelectItemT) => {
  return (
    <li
      className={cn(
        "action-inner",
        st.menu_item,
        props.active && st.menu_item__active
      )}
      onClick={props.onClick}
    >
      {props.title}
    </li>
  );
};

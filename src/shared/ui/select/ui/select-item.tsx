import {} from "react";

import st from "../styles.module.scss";
import cn from "classnames";

type SelectItem = {
  value: any;
  title: string;
  children?: React.ReactNode;
};

export const SelectItem = (props: SelectItem) => {
  return (
    <li data-value={props.value} data-title={props.title} id="menu-item">
      {props.children}
    </li>
  );
};

import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";

type Chip = {
  title: string;
  onClick?: () => void;
};

export const Chip = (props: Chip) => {
  const { title, ...restProps } = props;
  return (
    <button
      {...restProps}
      className={cn("action-inner", "dark-selection", st.chip)}
    >
      {props.title}
    </button>
  );
};

import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";

type Tooltip = {
  anchorEl: React.ReactNode;
  title: string;
};

export const Tooltip = (props: Tooltip) => {
  return (
    <div className={st.tooltip_wrapper}>
      {props.anchorEl}

      <p className={st.tooltip}>{props.title}</p>
    </div>
  );
};

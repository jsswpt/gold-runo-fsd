import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";

type PopupBlockLayout = {
  title: string;
  children?: React.ReactNode;
  className?: any;
  bodyClassName?: any;
};

export const PopupBlockLayout = (props: PopupBlockLayout) => {
  return (
    <div className={cn(st.layout, props.className)}>
      <div className={st.layout_wrap__headline}>
        <h6 className={cn("subtitle2", "dark-selection")}>{props.title}</h6>
      </div>
      <div className={cn(st.layout_wrap__body, props.bodyClassName)}>
        {props.children}
      </div>
    </div>
  );
};

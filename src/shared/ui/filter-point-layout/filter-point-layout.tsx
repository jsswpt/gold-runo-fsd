import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";

type FilterPointLayout = {
  title: string;
  children: React.ReactNode;
};

export const FilterPointLayout = (props: FilterPointLayout) => {
  return (
    <div>
      <div className={st.filter_point_wrap__title}>
        <p className={cn("body2", "dark-selection", st.title)}>{props.title}</p>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

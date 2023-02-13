import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";

type Divider = {
  title?: string;
  alignTitle?: "center" | "start" | "end";
};

export const Divider = (props: Divider) => {
  return (
    <div className={st.divider_wrapper}>
      {props.title && (
        <div className={st.title_wrap}>
          <p className={cn("caption", "dark-selection", st.title)}>
            {props.title}
          </p>
        </div>
      )}
      <hr className={st.divider} />
    </div>
  );
};

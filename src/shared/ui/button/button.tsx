import { ButtonHTMLAttributes } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { ButtonProps } from "./button.type";
import { returnClasses } from "./lib/return-classes";

export const Button = (props: ButtonProps) => {
  const { size, variant, color, ...restProps } = props;
  return (
    <button
      {...restProps}
      className={cn(
        st.button,
        {
          [st.sm]: size === "sm",
          [st.md]: size === "md" || !size,
          [st.lg]: size === "lg",
        },
        returnClasses({ color, size, variant })
      )}
    >
      {props.children}
    </button>
  );
};

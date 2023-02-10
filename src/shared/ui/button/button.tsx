import { ButtonHTMLAttributes } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { ButtonBase } from "./button.type";

interface Button extends ButtonBase, ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: Button) => {
  const { size, variant, ...restProps } = props;
  return (
    <button
      {...restProps}
      className={cn(st.button, {
        [st.sm]: size === "sm",
        [st.md]: size === "md" || !size,
        [st.lg]: size === "lg",

        [st.contained]: variant === "contained" || !variant,
        [st.outlined]: variant === "outlined",
      })}
    >
      {props.children}
    </button>
  );
};

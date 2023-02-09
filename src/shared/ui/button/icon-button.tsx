import { ButtonHTMLAttributes } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { ButtonBase } from "./button.type";

interface IconButton
  extends ButtonBase,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export const IconButton = (props: IconButton) => {
  const { size, variant, ...restProps } = props;
  return (
    <button
      {...restProps}
      className={cn(st.icon_button, {
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

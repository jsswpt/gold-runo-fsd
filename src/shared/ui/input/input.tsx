import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { InputBase } from "./input.type";

export const Input = (props: InputBase) => {
  const { size, fullWidth, alignIcon, icon, alignText, variant, ...restProps } =
    props;

  return (
    <div
      className={cn(st.input_wrapper, {
        fullWidth: fullWidth,
      })}
    >
      {icon && (
        <div
          className={cn(st.icon_wrapper, {
            [st.icon_start]: alignIcon === "start" || !alignIcon,
            [st.icon_end]: alignIcon === "end",
          })}
        >
          {icon}
        </div>
      )}

      <input
        {...restProps}
        className={cn(st.input, {
          [st.sm]: size === "sm",
          [st.md]: size === "md" || !size,
          [st.lg]: size === "lg",
          [st.text_start]: alignText === "start" || !alignText,
          [st.text_center]: alignText === "center",

          [st.outlined]: variant === "outlined" || !variant,
        })}
      />
    </div>
  );
};

import { ButtonHTMLAttributes } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { ButtonProps } from "./button.type";
import { returnClasses } from "./lib/return-classes";

export const Button = (props: ButtonProps) => {
  const { size, variant, color, colorOnHover, fullWidth, ...restProps } = props;
  return (
    <button
      {...restProps}
      className={cn(
        st.button,
        {
          [st.fullWidth]: props.fullWidth,
        },
        returnClasses({ color, size, variant, colorOnHover }),
        props.className
      )}
    >
      {props.children}
    </button>
  );
};

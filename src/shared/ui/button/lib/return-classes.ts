import { ButtonBase } from "../button.type";
import st from "../styles.module.scss";

export const returnClasses = (props: ButtonBase) => {
  const { color, size, variant } = props;
  return {
    [st.sm]: size === "sm",
    [st.md]: size === "md" || !size,
    [st.lg]: size === "lg",

    [st.outlined]: variant === "outlined",
    [st.contained]: variant === "contained" || !variant,

    [st.bg_primary]:
      color === "primary" && (variant === "contained" || !variant),
    [st.bg_warning]:
      color === "warning" && (variant === "contained" || !variant),
    [st.bg_danger]: color === "danger" && (variant === "contained" || !variant),
    [st.bg_success]:
      color === "success" && (variant === "contained" || !variant),
    [st.bg_default]:
      (color === "default" || !color) && (variant === "contained" || !variant),

    [st.border_default]:
      (color === "default" || !color) && variant === "outlined",
    [st.border_warning]: color === "warning" && variant === "outlined",
    [st.border_danger]: color === "danger" && variant === "outlined",
    [st.border_success]: color === "success" && variant === "outlined",
    [st.border_primary]: color === "primary" && variant === "outlined",

    [st.primary_on_hover]: props.colorOnHover === "primary",
    [st.danger_on_hover]: props.colorOnHover === "danger",
    [st.default_on_hover]: props.colorOnHover === "default",
    [st.warning_on_hover]: props.colorOnHover === "warning",
    [st.success_on_hover]: props.colorOnHover === "success",
  };
};

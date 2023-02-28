import { ButtonBase } from "../button.type";
import st from "../styles.module.scss";

export const returnClasses = (props: ButtonBase) => {
  const { color, size, variant, innerOnHover, colorOnHover, shadow } = props;
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
      color === "default" && (variant === "contained" || !variant),
    [st.bg_vanish]:
      (color === "vanish" || !color) && (variant === "contained" || !variant),

    [st.border_default]:
      (color === "default" || !color) && variant === "outlined",
    [st.border_warning]: color === "warning" && variant === "outlined",
    [st.border_danger]: color === "danger" && variant === "outlined",
    [st.border_success]: color === "success" && variant === "outlined",
    [st.border_primary]: color === "primary" && variant === "outlined",

    [st.primary_on_hover]: colorOnHover === "primary",
    [st.danger_on_hover]: colorOnHover === "danger",
    [st.default_on_hover]: colorOnHover === "default",
    [st.warning_on_hover]: colorOnHover === "warning",
    [st.success_on_hover]: colorOnHover === "success",

    [st.inner_primary_on_hover]: innerOnHover === "primary",
    [st.inner_danger_on_hover]: innerOnHover === "danger",
    [st.inner_default_on_hover]: innerOnHover === "default",
    [st.inner_warning_on_hover]: innerOnHover === "warning",
    [st.inner_success_on_hover]: innerOnHover === "success",

    [st.shadow]: shadow === "always",
    [st.shadow_on_hover]: shadow === "onHover" || !shadow,
    "action-inner": true,
  };
};

import { ButtonHTMLAttributes } from "react";
import { Colors, Size, Variants } from "shared/api/internal/index";

export type ButtonBase = {
  size?: Size;
  variant?: Variants;
  color?: Colors;
  colorOnHover?: Colors;
};

export interface ButtonProps
  extends ButtonBase,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  fullWidth?: boolean;
}

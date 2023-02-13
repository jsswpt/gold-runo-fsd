import { AlignIcon, Size, Variants } from "@/shared/api/internal";
import { InputHTMLAttributes } from "react";

/**
 *@size - изменяет размер инпута
 *@variant - изменяет варинт инпута
 *@icon - слот для иконки
 *@alignIcon - как расположить иконку
 *@alignText - как расположить текст
 *@fullWidth - ширина
 */

export interface InputBase {
  size?: Size;
  variant?: Variants;
  icon?: React.ReactNode;
  alignIcon?: AlignIcon;
  alignText?: "start" | "center";
  fullWidth?: boolean;
}

export interface InputProps
  extends InputBase,
    Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {}

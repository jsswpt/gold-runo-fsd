import { StaticImageData } from "next/image";

export type Size = "sm" | "md" | "lg";
export type Variants = "outlined" | "contained";
export type AlignIcon = "start" | "end";

export type Icon = {
  className?: any;
};

export type Colors =
  | "primary"
  | "success"
  | "danger"
  | "warning"
  | "default"
  | "vanish";

export type ColorObjT = {
  id: number;
  title: string;
  image_url: string | StaticImageData | null;
};

export type SizesObjT = { length: number; width: number; height: number };

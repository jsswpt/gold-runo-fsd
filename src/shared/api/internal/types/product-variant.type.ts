import { StaticImageData } from "next/image";
import { ColorObjT } from "./utils.type";

export type ProductVariantT = {
  id: number;
  colors: ColorObjT[];
  name: string;
  price: number;
  oldPrice: number | null;
  description: string;
  imgs: string[] | StaticImageData[];
};

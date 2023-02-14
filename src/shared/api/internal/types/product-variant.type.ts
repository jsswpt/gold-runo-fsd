import { ColorObjT } from "./utils.type";

export type ProductVariantT = {
  id: number;
  colors: ColorObjT[];
  name: string;
  price: number;
  oldPrice: number;
  description: string;
  imgs: string[];
};

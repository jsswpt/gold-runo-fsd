import { StaticImageData } from "next/image";
import { ColorObjT } from "./utils.type";

export type ProductVariantT = {
  id: number;
  colors: ColorObjT[];
  name: string;
  price: number;
  oldPrice: number | null;
  description: string;
  media: Array<MediaType>;
};

export type MediaType = {
  id: number;
  image_url: string | StaticImageData | null;
  video_url: string | StaticImageData | null;
};

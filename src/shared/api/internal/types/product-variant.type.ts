import { StaticImageData } from "next/image";
import { ColorObjT } from "./utils.type";

export type ProductT = {
  id: number;
  colors: ColorObjT[] | null;
  name: string;
  price: number;
  oldPrice: number | null;
  description: string | null;
  media: Array<MediaType> | null;
};

export type MediaType = {
  id: number;
  image_url: string | StaticImageData | null;
  video_url: string | StaticImageData | null;
};

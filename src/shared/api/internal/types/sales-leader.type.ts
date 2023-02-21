import { StaticImageData } from "next/image";
import { ColorObjT } from "./utils.type";

export type SalesLeader = {
  id: number;
  image_url: string | StaticImageData;
  title: string;
  price: number;
  colors: ColorObjT[];
};

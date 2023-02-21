import { StaticImageData } from "next/image";

export type BannerT = {
  id: number;
  image_url: string | StaticImageData | null;
  video_url: string | null;
};

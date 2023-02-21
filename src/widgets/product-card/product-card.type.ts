import { StaticImageData } from "next/image";

export type SwiperProps = {
  list: Array<{
    image_url: string | StaticImageData | null;
    video_url: string | null;
  }>;
};

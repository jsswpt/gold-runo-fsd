import { BannerT } from "../types/banner.type";
import BannerExample2 from "shared/assets/media/imgs/banner-example-2.jpg";
import BannerExample3 from "shared/assets/media/imgs/banner-example-3.jpg";

export const getBannerSlides = async (): Promise<BannerT[]> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([
        {
          id: 20,
          image_url: null,
          video_url:
            "http://127.0.0.1:8000/storage/images/558f4ac92b1e1781fe827353856b8a66.mp4",
        },
        {
          id: 26,
          image_url: BannerExample2,
          video_url: null,
        },
        {
          id: 21,
          image_url: BannerExample3,
          video_url: null,
        },
      ]);
    }, 0);
  });
};

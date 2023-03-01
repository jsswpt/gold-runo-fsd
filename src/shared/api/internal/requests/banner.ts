import { BannerT } from "../types/banner.type";
import BannerExample2 from "shared/assets/media/imgs/banner-example-2.jpg";
import BannerExample3 from "shared/assets/media/imgs/banner-example-3.jpg";
import FakeVideo from "shared/assets/media/imgs/fake-video.jpg";

export const getBannerSlides = async (): Promise<{ data: BannerT[] }> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        data: [
          {
            id: 20,
            image_url: FakeVideo,
            video_url: null,
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
        ],
      });
    }, 0);
  });
};

import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Button, Input } from "@/shared/ui";

import Some from "shared/assets/media/imgs/new-example.jpg";
import { ProductCard } from "@/widgets/product-card/product-card";

import VideoExample from "shared/assets/media/imgs/fake-video.png";
import PhotoExample from "shared/assets/media/imgs/new-example.jpg";

export const Empty = () => {
  return (
    <>
      <div style={{ width: "500px" }}>
        <ProductCard
          media={[
            { id: 1, image_url: PhotoExample, video_url: null },
            { id: 2, image_url: null, video_url: VideoExample },
            { id: 3, image_url: PhotoExample, video_url: null },
            { id: 4, image_url: null, video_url: VideoExample },
          ]}
          title="Модель дивана-1"
          description="Описание дивана-1 диван норм крутой шикарный ваще афигетттт"
          price={10000}
          priceT="min"
          alternatePrice={20000}
          sizes={{ height: 10, length: 20, width: 30 }}
        />
      </div>
    </>
  );
};

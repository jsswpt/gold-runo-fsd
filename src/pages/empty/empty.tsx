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
    <div style={{ minWidth: "60px", width: "100%", maxWidth: "500px" }}>
      <ProductCard
        price={10000}
        title="Диван мегашик базарю жиест уффф фывлыфвфыовфы"
        description="Дескрипшн (opisanie) description (описание) Дескрипшн (opisanie) description (описание) Дескрипшн (opisanie) description (описание)"
        priceT={"min"}
        alternatePrice={10000}
        href=""
        id={1}
        media={[
          { id: 1, image_url: PhotoExample, video_url: null },
          { id: 2, image_url: null, video_url: VideoExample },
        ]}
      />
    </div>
  );
};

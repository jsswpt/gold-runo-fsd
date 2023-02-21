import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Button, Input } from "@/shared/ui";
import { ProductCard } from "@/widgets";

import Some from "shared/assets/media/imgs/new-example.jpg";

export const Empty = () => {
  return (
    <>
      <div style={{ width: "500px" }}>
        <ProductCard
          media={[
            {
              image_url: null,
              video_url: "https://html5css.ru/html/mov_bbb.mp4",
            },
            { image_url: Some, video_url: null },
            {
              image_url: null,
              video_url: "https://html5css.ru/html/mov_bbb.mp4",
            },
            { image_url: Some, video_url: "" },
          ]}
        />
      </div>
    </>
  );
};

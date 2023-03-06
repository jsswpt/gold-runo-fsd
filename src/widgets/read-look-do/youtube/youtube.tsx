import {} from "react";

import st from "../styles.module.scss";
import cn from "classnames";
import { ThreeAndOneQuarterLayout } from "@/shared/ui";
import { ProductCard } from "@/widgets";

type YouTubeChunk = {};

export const YouTubeChunk = (props: YouTubeChunk) => {
  return (
    <ThreeAndOneQuarterLayout
      oneQuarterEl={
        <>
          <ProductCard
            href=""
            id={1}
            media={null}
            price={1}
            priceT="static"
            title="Ютуб вау"
          />
        </>
      }
      threeQuartersEl={<div style={{ background: "#b7b7b7" }}></div>}
    />
  );
};

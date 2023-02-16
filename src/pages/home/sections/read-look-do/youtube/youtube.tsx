import {} from "react";

import st from "../../../styles.module.scss";
import cn from "classnames";
import { ThreeAndOneQuarterLayout } from "@/shared/ui";
import { ProductCard } from "@/widgets";

type YouTubeChunk = {};

export const YouTubeChunk = (props: YouTubeChunk) => {
  return (
    <ThreeAndOneQuarterLayout
      blockAnimation={{
        exit: { opacity: 0 },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      }}
      oneQuarterEl={
        <ProductCard
          colors={[]}
          description="???"
          imgs={[]}
          id={1}
          name="Диван"
          price={35000}
          oldPrice={2000}
        />
      }
      threeQuartersEl={<div style={{ background: "#b7b7b7" }}></div>}
    />
  );
};

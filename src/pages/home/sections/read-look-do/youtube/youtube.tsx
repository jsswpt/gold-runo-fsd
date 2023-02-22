import {} from "react";

import st from "../../../styles.module.scss";
import cn from "classnames";
import { ThreeAndOneQuarterLayout } from "@/shared/ui";

type YouTubeChunk = {};

export const YouTubeChunk = (props: YouTubeChunk) => {
  return (
    <ThreeAndOneQuarterLayout
      blockAnimation={{
        exit: { opacity: 0 },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      }}
      oneQuarterEl={<></>}
      threeQuartersEl={<div style={{ background: "#b7b7b7" }}></div>}
    />
  );
};

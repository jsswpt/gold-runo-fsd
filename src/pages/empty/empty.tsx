import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";

export const Empty = () => {
  return (
    <div
      style={{
        minWidth: "60px",
        padding: "100px",
        width: "100%",
        maxWidth: "500px",
      }}
    ></div>
  );
};

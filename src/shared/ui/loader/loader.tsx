import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";

import { Size } from "shared/api/internal";

type Loader = {
  type?: "circular" | "flying";
  size?: Size;
};

export const Loader = (props: Loader) => {
  return <>loading...</>;
};

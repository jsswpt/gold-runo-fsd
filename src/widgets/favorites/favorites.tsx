import { memo } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { IconButton } from "@/shared/ui";
import { Favorite } from "@/shared/assets";

type Favorites = {};

export const Favorites = memo((props: Favorites) => {
  return (
    <IconButton innerOnHover="danger">
      <Favorite />
    </IconButton>
  );
});

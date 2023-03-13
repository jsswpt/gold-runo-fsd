import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { IconButton } from "@/shared/ui";
import { Burger } from "@/shared/assets";

type HeaderBurger = {};

export const HeaderBurger = (props: HeaderBurger) => {
  return (
    <>
      <IconButton>
        <Burger />
      </IconButton>
    </>
  );
};

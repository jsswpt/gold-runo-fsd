import {} from "react";

import cn from "classnames";
import st from "./styles.module.scss";
import Link from "next/link";

type BuyByOneTap = {};

export const BuyByOneTap = () => {
  return (
    <Link
      href=""
      onClick={() => {
        // логика
      }}
      className={cn("dark-selection", st.link)}
    >
      Купить в один клик
    </Link>
  );
};

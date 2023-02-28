import {} from "react";

import cn from "classnames";
import st from "./styles.module.scss";
import Link from "next/link";
import { Button } from "@/shared/ui";

type BuyByOneTap = {};

export const BuyByOneTap = () => {
  return (
    <Link href="" className={cn("link2", st.link)}>
      Купить в один клик
    </Link>
  );
};

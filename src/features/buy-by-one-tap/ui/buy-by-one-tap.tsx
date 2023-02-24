import {} from "react";

import cn from "classnames";
import st from "./styles.module.scss";
import Link from "next/link";
import { Button } from "@/shared/ui";

type BuyByOneTap = {};

export const BuyByOneTap = () => {
  return <Button fullWidth>Купить в один клик</Button>;
};

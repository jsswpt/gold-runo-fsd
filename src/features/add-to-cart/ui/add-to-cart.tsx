import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Button } from "@/shared/ui";

type AddToCart = {};

export const AddToCart = (props: AddToCart) => {
  return (
    <Button variant="outlined" color="primary">
      В корзину
    </Button>
  );
};

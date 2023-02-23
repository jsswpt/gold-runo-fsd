import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";

type ProductsGrid = {
  children: React.ReactNode;
};

export const ProductsGrid = (props: ProductsGrid) => {
  return <div className={st.products_grid}>{props.children}</div>;
};

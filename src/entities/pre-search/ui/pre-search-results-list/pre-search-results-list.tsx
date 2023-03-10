import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { useAppSelector } from "@/shared/lib";
import { PopupBlockLayout, ProductCard } from "@/shared/ui";

type PreSearchResultsList = {};

export const PreSearchResultsList = (props: PreSearchResultsList) => {
  const preSearch = useAppSelector((state) => state["entities/pre-search"]);

  return (
    <div className={st.search_results_wrap__results}>
      <div className={st.search_results_grid}>
        {preSearch.currentList!.list.map((item) => (
          <ProductCard
            href="some"
            priceT="static"
            id={item.id}
            media={item.media}
            price={item.price}
            title={item.name}
          />
        ))}
      </div>
    </div>
  );
};

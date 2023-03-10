import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { useAppSelector } from "@/shared/lib";
import { PreSearchResultsList } from "@/entities";
import { Loader, PopupBlockLayout } from "@/shared/ui";

type SearchPopupResponse = {};

export const SearchPopupResponse = (props: SearchPopupResponse) => {
  const preSearch = useAppSelector((state) => state["entities/pre-search"]);

  if (preSearch.currentList && !preSearch.isLoading) {
    return (
      <PopupBlockLayout
        title={`Результаты по запросу ${preSearch.currentList.query}`}
      >
        <PreSearchResultsList />
      </PopupBlockLayout>
    );
  } else if (preSearch.isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <PopupBlockLayout title="Популярные товары">Карточки</PopupBlockLayout>
  );
};

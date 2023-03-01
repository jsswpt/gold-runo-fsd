import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { FilterByColor, FilterByPrice } from "@/features";
import { Dropdown } from "@/shared/ui";

type FilterProducts = {};

export const FilterProducts = (props: FilterProducts) => {
  return (
    <div className={st.filter_products_wrapper}>
      <button className={cn(st.button, st.button_first, st.dark_background)}>
        Все фильтры
      </button>

      <Dropdown
        rounded="partly"
        enableStroke
        disablePadding
        align="bottom"
        justify="center"
        anchorEl={(isOpened) => (
          <button className={cn(st.button, isOpened && st.button__active)}>
            Цена
          </button>
        )}
      >
        <div style={{ padding: "32px 16px" }}>
          <FilterByPrice />
        </div>
      </Dropdown>
      <Dropdown
        rounded="partly"
        enableStroke
        disablePadding
        align="bottom"
        justify="center"
        anchorEl={(isOpened) => (
          <button className={cn(st.button, isOpened && st.button__active)}>
            Цвет
          </button>
        )}
      >
        <div style={{ padding: "32px 16px" }}>
          <FilterByColor />
        </div>
      </Dropdown>
      <Dropdown
        rounded="partly"
        enableStroke
        disablePadding
        align="bottom"
        justify="center"
        anchorEl={(isOpened) => (
          <button
            className={cn(
              st.button,
              st.button_last,
              isOpened && st.button__active,
              isOpened && st.button_last__active
            )}
          >
            Размер
          </button>
        )}
      >
        <div style={{ padding: "32px 16px" }}>По размеру</div>
      </Dropdown>
    </div>
  );
};

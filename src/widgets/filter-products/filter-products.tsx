import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import {
  FilterByColor,
  FilterDimensionsByHeight,
  FilterByPrice,
  FilterDimensionsByLength,
  FilterDimensionsByWidth,
} from "@/features";
import {
  Divider,
  Dropdown,
  FilterElementLayout,
  FilterPointLayout,
} from "@/shared/ui";
import { ChevronDown } from "@/shared/assets";

type FilterProducts = {};

export const FilterProducts = (props: FilterProducts) => {
  return (
    <div className={st.filter_products_wrapper}>
      <button
        className={cn(
          "dark-selection",
          st.button,
          st.button_first,
          st.dark_background
        )}
      >
        Все фильтры
      </button>

      <Dropdown
        rounded="partly"
        enableStroke
        disablePadding
        align="bottom"
        justify="center"
        anchorEl={(isOpened) => (
          <button
            className={cn(
              "dark-selection",
              st.button,
              isOpened && st.button__active
            )}
          >
            Цена
            <ChevronDown className={cn(st.icon, isOpened && st.icon__opened)} />
          </button>
        )}
      >
        <FilterElementLayout disableHeadline defaultOpen title="">
          <FilterPointLayout title="Выбрано">
            <FilterByPrice />
          </FilterPointLayout>
        </FilterElementLayout>
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
              "dark-selection",
              st.button,
              isOpened && st.button__active
            )}
          >
            Материал
            <ChevronDown className={cn(st.icon, isOpened && st.icon__opened)} />
          </button>
        )}
      >
        <FilterElementLayout title="Габариты">
          <FilterPointLayout title="Длина, см">
            <FilterDimensionsByLength />
          </FilterPointLayout>
          <Divider />
          <FilterPointLayout title="Ширина, см">
            <FilterDimensionsByWidth />
          </FilterPointLayout>
          <Divider />
          <FilterPointLayout title="Высота, см">
            <FilterDimensionsByHeight />
          </FilterPointLayout>
        </FilterElementLayout>
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
              "dark-selection",
              st.button,
              st.button_last,
              isOpened && st.button__active,
              isOpened && st.button_last__active
            )}
          >
            Размер
            <ChevronDown className={cn(st.icon, isOpened && st.icon__opened)} />
          </button>
        )}
      >
        <FilterElementLayout title="Габариты">
          <FilterPointLayout title="Длина, см">
            <FilterDimensionsByLength />
          </FilterPointLayout>
          <Divider />
          <FilterPointLayout title="Ширина, см">
            <FilterDimensionsByWidth />
          </FilterPointLayout>
          <Divider />
          <FilterPointLayout title="Высота, см">
            <FilterDimensionsByHeight />
          </FilterPointLayout>
        </FilterElementLayout>
        <Divider />
        <FilterElementLayout title="Габариты">
          <FilterPointLayout title="Длина, см">
            <FilterDimensionsByLength />
          </FilterPointLayout>
          <Divider />
          <FilterPointLayout title="Ширина, см">
            <FilterDimensionsByWidth />
          </FilterPointLayout>
          <Divider />
          <FilterPointLayout title="Высота, см">
            <FilterDimensionsByHeight />
          </FilterPointLayout>
        </FilterElementLayout>
      </Dropdown>
    </div>
  );
};

import { memo } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { IconButton, Input } from "@/shared/ui";
import { Search } from "@/shared/assets";
import { useScreen } from "@/shared/hooks";

export const SearchFurniture = memo(() => {
  const { currentScreen } = useScreen();
  return currentScreen === "xs" ? (
    <IconButton>
      <Search />
    </IconButton>
  ) : (
    <Input icon={<Search />} placeholder="Введите запрос" />
  );
});

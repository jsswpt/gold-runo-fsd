import { useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { IconButton, Input } from "..";
import { Search } from "@/shared/assets";
import { useScreen } from "@/shared/hooks";

type SearchPopupToggler = {
  children: (
    isFocused: boolean,
    setIsFocused: (arg: boolean) => void
  ) => React.ReactNode;
  baseValue?: string;
};

export const SearchPopupToggler = (props: SearchPopupToggler) => {
  const [isFocused, setIsFocused] = useState(false);

  const { currentScreen } = useScreen();

  return (
    <>
      {currentScreen === "xs" ||
      currentScreen === "sm" ||
      currentScreen === "md" ? (
        <IconButton onFocus={() => setIsFocused(true)}>
          <Search />
        </IconButton>
      ) : (
        <Input
          value={props.baseValue}
          onFocus={() => setIsFocused(true)}
          placeholder="Поиск по каталогу"
          icon={<Search />}
        />
      )}

      {props.children(isFocused, setIsFocused)}
    </>
  );
};

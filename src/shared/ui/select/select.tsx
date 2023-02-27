import React, { useEffect, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Dropdown } from "../dropdown/dropdown";
import { Button } from "../button/button";
import { ChevronLeft } from "@/shared/assets";
import { useRouter } from "next/router";

type Select = {
  baseTitle: string;
  children: React.ReactNode;
};

export const Select = (props: Select) => {
  const [title, setTitle] = useState("");

  const [value, setValue] = useState<any>(null);

  const handleClick = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const path = e.nativeEvent.composedPath() as HTMLElement[];
    const item = path.find((item) => item.id === "menu-item");

    if (item) {
      setValue(item.dataset.value);
      setTitle(item.dataset.title!);
    }
  };

  useEffect(() => {
    setTitle(props.baseTitle);
  }, []);

  return (
    <Dropdown
      triggerOn="click"
      justify="center"
      align="bottom"
      anchorEl={(isOpened) => (
        <div
          className={cn(
            st.select_wrapper,
            isOpened && st.select_wrapper__opened
          )}
        >
          <p className={cn("body1", st.select_title)}>{title}</p>
          <div
            className={cn(st.icon_wrapper, isOpened && st.icon_wrapper__opened)}
          >
            <ChevronLeft />
          </div>
        </div>
      )}
    >
      <ul onClick={handleClick}>{props.children}</ul>
    </Dropdown>
  );
};

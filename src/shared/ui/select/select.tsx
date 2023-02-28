import React, { useEffect, useRef, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Dropdown } from "../dropdown/dropdown";
import { ChevronLeft } from "@/shared/assets";
import { SelectItemBaseT, SelectT } from "./select.type";
import { SelectItem } from "./ui/select-item";
import { AnimatePresence, motion } from "framer-motion";

export const Select = (props: SelectT) => {
  const [activeItem, setActiveItem] = useState<SelectItemBaseT | null>(null);

  useEffect(() => {
    setActiveItem(props.options[0]);
  }, []);

  useEffect(() => {
    if (activeItem) {
      props.onSelect(activeItem.value);
    }
  }, [activeItem]);
  return (
    <Dropdown
      fullWidth={props.fullWidth}
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
          <p className={cn("action-inner", "dark-selection", st.select_title)}>
            {activeItem?.title}
          </p>
          <div
            className={cn(st.icon_wrapper, isOpened && st.icon_wrapper__opened)}
          >
            <ChevronLeft />
          </div>
        </div>
      )}
    >
      <ul>
        {props.options.map((item) => (
          <SelectItem
            onClick={() => setActiveItem(item)}
            active={item.value === activeItem?.value}
            title={item.title}
            value={item.value}
            key={item.title + item.value}
          />
        ))}
      </ul>
    </Dropdown>
  );
};

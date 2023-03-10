import { useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { IconButton, Input } from "..";
import { Close, Search } from "@/shared/assets";
import { useScreen } from "@/shared/hooks";
import { AnimatePresence, motion } from "framer-motion";

type SearchPopupToggler = {
  children: (
    isFocused: boolean,
    setIsFocused: (arg: boolean) => void
  ) => React.ReactNode;
  baseValue?: string;
  alternateEl: React.ReactNode;
  onClose?: () => void;
};

export const SearchPopupToggler = (props: SearchPopupToggler) => {
  const [isFocused, setIsFocused] = useState(false);

  const { currentScreen } = useScreen();

  const handleClose = () => {
    props.onClose && props.onClose();
    setIsFocused(false);
  };

  return (
    <>
      {currentScreen === "xs" ||
      currentScreen === "sm" ||
      currentScreen === "md" ? (
        <IconButton onFocus={() => setIsFocused(true)}>
          <Search />
        </IconButton>
      ) : (
        <AnimatePresence initial={false} mode="popLayout">
          {!isFocused ? (
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={st.actions_wrapper}
              key="1"
            >
              <Input
                value={props.baseValue}
                onFocus={() => setIsFocused(true)}
                placeholder="Поиск по каталогу"
                icon={<Search />}
              />
            </motion.div>
          ) : (
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={st.actions_wrapper}
              key="2"
            >
              {props.alternateEl}
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {props.children(isFocused, setIsFocused)}
    </>
  );
};

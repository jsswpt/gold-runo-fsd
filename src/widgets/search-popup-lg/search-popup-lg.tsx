import { useState } from "react";

import st from "./styles.module.scss";
import { Container, Divider, IconButton, Input, Modal } from "@/shared/ui";
import { Close, Search } from "@/shared/assets";
import { SearchFurniture } from "@/features";
import { AnimatePresence, motion } from "framer-motion";

type SearchPopup = {};

export const SearchPopupLg = (props: SearchPopup) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <AnimatePresence initial={false} mode="popLayout">
        {!isFocused ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.32 }}
            className={st.search_popup_wrap__actions}
            key="input"
          >
            <div className={st.search_popup_actions__item}>
              <Input
                onFocus={() => setIsFocused(true)}
                placeholder="Поиск по каталогу"
                icon={<Search />}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.32 }}
            className={st.search_popup_wrap__actions}
            key="form"
          >
            <div className={st.search_popup_actions__item}>
              <SearchFurniture />
            </div>
            <div className={st.search_popup_actions__item}>
              <IconButton onClick={() => setIsFocused(false)}>
                <Close />
              </IconButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isFocused && (
          <>
            <Container className={st.divider_container}>
              <motion.div
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.48,
                }}
              >
                <Divider />
              </motion.div>
            </Container>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "fit-content",
                opacity: 1,
              }}
              exit={{ height: 0, opacity: 1 }}
              transition={{
                duration: 0.48,
              }}
              className={st.search_popup_wrap__popup_wrapper}
            >
              <div className={st.search_popup_wrap__popup}>
                <Container>Search</Container>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

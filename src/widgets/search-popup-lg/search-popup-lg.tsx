import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { RecentRequestsList } from "@/entities";
import { Container, Divider, PopupBlockLayout } from "@/shared/ui";
import { SearchPopupResponse } from "../search-popup-response/search-popup-response";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

type SearchPopupLg = {
  isOpen: boolean;
};

export const SearchPopupLg = (props: SearchPopupLg) => {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      {props.isOpen && (
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
              <Container className={st.container}>
                <div className={st.search_popup_wrap__left}>
                  <PopupBlockLayout title="Вы недавно искали">
                    <RecentRequestsList
                      onClick={(arg) => {
                        router.replace(`/search?query=${arg.query}`);
                      }}
                    />
                  </PopupBlockLayout>
                  <PopupBlockLayout title="Популярные запросы"></PopupBlockLayout>
                </div>
                <div className={st.search_popup_wrap__right}>
                  <SearchPopupResponse />
                </div>
              </Container>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

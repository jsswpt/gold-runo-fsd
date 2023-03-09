import { useEffect, useState } from "react";

import st from "./styles.module.scss";
import {
  Chip,
  Container,
  Divider,
  IconButton,
  Input,
  Modal,
  PopupBlockLayout,
} from "@/shared/ui";
import { Close, Search } from "@/shared/assets";
import { SearchFurniture } from "@/features";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import {
  PreSearchResultsList,
  RecentRequestsList,
  SearchResults,
} from "@/entities";

type SearchPopup = {};

// Исправить кросс-импорт
export const SearchPopupLg = (props: SearchPopup) => {
  const [isFocused, setIsFocused] = useState(false);
  const [baseValue, setBaseValue] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (router.query.query) {
      const query = router.query.query as string;
      setBaseValue(query);
    } else {
      setBaseValue("");
    }
  }, [router]);

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
                value={baseValue}
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
              <SearchFurniture baseValue={baseValue} />
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
                <Container className={st.container}>
                  <div className={st.search_popup_wrap__left}>
                    <PopupBlockLayout title="Вы недавно искали">
                      <RecentRequestsList
                        onClick={(arg) =>
                          router.replace(`/search?query=${arg.query}`)
                        }
                      />
                    </PopupBlockLayout>
                    <PopupBlockLayout title="Популярные запросы"></PopupBlockLayout>
                  </div>
                  <div className={st.search_popup_wrap__right}>
                    <PopupBlockLayout title="Результаты по запросу: ыфвыфв">
                      <PreSearchResultsList />
                    </PopupBlockLayout>
                  </div>
                </Container>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

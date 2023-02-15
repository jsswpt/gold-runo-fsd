import { memo, useState } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { Container, SectionLayout } from "@/shared/ui";
import { SelectSet } from "@/features";
import { useAppSelector } from "@/shared/lib";
import { ProductCard } from "@/widgets";
import { AnimatePresence, motion } from "framer-motion";

type Sets = {};

export const Sets = memo((props: Sets) => {
  const currentSet = useAppSelector(
    (state) => state["entities/sets"].currentSet,
    (prev, next) => prev === next
  );
  return (
    <SectionLayout
      title="Комплекты"
      alignHeadlines="start"
      subElement={
        <div className={st.sets_wrap__select}>
          <SelectSet />
        </div>
      }
    >
      <div className={st.sets_wrap__presentation}>
        <div className={st.presentation_wrap__img}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.32 }}
              key={currentSet!.id}
              className={st.presentation_img_wrapper}
            >
              <div></div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div
          className={st.presentation_wrap__card}
          style={{ overflow: "hidden" }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <ProductCard
              animation={{
                initial: { y: "-100%", opacity: 0 },
                animate: { y: 0, opacity: 1 },
                exit: { y: "100%", opacity: 0 },
                transition: { duration: 0.32 },
              }}
              {...currentSet!}
              key={currentSet!.id}
            />
          </AnimatePresence>
        </div>
      </div>
    </SectionLayout>
  );
});

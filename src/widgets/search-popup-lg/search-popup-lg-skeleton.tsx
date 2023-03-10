import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { motion } from "framer-motion";

type SearchPopupLgSkeleton = {};

export const SearchPopupLgSkeleton = (props: SearchPopupLgSkeleton) => {
  return (
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
      <div className={cn(st.search_popup_wrap__popup, st.skeleton)}></div>
    </motion.div>
  );
};

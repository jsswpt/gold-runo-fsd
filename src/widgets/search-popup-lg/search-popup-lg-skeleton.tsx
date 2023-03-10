import { useEffect } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { motion } from "framer-motion";

type SearchPopupLgSkeleton = {};

export const SearchPopupLgSkeleton = (props: SearchPopupLgSkeleton) => {
  useEffect(() => {
    console.log("ya zagruzhen", new Date());

    return () => {
      console.log("ya udalen", new Date());
    };
  }, []);

  return (
    <motion.div
      initial={{ height: 0, opacity: 0, zIndex: 100000 }}
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
      <div className={cn(st.search_popup_wrap__popup, st.skeleton)}>asdsad</div>
    </motion.div>
  );
};

import { useEffect, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "@/shared/assets";

type FilterElementLayout = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  disableHeadline?: boolean;
};

export const FilterElementLayout = (props: FilterElementLayout) => {
  const [isOpen, setIsOpen] = useState(props.defaultOpen || false);

  useEffect(() => {
    if (props.defaultOpen) {
      setIsOpen(props.defaultOpen);
    }
  }, []);

  return (
    <div className={st.filter_element}>
      {!props.disableHeadline && (
        <div className={st.filter_wrap__headline}>
          <button
            onClick={() => setIsOpen((v) => !v)}
            className={cn("subtitle2", "dark-selection", st.title)}
          >
            {props.title}
            <ChevronDown className={cn(st.icon, isOpen && st.icon__opened)} />
          </button>
        </div>
      )}

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ height: "0px" }}
            animate={{ height: "fit-content" }}
            exit={{ height: "0px", overflowY: "hidden" }}
            transition={{ duration: 0.32 }}
            className={st.filter_wrap__body}
          >
            {props.children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

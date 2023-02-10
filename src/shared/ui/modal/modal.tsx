import ReactDOM from "react-dom";
import { useEffect, useMemo, useRef, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";

import { AnimatePresence, motion } from "framer-motion";
import { IconButton } from "../button/icon-button";

type Modal = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOn?: "missClick" | "buttonClick";
  bg?: "background" | "darken";
};

export const Modal = (props: Modal) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  useEffect(() => {
    const el = document.getElementById("modal_wrapper");
    if (mounted) {
      el!.className = st.opened;
    } else {
      el!.className = st.closed;
    }
  }, [mounted]);

  return mounted ? (
    ReactDOM.createPortal(
      <AnimatePresence mode="wait">
        {props.isOpen && (
          <>
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{
                duration: 0.88,
                type: "spring",
                bounce: 0,
                when: "afterChildren",
              }}
              id="modal"
              key="empty"
              className={cn(st.modal, {
                [st.bg_background]: props.bg === "background" || !props.bg,
                [st.bg_darken]: props.bg === "darken",
              })}
            >
              <div className={st.modal_children_wrapper}>{props.children}</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>,
      document.getElementById("modal_wrapper")!
    )
  ) : (
    <></>
  );
};

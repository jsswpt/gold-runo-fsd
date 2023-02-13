import ReactDOM from "react-dom";
import { useEffect, useMemo, useRef, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";

import { AnimatePresence, motion } from "framer-motion";
import { IconButton } from "../button/icon-button";
import { Close } from "@/shared/assets";

type Modal = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeButton?: boolean;
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
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.88,
              type: "spring",
              bounce: 0,
              when: "beforeChildren",
            }}
            id="modal"
            key="empty"
            onClick={() => {
              if (!props.closeButton) {
                props.onClose();
              }
            }}
            className={cn(st.modal, {
              [st.bg_background]: props.bg === "background" || !props.bg,
              [st.bg_darken]: props.bg === "darken",
            })}
          >
            <AnimatePresence mode="wait">
              {props.closeButton && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.32, delay: 0.8 }}
                  className={st.close_button_wrapper}
                >
                  <IconButton
                    onClick={props.onClose}
                    color="default"
                    variant="contained"
                  >
                    <Close />
                  </IconButton>
                </motion.div>
              )}
            </AnimatePresence>
            <div
              className={st.modal_children_wrapper}
              onClick={(e) => e.stopPropagation()}
            >
              {props.children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.getElementById("modal_wrapper")!
    )
  ) : (
    <></>
  );
};

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
};

export const Modal = (props: Modal) => {
  const [mounted, setMounted] = useState(false);

  const childrenRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (props.isOpen && props.closeOn !== "buttonClick") {
      document
        .getElementById("modal_wrapper")!
        .addEventListener("click", (evt) => {
          const path = evt.composedPath();

          if (!path.includes(childrenRef.current!)) {
            props.onClose();
          }
        });
    }
  }, [props.isOpen]);

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
              className={st.modal}
            >
              <motion.div
                initial={{
                  position: "absolute",
                  right: "10%",
                  top: "-10%",
                  zIndex: 2000,
                  opacity: 0,
                }}
                animate={{
                  right: "10%",
                  top: "10%",
                  opacity: 1,
                }}
                transition={{
                  duration: 0.32,
                  delay: 0.88,
                }}
              >
                <IconButton>X</IconButton>
              </motion.div>
              <div className={st.modal_children_wrapper} ref={childrenRef}>
                {props.children}
              </div>
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

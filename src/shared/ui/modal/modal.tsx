import ReactDOM from "react-dom";
import { useEffect, useMemo, useRef, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";

import { AnimatePresence, motion } from "framer-motion";

type Modal = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
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
    if (props.isOpen) {
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
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={
              props.isOpen
                ? { duration: 0.88, type: "spring" }
                : { duration: 0.56, type: "spring", bounce: 0 }
            }
            id="modal"
            className={st.modal}
          >
            <div className={st.modal_children_wrapper} ref={childrenRef}>
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

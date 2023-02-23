import ReactDOM from "react-dom";
import { useEffect, useMemo, useRef, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";

import { AnimatePresence, motion } from "framer-motion";

type Modal = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeButton?: boolean;
  bg?: "none" | "darken";
};

export const Modal = (props: Modal) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? (
    ReactDOM.createPortal(
      <AnimatePresence mode="wait">
        {props.isOpen && (
          <motion.div
            initial={{
              backdropFilter: props.bg === "darken" ? "brightness(1)" : "none",
            }}
            animate={{
              backdropFilter:
                props.bg === "darken" ? "brightness(0.5)" : "none",
            }}
            exit={{
              backdropFilter: props.bg === "darken" ? "brightness(1)" : "none",
            }}
            transition={{ duration: 0.64 }}
            className={cn(st.modal_bg)}
            id="modal"
          >
            {props.children}
          </motion.div>
        )}
      </AnimatePresence>,
      document.getElementById("modal_wrapper")!
    )
  ) : (
    <></>
  );
};

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
            initial={{ backdropFilter: " brightness(1) grayscale(0)" }}
            animate={{ backdropFilter: "brightness(0.5) grayscale(0.7)" }}
            exit={{ backdropFilter: "brightness(1) grayscale(0)" }}
            transition={{ duration: 0.64 }}
            className={cn(st.modal_bg, {
              [st.bg_none]: props.bg === "none" || !props.bg,
              [st.bg_darken]: props.bg === "darken",
            })}
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

import { useEffect, useId, useRef, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";

import { AnimatePresence, motion } from "framer-motion";

type Dropdown = {
  anchorEl: React.ReactNode;
  triggerOn?: "hover" | "click";
};

/**
 * не закончен
 */
export const Dropdown = (props: Dropdown) => {
  const [isOpened, setIsOpened] = useState(false);

  const labelRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const mouseMoveHandler = (evt: MouseEvent) => {
    const path = evt.composedPath();
    if (!path.includes(menuRef.current!) && !path.includes(labelRef.current!)) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    if (isOpened) {
      document.addEventListener("mousemove", mouseMoveHandler);
    } else {
      document.removeEventListener("mousemove", mouseMoveHandler);
    }
  }, [isOpened]);

  return (
    <>
      <div
        ref={labelRef}
        onMouseOver={() => {
          if (props.triggerOn === "hover") setIsOpened(true);
        }}
        onClick={() => {
          if (props.triggerOn === "click" || !props.triggerOn)
            setIsOpened((value) => !value);
        }}
      >
        {props.anchorEl}
      </div>
      <motion.div ref={menuRef} className={st.dropdown_wrapper}>
        <motion.div
          initial={{ maxHeight: 0 }}
          animate={
            isOpened
              ? {
                  opacity: 1,
                  maxHeight: "30rem",
                }
              : {
                  opacity: 0.2,
                  maxHeight: 0,
                }
          }
          transition={{ duration: 0.45, mass: 0 }}
          className={st.menu}
        >
          <div className={st.menu_inner}>menu</div>
        </motion.div>
      </motion.div>
    </>
  );
};

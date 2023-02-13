import { useEffect, useId, useRef, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";

import { AnimatePresence, motion } from "framer-motion";

type Dropdown = {
  anchorEl: React.ReactNode;
  triggerOn?: "hover" | "click";
  justify?: "end" | "start" | "center";
  align?: "top" | "center" | "bottom";
  children?: React.ReactNode;
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
    <div className={st.dropdown_wrapper}>
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
      <div
        ref={menuRef}
        className={cn(st.menu_wrapper, {
          [st.justify_center]: props.justify === "center" || !props.justify,
          [st.justify_start]: props.justify === "start",
          [st.justify_end]: props.justify === "end",

          [st.align_center]: props.align === "center" || !props.align,
          [st.align_top]: props.align === "top",
          [st.align_bottom]: props.align === "bottom",
        })}
      >
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
          className={cn(st.menu)}
        >
          {props.children}
          {/* <div className={st.menu_inner}>{props.children}</div> */}
        </motion.div>
      </div>
    </div>
  );
};

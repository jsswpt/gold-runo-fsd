import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Close } from "@/shared/assets";
import { motion } from "framer-motion";
import { IconButton } from "../button/icon-button";
import { Container } from "../container/container";
import { Modal } from "../modal/modal";

type QuarterScreenPopup = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position: "top" | "bottom" | "right" | "left";
};

// доработать
export const QuarterScreenPopup = ({
  isOpen,
  onClose,
  children,
  position,
}: QuarterScreenPopup) => {
  return (
    <Modal isOpen={isOpen} bg="darken" onClose={onClose}>
      <motion.div
        initial={{
          x: position === "left" ? "-100%" : position === "right" ? "100%" : 0,
          y: position === "top" ? "-100%" : position === "bottom" ? "100%" : 0,
        }}
        animate={{
          x: 0,
          y: 0,
        }}
        exit={{
          x: position === "left" ? "-100%" : position === "right" ? "100%" : 0,
          y: position === "top" ? "-100%" : position === "bottom" ? "100%" : 0,
        }}
        transition={{ duration: 0.64 }}
        className={cn(st.popup, {
          [st.left]: position === "left",
          [st.right]: position === "right",
          [st.bottom]: position === "bottom",
          [st.top]: position === "top",
          [st.vertical]: position === "left" || position === "right",
          [st.horizontal]: position === "top" || position === "bottom",
        })}
      >
        <div className={st.popup_wrap__navigation}>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </div>
        <div className={st.popup_wrap__body}>{children}</div>
      </motion.div>
    </Modal>
  );
};

import { useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Modal } from "../modal/modal";
import { AnimatePresence, motion } from "framer-motion";
import { IconButton } from "../button/icon-button";
import { Close } from "@/shared/assets";
import { Container } from "../container/container";

type FullScreenPopup = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

// сделать закрытие по свайпу
export const FullScreenPopup = ({
  isOpen,
  onClose,
  children,
}: FullScreenPopup) => {
  return (
    <Modal isOpen={isOpen} bg="none" onClose={onClose}>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.64 }}
        className={st.popup}
      >
        <div className={st.popup_wrap__navigation}>
          <Container className={st.popup_navigation_container}>
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          </Container>
        </div>
        <div className={st.popup_wrap__body}>
          <Container>{children}</Container>
        </div>
      </motion.div>
    </Modal>
  );
};

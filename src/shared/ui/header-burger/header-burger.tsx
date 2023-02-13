import { memo, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Burger } from "@/shared/assets";
import { IconButton } from "../button/icon-button";
import { Modal } from "../";
import { motion, AnimatePresence } from "framer-motion";

export const HeaderBurger = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div
        initial={{ scale: 0, rotate: 360 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 360, opacity: 0 }}
        transition={{ duration: 0.64 }}
      >
        <IconButton onClick={() => setIsOpen(true)} key="button">
          <Burger />
        </IconButton>
      </motion.div>
      <Modal
        isOpen={isOpen}
        closeButton
        onClose={() => setIsOpen(false)}
        key="modal"
      >
        <div>123</div>
      </Modal>
    </>
  );
});

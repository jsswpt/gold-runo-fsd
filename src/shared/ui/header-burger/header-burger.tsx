import { memo, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Burger } from "@/shared/assets";
import { IconButton } from "../button/icon-button";
import { FullScreenPopup, Modal } from "../";
import { motion, AnimatePresence } from "framer-motion";

export const HeaderBurger = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div>
        <IconButton onClick={() => setIsOpen(true)} key="button">
          <Burger />
        </IconButton>
      </motion.div>
      <FullScreenPopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        key="modal"
      >
        <div>123</div>
      </FullScreenPopup>
    </>
  );
});

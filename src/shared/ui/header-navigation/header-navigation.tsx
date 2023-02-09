import { useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import Link from "next/link";
import { useScreen } from "@/shared/hooks";
import { motion, AnimatePresence } from "framer-motion";
import { Modal } from "../";
import { Container } from "../container/container";

export const HeaderNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentScreen } = useScreen();

  return currentScreen === "xxl" || currentScreen === "xxxl" ? (
    <nav className={cn(st.header_wrap, st.header_wrap__nav)}>
      <ul className={st.header_nav__list}>
        <li className={st.header_nav__item}>
          <Link href="" className={cn("link1", st.header_nav__link)}>
            Товары
          </Link>
        </li>
        <li className={st.header_nav__item}>
          <Link href="" className={cn("link1", st.header_nav__link)}>
            Интерьеры
          </Link>
        </li>
        <li className={st.header_nav__item}>
          <Link href="" className={cn("link1", st.header_nav__link)}>
            Доставка и оплата
          </Link>
        </li>
        <li className={st.header_nav__item}>
          <Link href="" className={cn("link1", st.header_nav__link)}>
            О компании
          </Link>
        </li>
      </ul>
    </nav>
  ) : (
    <>
      <AnimatePresence mode="wait" initial>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => setIsOpen(true)}
            key="button-open"
          >
            =
          </motion.div>
        )}
      </AnimatePresence>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Container className={st.modal_container}>
          <div className={st.header_nav__item}>
            <Link href="">Товары</Link>
          </div>
          <div className={st.header_nav__item}>
            <Link href="">Интерьеры</Link>
          </div>
          <div className={st.header_nav__item}>
            <Link href="">Доставка и оплата</Link>
          </div>
          <div className={st.header_nav__item}>
            <Link href="">О компании</Link>
          </div>
        </Container>
      </Modal>
    </>
  );
};

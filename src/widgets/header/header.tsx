import { useEffect, useRef, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Container } from "@/shared/ui/container/container";
import Image from "next/image";

import Link from "next/link";
import { useScreen } from "@/shared/hooks";

import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import {
  Dropdown,
  HeaderBurger,
  HeaderNavList,
  HeaderSubNav,
  IconButton,
  Modal,
} from "@/shared/ui";
import { Cart, Favorite, Logo, Person } from "@/shared/assets";
import { SearchFurniture } from "@/features";
import { headerLinks } from "@/shared/api/internal/data";

/**Нужно отрефакторить:
 * сделать animatePresence, перенести bottom в ui
 */
export const Header = () => {
  const { currentScreen } = useScreen();

  return (
    <>
      <motion.header className={st.header}>
        <Container className={st.header_container}>
          <div className={cn(st.header_wrap, st.header_wrap__logo)}>
            <Link href="/" className={st.logo_img_wrapper}>
              <Logo />
            </Link>
          </div>
          <AnimatePresence mode="wait">
            {currentScreen === "xxl" || currentScreen === "xxxl" ? (
              <motion.nav
                animate={{ width: "fit-content", overflowY: "hidden" }}
                initial={{ width: 0, order: 1, overflow: "hidden" }}
                exit={{ width: 0 }}
                className={st.header_wrap__nav}
                key="list"
              >
                <HeaderNavList />
              </motion.nav>
            ) : (
              <motion.nav
                initial={{ order: 0, opacity: 1 }}
                exit={{ opacity: 0, overflow: "visible" }}
                className={st.header_wrap__nav}
                key="burger"
              >
                <HeaderBurger />
              </motion.nav>
            )}
          </AnimatePresence>
          <div className={cn(st.header_wrap, st.header_wrap__search)}>
            <SearchFurniture />
          </div>
          <AnimatePresence mode="wait">
            {currentScreen !== "xs" &&
              currentScreen !== "sm" &&
              currentScreen !== "md" && (
                <motion.div
                  initial={{ width: 0, opacity: 0, overflow: "hidden" }}
                  animate={{ width: "fit-content", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className={cn(st.header_wrap, st.header_wrap__info)}
                >
                  <div className={st.header_info_wrapper}>
                    <p className={cn("body2", "dark-selection", st.info_text)}>
                      г. Челябинск
                    </p>
                  </div>
                  <div className={st.header_info_wrapper}>
                    <a
                      href="tel:89000928086"
                      className={cn(
                        "body2",
                        "dark-selection",
                        st.info_text,
                        st.link
                      )}
                    >
                      8 (900) 092 80-86
                    </a>
                  </div>
                </motion.div>
              )}
          </AnimatePresence>

          <div className={cn(st.header_wrap, st.header_wrap__actions)}>
            <div className={st.header_actions_wrapper}>
              <IconButton>
                <Favorite />
              </IconButton>
            </div>
            <div className={st.header_actions_wrapper}>
              <IconButton>
                <Cart />
              </IconButton>
            </div>
            {currentScreen !== "xs" && (
              <div className={st.header_actions_wrapper}>
                <IconButton>
                  <Person />
                </IconButton>
              </div>
            )}
          </div>
        </Container>
      </motion.header>
      <HeaderSubNav navList={headerLinks} />
    </>
  );
};

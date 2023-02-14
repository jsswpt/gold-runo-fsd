import { useEffect, useRef, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Container } from "@/shared/ui/container/container";
import Image from "next/image";

import Link from "next/link";
import { useScreen } from "@/shared/hooks";

import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import {
  AuthorizeCard,
  Dropdown,
  HeaderBurger,
  HeaderNavList,
  HeaderSubNav,
  IconButton,
  Modal,
} from "@/shared/ui";
import { Cart, Favorite, Logo, Person } from "@/shared/assets";
import { SearchFurniture } from "@/features";
import { headerLinks } from "@/shared/api/internal/";

type Header = {
  actions: React.ReactNode;
};

export const Header = (props: Header) => {
  const { currentScreen } = useScreen();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <>
      <motion.header className={st.header}>
        <Container className={st.header_container}>
          <div className={cn(st.header_wrap, st.header_wrap__logo)}>
            <Link href="/" className={st.logo_img_wrapper}>
              <Logo />
            </Link>
          </div>
          <nav className={st.header_wrap__nav}>
            {currentScreen === "xxl" || currentScreen === "xxxl" ? (
              <HeaderNavList />
            ) : (
              <HeaderBurger />
            )}
          </nav>
          <div className={cn(st.header_wrap, st.header_wrap__search)}>
            <SearchFurniture />
          </div>
          {currentScreen !== "xs" &&
            currentScreen !== "sm" &&
            currentScreen !== "md" && (
              <div className={cn(st.header_wrap, st.header_wrap__info)}>
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
              </div>
            )}

          <div className={cn(st.header_wrap, st.header_wrap__actions)}>
            {props.actions}
          </div>
        </Container>
      </motion.header>
      <HeaderSubNav navList={headerLinks} />
    </>
  ) : (
    <></>
  );
};

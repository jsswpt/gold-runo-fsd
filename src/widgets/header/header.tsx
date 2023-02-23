import { useEffect, useRef, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Container } from "@/shared/ui/container/container";
import Image from "next/image";

import Link from "next/link";
import { useScreen } from "@/shared/hooks";

import { motion } from "framer-motion";
import {
  Divider,
  HeaderBurger,
  HeaderNavList,
  HeaderSubNav,
  IconButton,
  Input,
} from "@/shared/ui";

import { Logo, Search } from "@/shared/assets";
import { headerLinks } from "@/shared/api/internal/";
import { HeaderT } from "./header.type";

import { useAppSelector } from "@/shared/lib";

export const Header = (props: HeaderT) => {
  const { currentScreen } = useScreen();

  const [isMounted, setIsMounted] = useState(false);

  const categories = useAppSelector(
    (state) => state["entities/categories"].list
  ).map((item) => ({ ...item, href: `/category/${item.id}` }));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <>
      <motion.header className={st.header}>
        <Container className={st.header_container}>
          {currentScreen !== "xxl" &&
            currentScreen !== "xxxl" &&
            currentScreen !== "xl" && (
              <div className={st.actions_list}>
                <div className={st.header_action}>
                  <HeaderBurger />
                </div>
              </div>
            )}
          <div className={cn(st.header_wrap, st.header_wrap__logo)}>
            <Link href="/" className={st.logo_img_wrapper}>
              <Logo />
            </Link>
          </div>

          {(currentScreen === "xxxl" ||
            currentScreen === "xxl" ||
            currentScreen === "xl") && (
            <div className={st.header_wrap__nav}>
              <HeaderNavList />
            </div>
          )}

          {currentScreen !== "md" &&
            currentScreen !== "sm" &&
            currentScreen !== "xs" && (
              <div className={st.header_wrap__search}>{props.search}</div>
            )}

          {(currentScreen === "xxxl" || currentScreen === "xxl") && (
            <div className={cn(st.header_wrap, st.header_wrap__info)}>
              <div className={st.header_info_wrapper}>
                <p
                  className={cn(
                    "link1",
                    "dark-selection",
                    st.info_text,
                    st.link
                  )}
                >
                  г. Челябинск
                </p>
              </div>
              <div className={st.header_info_wrapper}>
                <a
                  href="tel:89000928086"
                  className={cn(
                    "link1",
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

          {currentScreen !== "xs" ? (
            <div
              className={cn(
                st.header_wrap,
                st.header_wrap__actions,
                st.actions_list
              )}
            >
              {props.actions.map((item, idx) => (
                <div key={idx} className={st.header_action}>
                  {item}
                </div>
              ))}
            </div>
          ) : (
            <div className={st.header_action}>{props.search}</div>
          )}
        </Container>
      </motion.header>

      {(currentScreen === "xxl" ||
        currentScreen === "xxxl" ||
        currentScreen === "xl") && <HeaderSubNav navList={categories} />}
    </>
  ) : (
    <></>
  );
};

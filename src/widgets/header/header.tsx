import { useEffect, useRef, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Container } from "@/shared/ui/container/container";
import Image from "next/image";

import Link from "next/link";
import { useScreen } from "@/shared/hooks";

import { motion } from "framer-motion";
import {
  HeaderBurger,
  HeaderNavList,
  HeaderSubNav,
  IconButton,
} from "@/shared/ui";
import { Logo, Search } from "@/shared/assets";
import { SearchFurniture } from "@/features";
import { headerLinks } from "@/shared/api/internal/";
import { HeaderT } from "./header.type";

export const HeaderChunk = (props: HeaderT) => {
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

          <div className={st.header_wrap__nav}>
            <HeaderNavList />
          </div>

          <div className={st.header_wrap__search}>
            <SearchFurniture />
          </div>

          <div className={cn(st.header_wrap, st.header_wrap__info)}>
            <div className={st.header_info_wrapper}>
              <p
                className={cn("link1", "dark-selection", st.info_text, st.link)}
              >
                г. Челябинск
              </p>
            </div>
            <div className={st.header_info_wrapper}>
              <a
                href="tel:89000928086"
                className={cn("link1", "dark-selection", st.info_text, st.link)}
              >
                8 (900) 092 80-86
              </a>
            </div>
          </div>

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
        </Container>
      </motion.header>
      <HeaderSubNav navList={headerLinks} />
    </>
  ) : (
    <></>
  );
};

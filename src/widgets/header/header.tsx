import { useEffect, useRef, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Container } from "@/shared/ui/container/container";
import Image from "next/image";

import Logo from "shared/assets/media/imgs/logo.png";
import Link from "next/link";
import { useScreen } from "@/shared/hooks";

import { motion, useAnimationControls } from "framer-motion";
import { InfoBlock } from "@/shared/ui";

export const Header = () => {
  const [isScrolledEnough, setIsScrolledEnough] = useState(false);

  const { currentScreen } = useScreen();

  const headerControls = useAnimationControls();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 70) {
        setIsScrolledEnough(true);
      } else {
        setIsScrolledEnough(false);
      }
    });
  }, []);

  useEffect(() => {
    if (isScrolledEnough) {
      console.log("rerendered enough");
    } else if (!isScrolledEnough) {
      console.log("rerendered not enough");
    }
  }, [isScrolledEnough]);

  return (
    <div className={st.top_wrapper}>
      <motion.div className={st.info_block}>
        <Container className={st.info_container}>Важная инфа</Container>
      </motion.div>
      <motion.header animate={headerControls} className={st.header}>
        <Container className={st.header_container}>
          <div className={cn(st.header_wrap, st.header_wrap__logo)}>
            <Link href="/" className={st.logo_img_wrapper}></Link>
          </div>
          <nav className={cn(st.header_wrap, st.header_wrap__nav)}>
            Навигация
          </nav>
          <div className={cn(st.header_wrap, st.header_wrap__search)}>
            Поиск
          </div>
          <div className={cn(st.header_wrap, st.header_wrap__info)}>Инфа</div>
          <div className={cn(st.header_wrap, st.header_wrap__actions)}>
            Экшоны
          </div>
        </Container>
      </motion.header>
      <div className={st.bottom_block}>
        <Container className={st.bottom_container}>что-то снизу</Container>
      </div>
    </div>
  );
};

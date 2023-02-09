import { useEffect, useRef, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Container } from "@/shared/ui/container/container";
import Image from "next/image";

import Logo from "shared/assets/media/imgs/logo.png";
import Link from "next/link";
import { useScreen } from "@/shared/hooks";

import { motion, useAnimationControls } from "framer-motion";

export const Header = () => {
  const [isScrolledEnough, setIsScrolledEnough] = useState(false);

  const { currentScreen } = useScreen();

  const topBlockControls = useAnimationControls();
  const headerControls = useAnimationControls();
  const bottomBlockControls = useAnimationControls();
  const bottomBlockInnerControls = useAnimationControls();

  const infoBlockRef = useRef<HTMLDivElement>(null);
  const bottomBlockRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 72) {
        setIsScrolledEnough(true);
      } else {
        setIsScrolledEnough(false);
      }
    });
  }, []);

  useEffect(() => {
    if (isScrolledEnough) {
      headerControls.start({ y: `-${infoBlockRef.current?.clientHeight}px` });
      bottomBlockControls.start({
        y: `-${
          bottomBlockRef.current!.clientHeight +
          infoBlockRef.current!.clientHeight
        }px`,
      });
      bottomBlockInnerControls.start({
        y: `-${bottomBlockRef.current!.clientHeight}px`,
      });
    } else if (!isScrolledEnough) {
      headerControls.start({ y: `0` });
      topBlockControls.start({ opacity: 1 });
      bottomBlockControls.start({
        opacity: 1,
        y: 0,
      });
      bottomBlockInnerControls.start({ y: "0" });
    }
  }, [isScrolledEnough]);

  return (
    <div className={st.top_wrapper}>
      <div className={st.top_wrapper__relative_wrapper}>
        <motion.div
          ref={infoBlockRef}
          animate={topBlockControls}
          className={st.info_block}
        >
          <Container className={st.info_container}>Важная инфа</Container>
        </motion.div>
        <motion.header
          ref={headerRef}
          animate={headerControls}
          transition={{ duration: 0.32, mass: 2 }}
          className={st.header}
        >
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
        <motion.div
          animate={bottomBlockControls}
          transition={{ delay: 0, duration: 0.32 }}
          ref={bottomBlockRef}
          className={st.bottom_block}
        >
          <Container className={st.bottom_container}>
            <motion.div
              animate={bottomBlockInnerControls}
              transition={{ delay: 0.32, duration: 0.56 }}
              className={st.bottom_wrap}
            >
              ??? |
            </motion.div>
            <motion.div
              animate={bottomBlockInnerControls}
              transition={{ delay: 0.32, duration: 0.56 }}
              className={st.bottom_wrap}
            >
              {" "}
              ??? |
            </motion.div>
            <motion.div
              animate={bottomBlockInnerControls}
              transition={{ delay: 0.32, duration: 0.56 }}
              className={st.bottom_wrap}
            >
              {" "}
              ??? |
            </motion.div>
            <motion.div
              animate={bottomBlockInnerControls}
              transition={{ delay: 0.32, duration: 0.56 }}
              className={st.bottom_wrap}
            >
              {" "}
              ???
            </motion.div>
          </Container>
        </motion.div>
      </div>
    </div>
  );
};

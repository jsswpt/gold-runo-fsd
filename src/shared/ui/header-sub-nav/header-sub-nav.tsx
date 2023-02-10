import { memo, useEffect, useRef } from "react";

import st from "./styles.module.scss";
import cn from "classnames";

import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import Link from "next/link";
import { Container } from "../container/container";
import { HeaderLinks } from "@/shared/api/internal/data";
import { useScreen } from "@/shared/hooks";

type HeaderSubNav = {
  navList: HeaderLinks[];
  isScrolledEnough: boolean;
};

export const HeaderSubNav = memo(
  ({ isScrolledEnough, navList }: HeaderSubNav) => {
    const bottomBlockControls = useAnimationControls();
    const subNavInnerControls = useAnimationControls();
    const bottomBlockRef = useRef<HTMLDivElement>(null);

    const { currentScreen } = useScreen();

    useEffect(() => {
      if (
        isScrolledEnough &&
        (currentScreen === "xxl" || currentScreen === "xxxl")
      ) {
        bottomBlockControls.start({
          y: `-${bottomBlockRef.current!.clientHeight}px`,
        });

        subNavInnerControls.start({
          y: `-${bottomBlockRef.current!.clientHeight}px`,
          opacity: 1,
        });
      } else if (!isScrolledEnough) {
        bottomBlockControls.start({
          y: 0,
        });

        subNavInnerControls.start({ y: "0" });
      }
    }, [isScrolledEnough, currentScreen]);

    return currentScreen === "xxl" || currentScreen === "xxxl" ? (
      <motion.nav
        ref={bottomBlockRef}
        initial={{ y: 0 }}
        animate={bottomBlockControls}
        transition={{ duration: 1 }}
        className={cn(st.sub_nav)}
      >
        <Container className={st.sub_nav_container}>
          <AnimatePresence mode="wait">
            <motion.ul
              animate={subNavInnerControls}
              transition={{ duration: 0.4, delay: 0.24 }}
              className={st.sub_nav__list}
            >
              {navList.map((item) => (
                <li className={st.sub_nav__item} key={item.href + item.title}>
                  <Link
                    href={item.href}
                    className={cn("link1", st.sub_nav__link)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </Container>
      </motion.nav>
    ) : (
      <></>
    );
  }
);

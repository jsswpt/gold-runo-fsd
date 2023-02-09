import { useEffect, useRef, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Container } from "@/shared/ui/container/container";
import Image from "next/image";

import Link from "next/link";
import { useScreen } from "@/shared/hooks";

import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { Dropdown, HeaderNavigation, IconButton, Modal } from "@/shared/ui";
import { Cart, Favorite, Logo, Person } from "@/shared/assets";
import { SearchFurniture } from "@/features";

/**Нужно отрефакторить:
 * сделать animatePresence, перенести bottom в ui
 */
export const Header = () => {
  const [isScrolledEnough, setIsScrolledEnough] = useState(false);

  const { currentScreen } = useScreen();

  const headerControls = useAnimationControls();
  const bottomBlockControls = useAnimationControls();
  const bottomBlockInnerControls = useAnimationControls();

  const headerRef = useRef<HTMLElement>(null);
  const bottomBlockRef = useRef<HTMLDivElement>(null);

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
      bottomBlockControls.start({
        y: `-${bottomBlockRef.current!.clientHeight}px`,
      });

      bottomBlockInnerControls.start({
        y: `-${bottomBlockRef.current!.clientHeight}px`,
      });
    } else if (!isScrolledEnough) {
      headerControls.start({ y: `0` });

      bottomBlockControls.start({
        y: 0,
      });

      bottomBlockInnerControls.start({ y: "0" });
    }
  }, [isScrolledEnough]);

  return (
    <>
      <motion.header
        ref={headerRef}
        animate={headerControls}
        transition={{ duration: 0.24, mass: 2 }}
        className={st.header}
      >
        <Container className={st.header_container}>
          <div className={cn(st.header_wrap, st.header_wrap__logo)}>
            <Link href="/" className={st.logo_img_wrapper}>
              <Logo />
            </Link>
          </div>
          <HeaderNavigation />
          <div className={cn(st.header_wrap, st.header_wrap__search)}>
            <SearchFurniture />
          </div>
          <div className={cn(st.header_wrap, st.header_wrap__info)}>
            <div className={st.header_info_wrapper}>
              <p className={cn("body2", st.info_text)}>г. Челябинск</p>
            </div>
            <div className={st.header_info_wrapper}>
              <a
                href="tel:89000928086"
                className={cn("body2", st.info_text, st.link)}
              >
                8 (900) 092 80-86
              </a>
            </div>
          </div>
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
            <div className={st.header_actions_wrapper}>
              <IconButton>
                <Person />
              </IconButton>
            </div>
          </div>
        </Container>
      </motion.header>

      <motion.div
        ref={bottomBlockRef}
        animate={bottomBlockControls}
        transition={{
          delay: 0,
          duration: isScrolledEnough ? 0.32 : 0.16,
          mass: 2,
        }}
        className={st.bottom_block}
      >
        <Container className={st.bottom_container}>
          <motion.nav
            animate={bottomBlockInnerControls}
            transition={{ duration: 0.4, delay: 0.24 }}
            className={cn(st.bottom_wrap, st.bottom_wrap__nav)}
          >
            <ul className={st.bottom_nav__list}>
              <AnimatePresence mode="wait">
                <li className={st.bottom_nav__item}>
                  <Link href="" className={cn("link1", st.header_nav__link)}>
                    Товары
                  </Link>
                </li>
                <li className={st.bottom_nav__item}>
                  <Link href="" className={cn("link1", st.header_nav__link)}>
                    Интерьер
                  </Link>
                </li>
                <li className={st.bottom_nav__item}>
                  <Link href="" className={cn("link1", st.header_nav__link)}>
                    Доставка и оплата
                  </Link>
                </li>
                <li className={st.bottom_nav__item}>
                  <Link href="" className={cn("link1", st.header_nav__link)}>
                    О компании
                  </Link>
                </li>
              </AnimatePresence>
            </ul>
          </motion.nav>
        </Container>
      </motion.div>
    </>
  );
};

import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { SubHeader } from "../sub-header/sub-header";
import { Container } from "../container/container";
import { Logo } from "@/shared/assets";
import Link from "next/link";
import { useScreen } from "@/shared/hooks";

type Header = {
  headerBurger?: React.ReactNode;
  actions?: React.ReactNode;
  search?: React.ReactNode;
};

export const Header = (props: Header) => {
  const { currentScreen } = useScreen();
  return (
    <>
      <header className={st.header}>
        <Container className={st.container}>
          {props.headerBurger &&
            (currentScreen === "xs" ||
              currentScreen === "sm" ||
              currentScreen === "md" ||
              currentScreen === "lg") && (
              <div className={st.header_wrap__burger}>{props.headerBurger}</div>
            )}
          <div className={st.header_wrap__logo}>
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          {(currentScreen === "xl" ||
            currentScreen === "xxl" ||
            currentScreen === "xxxl") && (
            <div className={st.header_wrap__segments}>
              <ul className={st.segments_list}>
                <li className={st.segment_item}>
                  <Link
                    href={"/products"}
                    className={cn("link1", "dark-selection", st.link)}
                  >
                    Каталог
                  </Link>
                </li>
                <li className={st.segment_item}>
                  <Link
                    href={"/interiors"}
                    className={cn("link1", "dark-selection", st.link)}
                  >
                    Интерьеры
                  </Link>
                </li>
                <li className={st.segment_item}>
                  <Link
                    href={"/delievery-and-payment"}
                    className={cn("link1", "dark-selection", st.link)}
                  >
                    Доставка и оплата
                  </Link>
                </li>
                <li className={st.segment_item}>
                  <Link
                    href={"/about"}
                    className={cn("link1", "dark-selection", st.link)}
                  >
                    О компании
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {props.search && (
            <div className={st.header_wrap__search}>{props.search}</div>
          )}
          {props.actions &&
            (currentScreen === "xxl" || currentScreen === "xxxl") && (
              <>
                <div className={st.header_wrap__info}>123</div>
              </>
            )}
          {props.actions &&
            currentScreen !== "xs" &&
            currentScreen !== "sm" && (
              <>
                <div className={st.header_wrap__actions}>{props.actions}</div>
              </>
            )}
        </Container>
      </header>
      <SubHeader />
    </>
  );
};

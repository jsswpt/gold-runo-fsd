import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Container } from "@/shared/ui/container/container";
import Image from "next/image";

import Logo from "shared/assets/media/imgs/logo.png";
import Link from "next/link";

export const Header = () => {
  return (
    <div className={st.top_wrapper}>
      <div className={st.info_block}>
        <Container className={st.info_container}>Важная инфа</Container>
      </div>
      <header className={st.header}>
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
      </header>
      <div className={st.bottom_block}>
        <Container className={st.bottom_container}>что-то снизу</Container>
      </div>
    </div>
  );
};

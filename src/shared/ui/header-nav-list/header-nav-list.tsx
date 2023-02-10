import { useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import Link from "next/link";
import { headerLinks } from "@/shared/api/internal/data";

export const HeaderNavList = () => {
  return (
    <ul className={st.header_nav__list}>
      {headerLinks.map((item) => (
        <li className={st.header_nav__item} key={`${item.href}-${item.title}`}>
          <Link
            href={item.href}
            className={cn("link1", "dark-selection", st.header_nav__link)}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

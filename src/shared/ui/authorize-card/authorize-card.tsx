import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import Link from "next/link";

type AuthorizeCard = {};

export const AuthorizeCard = (props: AuthorizeCard) => {
  return (
    <div className={st.authorize_card}>
      <div className={st.authorize_card_wrap__top}>
        <p className={cn("dark-selection", st.authorize_title)}>
          <Link href="/auth/" className={cn("dark-selection", st.link)}>
            Авторизируйтесь
          </Link>
          , чтобы получить доступ к личному кабинету
        </p>
      </div>
      <div className={st.authorize_card_wrap__body}>
        <p className={cn("dark-selection", st.authorize_text)}>
          <Link
            href={"/auth/sign-in"}
            className={cn("dark-selection", st.authorize_text, st.link)}
          >
            Вход
          </Link>{" "}
          или{" "}
          <Link
            href={"/auth/sign-up"}
            className={cn("dark-selection", st.authorize_text, st.link)}
          >
            регистрация
          </Link>
        </p>
      </div>
    </div>
  );
};

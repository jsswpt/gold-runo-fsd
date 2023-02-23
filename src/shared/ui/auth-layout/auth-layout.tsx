import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Logo } from "@/shared/assets";
import Link from "next/link";
import { Divider } from "../";

type AuthLayout = {
  form: React.ReactNode;
  title?: React.ReactNode;
  alternate?: React.ReactNode;
};

export const AuthLayout = (props: AuthLayout) => {
  return (
    <div className={st.auth_layout}>
      <div className={st.welcome_wrap}>
        <div className={st.welcome_wrap__logo}>
          <div className={st.logo_logo_wrapper}>
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
        </div>
        {props.title && (
          <h1 className={cn("subtitle1", "dark-selection", st.title)}>
            {props.title}
          </h1>
        )}
      </div>
      <div className={st.actions_wrap__form}>{props.form}</div>
      {props.alternate && (
        <>
          <Divider alignTitle="center" title="или" />
          {props.alternate}
        </>
      )}
    </div>
  );
};

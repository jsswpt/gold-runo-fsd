import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import Link from "next/link";

type AuthFormLayout = {
  inputs: React.ReactNode;
  buttons: React.ReactNode;
  alternateTitle: string;
  alternateLink: string;
  alternateLinkTitle: string;
};

export const AuthFormLayout = (props: AuthFormLayout) => {
  return (
    <div className={st.form_layout}>
      <div className={st.inputs_wrapper}>{props.inputs}</div>
      <div className={st.buttons_wrapper}>{props.buttons}</div>
    </div>
  );
};

import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";

type SignInByPoint = { children: React.ReactNode; className?: any };

export const SignInByPoint = (props: SignInByPoint) => {
  return (
    <button className={cn(st.point, props.className)}>{props.children}</button>
  );
};

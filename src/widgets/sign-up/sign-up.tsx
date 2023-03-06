import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { AuthLayout } from "@/shared/ui";
import { SignUp } from "@/features";
import Link from "next/link";

type SignUpWidget = {
  alternate?: React.ReactNode;
};

export const SignUpWidget = (props: SignUpWidget) => {
  return (
    <AuthLayout
      title={
        <>
          Создайте или{" "}
          <Link href={"/auth/sign-in"} className="dark-selection">
            войдите
          </Link>{" "}
          аккаунт, чтобы получить больше возможностей
        </>
      }
      form={<SignUp />}
      alternate={props.alternate}
    />
  );
};

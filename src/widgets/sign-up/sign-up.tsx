import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { AuthLayout } from "@/shared/ui";
import { SignUp } from "@/features";

type SignUpWidget = {};

export const SignUpWidget = (props: SignUpWidget) => {
  return (
    <AuthLayout
      title="Создайте аккаунт, чтобы получить больше возможностей"
      form={<SignUp />}
    />
  );
};

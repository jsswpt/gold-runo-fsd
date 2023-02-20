import { SignIn } from "@/features";
import { AuthLayout, SignInBy } from "@/shared/ui/";
import Link from "next/link";

export const SignInWidget = () => {
  return (
    <AuthLayout
      title={
        <>
          Войдите или <Link href={"/auth/sign-up"}>создайте</Link> аккаунт,
          чтобы получить больше возможностей
        </>
      }
      form={<SignIn />}
      alternate={<SignInBy />}
    />
  );
};

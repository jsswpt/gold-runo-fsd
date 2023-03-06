import { SignIn } from "@/features";
import { AuthLayout } from "@/shared/ui/";
import Link from "next/link";

type SignInWidget = {
  alternate?: React.ReactNode;
};

export const SignInWidget = (props: SignInWidget) => {
  return (
    <AuthLayout
      title={
        <>
          Войдите или{" "}
          <Link href={"/auth/sign-up"} className="dark-selection">
            создайте
          </Link>{" "}
          аккаунт, чтобы получить больше возможностей
        </>
      }
      form={<SignIn />}
      alternate={props.alternate}
    />
  );
};

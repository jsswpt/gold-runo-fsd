import { SignIn } from "@/features";
import { AuthLayout } from "@/shared/ui/";

export const SignInWidget = () => {
  return (
    <AuthLayout
      title="Войдите в аккаунт, чтобы получить больше возможностей"
      form={<SignIn />}
    />
  );
};

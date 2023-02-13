import { useForm, SubmitHandler } from "react-hook-form";

export type SignInT = {
  email: string;
  password: string;
};

export const useSignIn = () => {
  const form = useForm<SignInT>();

  const onSubmit: SubmitHandler<SignInT> = (data) => {
    // логика входа
  };

  return { ...form, onSubmit };
};

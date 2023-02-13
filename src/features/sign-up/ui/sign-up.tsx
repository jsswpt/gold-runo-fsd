import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { useForm, FieldValues } from "react-hook-form";
import { AuthFormLayout, Button, Input } from "@/shared/ui";
import { useSignUp } from "../model";

type SignUp = {};

export const SignUp = (props: SignUp) => {
  const model = useSignUp();
  return (
    <form
      onSubmit={model.handleSubmit((a, b) => {
        console.log(a, b);
      })}
    >
      <AuthFormLayout
        alternateTitle="Уже есть аккаунт?"
        alternateLinkTitle="Войти"
        alternateLink="/auth/sign-in"
        inputs={
          <>
            <Input
              fullWidth
              {...model.register("fullName")}
              placeholder="ФИО"
              type="text"
              autoFocus
            />
            <Input
              fullWidth
              {...model.register("email")}
              placeholder="Адрес эл. почты"
              type="email"
            />
            <Input
              fullWidth
              {...model.register("password")}
              placeholder="Пароль"
              type="password"
            />
            <Input
              fullWidth
              {...model.register("passwordConfirm")}
              placeholder="Подтверждение пароля"
              type="password"
            />
          </>
        }
        buttons={
          <Button color="primary" type="submit">
            Создать
          </Button>
        }
      />
    </form>
  );
};

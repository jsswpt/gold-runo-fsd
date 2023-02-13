import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { useForm, FieldValues } from "react-hook-form";
import { AuthFormLayout, Button, Input } from "@/shared/ui";
import { useSignIn } from "../model";

type SignIn = {};

export const SignIn = (props: SignIn) => {
  const model = useSignIn();
  return (
    <form
      onSubmit={model.handleSubmit((a, b) => {
        console.log(a, b);
      })}
    >
      <AuthFormLayout
        alternateTitle="Ещё нет аккаунта?"
        alternateLinkTitle="Создать"
        alternateLink="/auth/sign-up"
        buttons={
          <Button type="submit" color="primary">
            Войти
          </Button>
        }
        inputs={
          <>
            <Input
              fullWidth
              {...model.register("email")}
              placeholder="Адрес эл. почты"
              type="email"
              autoFocus
            />
            <Input
              fullWidth
              {...model.register("password")}
              placeholder="Пароль"
              type="password"
            />
          </>
        }
      />
    </form>
  );
};

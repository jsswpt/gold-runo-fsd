import {} from "react";

import st from "../styles.module.scss";
import cn from "classnames";
import { AuthLayout, Container } from "@/shared/ui";
import { SignIn, SignUp } from "@/features";

type Actions = {};

export const Actions = (props: Actions) => {
  return (
    <section className={st.section_actions}>
      <Container className={st.actions_container}>
        <AuthLayout
          title="Создайте аккаунт, чтобы получить больше возможностей"
          form={<SignUp />}
        />
      </Container>
    </section>
  );
};

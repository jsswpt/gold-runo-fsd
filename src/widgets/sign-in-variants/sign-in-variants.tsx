import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { SignInByVk, SignInByYandex } from "@/features";

type SignInVariants = {};

export const SignInVariants = (props: SignInVariants) => {
  return (
    <div className={st.sign_in_variants_wrapper}>
      <div className={st.sign_in_variants_item}>
        <SignInByVk />
      </div>
      <div className={st.sign_in_variants_item}>
        <SignInByYandex />
      </div>
      <div className={st.sign_in_variants_item}>
        <SignInByVk />
      </div>
      <div className={st.sign_in_variants_item}>
        <SignInByYandex />
      </div>
      <div className={st.sign_in_variants_item}>
        <SignInByVk />
      </div>
      <div className={st.sign_in_variants_item}>
        <SignInByYandex />
      </div>
    </div>
  );
};

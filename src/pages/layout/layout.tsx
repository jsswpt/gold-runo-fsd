import { useMemo } from "react";
import { CartPopup, Favorites, Header, Profile } from "@/widgets";

import { useScreen } from "@/shared/hooks";

import st from "./styles.module.scss";
import Link from "next/link";
import { Footer } from "@/shared/ui";

type Layout = {
  children: React.ReactNode;
};

export const Layout = (props: Layout) => {
  const { currentScreen } = useScreen();

  const actions = useMemo(() => {
    if (currentScreen !== "xs" && currentScreen !== "sm") {
      return [<Favorites />, <CartPopup />, <Profile />];
    }

    return [<Favorites />, <CartPopup />];
  }, [currentScreen]);
  return (
    <>
      <Header actions={actions} />

      <main className={st.main}>{props.children}</main>
      <Footer />
    </>
  );
};

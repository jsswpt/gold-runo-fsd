import { useMemo } from "react";
import { CartPopup, Favorites, Header, Profile } from "@/widgets";

import { useScreen } from "@/shared/hooks";

import st from "./styles.module.scss";
import Link from "next/link";
import { Footer } from "@/shared/ui";
import dynamic from "next/dynamic";

const SearchPopupXs = dynamic(
  () => import("widgets/index").then((m) => m.SearchPopupXs),
  {
    ssr: false,
    loading: (arg) => {
      return arg.isLoading ? <>loading...</> : null;
    },
  }
);

const SearchPopupLg = dynamic(
  () => import("widgets/index").then((m) => m.SearchPopupLg),
  {
    ssr: false,
    loading: (arg) => {
      return arg.isLoading ? <>loading...</> : null;
    },
  }
);

type Layout = {
  children: React.ReactNode;
};

export const Layout = (props: Layout) => {
  const { currentScreen } = useScreen();

  return (
    <>
      <Header
        actions={[<Favorites />, <CartPopup />, <Profile />]}
        search={
          currentScreen === "xs" ||
          currentScreen === "sm" ||
          currentScreen === "md" ? (
            <SearchPopupXs />
          ) : (
            <SearchPopupLg />
          )
        }
      />

      <main className={st.main}>{props.children}</main>
      <Footer />
    </>
  );
};

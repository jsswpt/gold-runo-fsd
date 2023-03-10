import { useMemo, useState } from "react";
import {
  CartPopup,
  Favorites,
  Header,
  Profile,
  SearchPopupLgSkeleton,
} from "@/widgets";

import { useScreen } from "@/shared/hooks";

import st from "./styles.module.scss";
import Link from "next/link";
import { Footer, SearchPopupToggler } from "@/shared/ui";
import dynamic from "next/dynamic";
import { useAppSelector } from "@/shared/lib";
import { AnimatePresence } from "framer-motion";

const SearchPopupXsContent = dynamic(
  () => import("widgets/index").then((m) => m.SearchPopupXsContent),
  {
    ssr: false,
    loading: (arg) => {
      return arg.isLoading ? <>skeleton</> : null;
    },
  }
);

const SearchPopupLg = dynamic(
  () => import("widgets/index").then((m) => m.SearchPopupLg),
  {
    ssr: false,
    loading: (arg) => {
      return arg.isLoading ? <SearchPopupLgSkeleton /> : null;
    },
  }
);

type Layout = {
  children: React.ReactNode;
};

export const Layout = (props: Layout) => {
  const { currentScreen } = useScreen();

  const state = useAppSelector((state) => state["entities/pre-search"]);

  return (
    <>
      <Header
        actions={[<Favorites />, <CartPopup />, <Profile />]}
        search={
          <SearchPopupToggler>
            {(isFocused, setIsFocused) => (
              <AnimatePresence mode="wait">
                {isFocused && <SearchPopupLg />}
              </AnimatePresence>
            )}
          </SearchPopupToggler>
        }
      />

      <main className={st.main}>{props.children}</main>
      <Footer />
    </>
  );
};

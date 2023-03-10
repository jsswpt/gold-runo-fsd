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
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { AnimatePresence } from "framer-motion";
import { PreSearchFurniture } from "@/features";
import { preSearchModel } from "@/entities";

const SearchPopupXs = dynamic(
  () => import("widgets/index").then((m) => m.SearchPopupXs),
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

  const dispatch = useAppDispatch();

  return (
    <>
      <Header
        actions={[<Favorites />, <CartPopup />, <Profile />]}
        search={
          <SearchPopupToggler
            onClose={() => {
              dispatch(preSearchModel.actions.removeCurrentList());
            }}
            baseValue={state.currentList?.query}
            alternateEl={
              <PreSearchFurniture baseValue={state.currentList?.query} />
            }
          >
            {(isFocused, setIsFocused) => (
              <>
                {currentScreen === "xs" ||
                currentScreen === "sm" ||
                currentScreen === "md" ? (
                  <SearchPopupXs
                    isOpen={isFocused}
                    onClose={() => {
                      setIsFocused(false);
                    }}
                  />
                ) : (
                  <SearchPopupLg isOpened={isFocused} />
                )}
              </>
            )}
          </SearchPopupToggler>
        }
      />

      <main className={st.main}>{props.children}</main>
      <Footer />
    </>
  );
};

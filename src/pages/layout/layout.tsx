import { useMemo, useState } from "react";
import {
  CartPopup,
  Favorites,
  HeaderBurger,
  Profile,
  SearchPopupLgSkeleton,
} from "@/widgets";

import { useScreen } from "@/shared/hooks";

import st from "./styles.module.scss";
import Link from "next/link";
import { Footer, Header, SearchPopupToggler } from "@/shared/ui";
import dynamic from "next/dynamic";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
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

  return (
    <>
      <Header
        headerBurger={<HeaderBurger />}
        search={
          <>
            {
              <SearchPopupToggler
                alternateEl={
                  <>
                    <PreSearchFurniture />
                  </>
                }
              >
                {(isFocused, setIsFocused) => (
                  <>
                    {currentScreen === "xs" || currentScreen === "sm" ? (
                      <SearchPopupXs
                        isOpen={isFocused}
                        onClose={() => setIsFocused(false)}
                      />
                    ) : (
                      <SearchPopupLg isOpen={isFocused} />
                    )}
                  </>
                )}
              </SearchPopupToggler>
            }
          </>
        }
        actions={
          <>
            <Favorites />
            <CartPopup />
            <Profile />
          </>
        }
      />
      <main className={st.main}>{props.children}</main>
      <Footer />
    </>
  );
};

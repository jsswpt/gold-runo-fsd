import { CartPopup } from "@/widgets";

import { AuthorizeCard, Dropdown, Footer, IconButton } from "@/shared/ui";
import { Cart, Person } from "@/shared/assets";
import { useScreen } from "@/shared/hooks";

import st from "./styles.module.scss";
import dynamic from "next/dynamic";
import { Suspense } from "react";

type Layout = {
  children: React.ReactNode;
};

const Header = dynamic(() =>
  import("widgets/header/header").then((mod) => mod.Header)
);

export const Layout = (props: Layout) => {
  const { currentScreen } = useScreen();
  return (
    <>
      <Suspense fallback="loading">
        <Header
          actions={
            <>
              <div className={st.header_actions_wrapper}>
                <CartPopup />
              </div>

              {currentScreen !== "xs" && (
                <div className={st.header_actions_wrapper}>
                  <Dropdown
                    justify="start"
                    align="bottom"
                    anchorEl={
                      <IconButton variant="contained" color="default">
                        <Person />
                      </IconButton>
                    }
                    triggerOn="click"
                  >
                    <AuthorizeCard />
                  </Dropdown>
                </div>
              )}
            </>
          }
        />
      </Suspense>

      <main className={st.main}>{props.children}</main>
      <Footer />
    </>
  );
};

import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Layout } from "@/pages";
import { ScreenContext } from "@/shared/contexts";
import { useEffect, useState } from "react";
import { ScreenTypes } from "@/shared/contexts/screen/screen.type";

import { Provider } from "react-redux";
import { store } from "../store/store";

const pxToRem = (width: number) => (width + 32) / 16;

export default function App({ Component, pageProps }: AppProps) {
  const [screen, setScreen] = useState<ScreenTypes>(null);

  // значения берутся из брейкпоинтов (shared/modules/breakpoints)
  const setCurrentScreen = (width: number) => {
    const widthRem = width / 16;

    if (widthRem >= pxToRem(1920 - 32)) {
      setScreen("xxxl");
    } else if (widthRem >= pxToRem(1640)) {
      setScreen("xxl");
    } else if (widthRem >= pxToRem(1200)) {
      setScreen("xl");
    } else if (widthRem >= pxToRem(992)) {
      setScreen("lg");
    } else if (widthRem >= pxToRem(768)) {
      setScreen("md");
    } else if (widthRem >= pxToRem(576)) {
      setScreen("sm");
    } else {
      setScreen("xs");
    }
  };

  useEffect(() => {
    setCurrentScreen(global.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setCurrentScreen(global.innerWidth)
    );
    return () =>
      window.removeEventListener("resize", () =>
        setCurrentScreen(global.innerWidth)
      );
  }, []);

  return (
    <Provider store={store}>
      <ScreenContext.Provider value={{ currentScreen: screen }}>
        <Component {...pageProps} />
      </ScreenContext.Provider>
    </Provider>
  );
}

import { Html, Head, Main, NextScript } from "next/document";
import { Provider } from "react-redux";
import { store } from "../store/store";

export default function Document() {
  return (
    <Html lang="ru">
      <Head />
      <body>
        <Main />
        <NextScript />
        <div id="modal_wrapper" className="modal_wrapper"></div>
      </body>
    </Html>
  );
}

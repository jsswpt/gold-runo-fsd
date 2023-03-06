import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";

type Yandex = {};

export const Yandex = (props: Yandex) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Yandex_Logo"
      x="0px"
      y="0px"
      viewBox="0 0 1080 1080"
      xmlSpace="preserve"
    >
      <circle fill="#fc3f1d" cx="540" cy="540" r="538.9" />
      <path
        fill="#fff"
        id="Glyph"
        d="M735,878.3H616.7V293.2H564c-96.6,0-147.2,48.3-147.2,120.4c0,81.8,34.9,119.7,107.1,168l59.5,40.1  l-171,256.5H285.2l153.9-229c-88.5-63.2-138.3-124.9-138.3-229c0-130.1,90.7-218.6,262.4-218.6h171v676.5H735z"
      />
    </svg>
  );
};

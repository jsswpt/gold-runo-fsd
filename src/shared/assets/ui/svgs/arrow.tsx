import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Icon } from "@/shared/api/internal";

export const Arrow = (props: Icon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="8"
      viewBox="0 0 36 8"
      fill="currentColor"
      {...props}
    >
      <path
        d="M35.3536 4.35355C35.5488 4.15829 35.5488 3.84171 35.3536 3.64645L32.1716 0.464466C31.9763 0.269204 31.6597 0.269204 31.4645 0.464466C31.2692 0.659728 31.2692 0.976311 31.4645 1.17157L34.2929 4L31.4645 6.82843C31.2692 7.02369 31.2692 7.34027 31.4645 7.53553C31.6597 7.7308 31.9763 7.7308 32.1716 7.53553L35.3536 4.35355ZM0 4.5H35V3.5H0V4.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

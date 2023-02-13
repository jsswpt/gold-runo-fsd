import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Icon } from "@/shared/api/internal";

type Chevron = {};

export const ChevronLeft = (props: Icon) => {
  return (
    <svg
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
      />
    </svg>
  );
};

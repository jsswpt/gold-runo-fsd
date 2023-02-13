import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Icon } from "@/shared/api/internal";

export const ChevronRight = (props: Icon) => {
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
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );
};

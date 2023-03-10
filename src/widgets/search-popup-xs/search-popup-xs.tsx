import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { QuarterScreenPopup } from "@/shared/ui";

type SearchPopupXs = {
  isOpen: boolean;
  onClose: () => void;
};

export const SearchPopupXs = (props: SearchPopupXs) => {
  return (
    <QuarterScreenPopup
      position="top"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      SearchPopupXs
    </QuarterScreenPopup>
  );
};

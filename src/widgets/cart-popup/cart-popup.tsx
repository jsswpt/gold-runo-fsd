import { useState, memo } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { IconButton } from "@/shared/ui";
import { Cart } from "@/shared/assets";
import { QuarterScreenPopup } from "@/shared/ui/quarter-screen-popup/quarter-screen-popup";

type CartPopup = {};

export const CartPopup = memo((props: CartPopup) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setIsOpen(true)}>
        <Cart />
      </IconButton>
      <QuarterScreenPopup
        position="right"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        content
      </QuarterScreenPopup>
    </>
  );
});

import { Search } from "@/shared/assets";
import { IconButton } from "@/shared/ui";
import { QuarterScreenPopup } from "@/shared/ui/quarter-screen-popup/quarter-screen-popup";
import { useState } from "react";

type SearchPopupXs = {};

export const SearchPopupXs = (props: SearchPopupXs) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <IconButton onFocus={() => setIsFocused(true)}>
        <Search />
      </IconButton>

      <QuarterScreenPopup
        position="top"
        isOpen={isFocused}
        onClose={() => setIsFocused(false)}
      >
        Попап мобайл
      </QuarterScreenPopup>
    </>
  );
};

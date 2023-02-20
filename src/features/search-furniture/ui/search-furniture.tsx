import { memo, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import {
  Container,
  FullScreenPopup,
  IconButton,
  Input,
  Modal,
} from "@/shared/ui";
import { Search } from "@/shared/assets";
import { useScreen } from "@/shared/hooks";
import { QuarterScreenPopup } from "@/shared/ui/quarter-screen-popup/quarter-screen-popup";

export const SearchFurniture = memo(() => {
  const [isOpened, setIsOpened] = useState(false);

  const { currentScreen } = useScreen();
  return (
    <>
      {currentScreen === "sm" ||
      currentScreen === "xs" ||
      currentScreen === "md" ? (
        <IconButton onClick={() => setIsOpened(true)}>
          <Search />
        </IconButton>
      ) : (
        <Input
          fullWidth
          onFocus={() => setIsOpened(true)}
          icon={<Search />}
          placeholder="Введите запрос"
        />
      )}
      <QuarterScreenPopup
        position="top"
        isOpen={isOpened}
        onClose={() => setIsOpened(false)}
      >
        <Container>
          <Input
            autoFocus
            icon={<Search />}
            placeholder="Введите запрос"
            fullWidth
          />
        </Container>
      </QuarterScreenPopup>
    </>
  );
});

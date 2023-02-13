import { memo, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Container, IconButton, Input, Modal } from "@/shared/ui";
import { Search } from "@/shared/assets";
import { useScreen } from "@/shared/hooks";

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
          onFocus={() => setIsOpened(true)}
          icon={<Search />}
          placeholder="Введите запрос"
        />
      )}
      <Modal closeButton isOpen={isOpened} onClose={() => setIsOpened(false)}>
        <Container>
          <Input
            autoFocus
            icon={<Search />}
            placeholder="Введите запрос"
            fullWidth
          />
        </Container>
      </Modal>
    </>
  );
});

import { memo, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import {
  Button,
  Container,
  FullScreenPopup,
  IconButton,
  Input,
  Modal,
} from "@/shared/ui";
import { useScreen } from "@/shared/hooks";
import { Search } from "@/shared/assets";

export const SearchFurniture = memo(() => {
  const [value, setValue] = useState("");
  return (
    <form>
      <div style={{ display: "flex", gap: "16px" }}>
        <Input
          onChange={(e) => setValue(e.currentTarget.value)}
          placeholder="Поиск по каталогу"
          icon={<Search />}
        />
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          colorOnHover="primary"
          disabled={value.length > 3 ? false : true}
        >
          Найти
        </Button>
      </div>
    </form>
  );
});

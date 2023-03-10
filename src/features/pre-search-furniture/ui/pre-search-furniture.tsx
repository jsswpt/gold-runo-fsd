import { FormEvent, useEffect, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { recentRequestsModel } from "@/entities";
import { useAppDispatch } from "@/shared/lib";
import { Input, Button } from "@/shared/ui";
import { usePreSearchFurniture } from "../model";
import { Search } from "@/shared/assets";
import { useScreen } from "@/shared/hooks";

type PreSearchFurniture = {
  baseValue?: string;
};

export const PreSearchFurniture = (props: PreSearchFurniture) => {
  const { handleSubmit, setValue, value } = usePreSearchFurniture({
    baseValue: props.baseValue || null,
  });
  const { currentScreen } = useScreen();

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", gap: "16px" }}>
        <Input
          autoFocus
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          placeholder="Поиск по каталогу"
          icon={currentScreen !== "md" && <Search />}
          className={st.input}
        />
        <Button
          type="submit"
          color="primary"
          disabled={value.length > 3 ? false : true}
        >
          Найти
        </Button>
      </div>
    </form>
  );
};

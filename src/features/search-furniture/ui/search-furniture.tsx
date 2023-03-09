import { FormEvent, memo, useEffect, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";

import { Button, Input } from "@/shared/ui";
import { Search } from "@/shared/assets";

import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "@/shared/lib";
import { preSearchModel, recentRequestsModel } from "@/entities";

type SearchFurniture = {
  baseValue?: string;
};

export const SearchFurniture = memo((props: SearchFurniture) => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(preSearchModel.actions.setQuery(value));

    dispatch(
      recentRequestsModel.actions.addRequest({
        id: uuidv4(),
        creationDate: new Date(),
        query: value,
      })
    );
  };

  useEffect(() => {
    if (props.baseValue) {
      setValue(props.baseValue);
    } else {
      setValue("");
    }
  }, [props.baseValue]);

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", gap: "16px" }}>
        <Input
          autoFocus
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          placeholder="Поиск по каталогу"
          icon={<Search />}
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
});

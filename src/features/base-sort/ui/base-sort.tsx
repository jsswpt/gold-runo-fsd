import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Select } from "@/shared/ui";

type BaseSort = {};

export const BaseSort = (props: BaseSort) => {
  return (
    <>
      {/* <select defaultValue={"default"}>
        <option disabled value="default">
          Сортировать по:
        </option>
        <option>По алфавиту а-я</option>
        <option>По алфавиту я-а</option>
        <option>По убиванию цены</option>
        <option>По возрастанию цены</option>
      </select> */}
      <Select baseTitle="asdsad">???</Select>
    </>
  );
};

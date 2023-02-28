import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Select, SelectItem } from "@/shared/ui";

type BaseSort = {};

export const BaseSort = (props: BaseSort) => {
  return (
    <>
      <Select
        fullWidth
        onSelect={(value) => {}}
        options={[
          { title: "По умолчанию", value: "default" },
          { title: "Самые популярные", value: "by-famous" },
          { title: "По возрастанию цены", value: "by-price-increment" },
          { title: "По убыванию цены", value: "by-price-decrement" },
        ]}
      />
    </>
  );
};

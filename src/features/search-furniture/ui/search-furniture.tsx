import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Input } from "@/shared/ui";
import { Search } from "@/shared/assets";

export const SearchFurniture = () => {
  return <Input icon={<Search />} placeholder="Введите запрос" />;
};

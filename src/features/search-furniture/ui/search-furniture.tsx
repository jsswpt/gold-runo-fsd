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
  return <></>;
});

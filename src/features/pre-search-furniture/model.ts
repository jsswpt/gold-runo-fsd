import { preSearchModel, recentRequestsModel } from "@/entities";
import { useAppDispatch } from "@/shared/lib";
import { v4 as uuid } from "uuid";
import { useState, FormEvent, useEffect } from "react";
import { ModelProps } from "./pre-search-furniture.type";

export const usePreSearchFurniture = (data: ModelProps) => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(preSearchModel.thunks.preSearchThunk({ query: value }));

    dispatch(
      recentRequestsModel.actions.addRequest({
        id: uuid(),
        creationDate: new Date(),
        query: value,
      })
    );
  };

  useEffect(() => {
    if (data.baseValue) {
      setValue(data.baseValue);
    } else {
      setValue("");
    }
  }, [data.baseValue]);

  return { value, setValue, handleSubmit };
};

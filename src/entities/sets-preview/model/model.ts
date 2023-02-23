import { InitialState } from "@/entities/sets-preview/sets.type";
import { ProductT } from "@/shared/api/internal";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import SetExample from "shared/assets/media/imgs/set-example.jpg";

const setsTemplate: ProductT[] = [
  {
    colors: [{ id: 2, title: "белый-123", image_url: "" }],
    description: "Описание-1",
    id: 1,
    media: null,
    name: "Комплект-1",
    oldPrice: 35000,
    price: 30000,
  },
  {
    colors: [{ id: 1, title: "Чёрный-123", image_url: "" }],
    description: "Описание-2",
    id: 2,
    media: null,

    name: "Комплект-2",
    oldPrice: 35000,
    price: 30000,
  },
];

const initialState: InitialState = {
  isLoading: false,
  currentSet: setsTemplate[0],
  setsForChoose: setsTemplate,
  setsList: [],
};

const PATH = "entities/sets";

const setsPreviewSlice = createSlice({
  initialState,
  name: PATH,
  reducers: {
    setCurrentSet: (state, action: PayloadAction<number>) => {
      const findedSet = state.setsForChoose.find(
        (item) => item.id === action.payload
      );

      state.currentSet = findedSet!;
    },
  },
});

const reducers = { [PATH]: setsPreviewSlice.reducer };
const actions = { ...setsPreviewSlice.actions };

export const setsPreview = {
  reducers,
  actions,
};

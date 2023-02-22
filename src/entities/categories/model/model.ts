import { createSlice } from "@reduxjs/toolkit";
import { CategoriesSliceT } from "../categories.type";

const PATH = "entities/categories";

const initialState: CategoriesSliceT = {
  list: [
    { id: 1, title: "Диваны" },
    { id: 2, title: "Кресла" },
    { id: 3, title: "Пуфики" },
    { id: 4, title: "Матрасы" },
  ],
};

const categoriesSlice = createSlice({
  name: PATH,
  initialState,
  reducers: {},
});

const actions = categoriesSlice.actions;

const reducers = { [PATH]: categoriesSlice.reducer };

export const categories = { actions, reducers };

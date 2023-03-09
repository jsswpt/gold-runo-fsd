import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "./pre-search.type";
import { PATH } from "./utils";

const initialState: InitialState = { list: [], query: null, isLoading: false };

const preSearchSlice = createSlice({
  name: PATH,
  initialState,
  reducers: {
    toggleLoading: () => {},
    setList: () => {},
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const actions = {
  setList: preSearchSlice.actions.setList,
  toggleLoading: preSearchSlice.actions.toggleLoading,
  setQuery: preSearchSlice.actions.setQuery,
};
export const reducers = { [PATH]: preSearchSlice.reducer };

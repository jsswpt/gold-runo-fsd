import { ProductT } from "@/shared/api/internal";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  InitialState,
  SearchResult,
  SetCurrentListProps,
} from "./pre-search.type";
import { PATH } from "./utils";
import { v4 as uuid } from "uuid";

const initialState: InitialState = {
  cachedResponses: [],
  isLoading: false,
  currentList: null,
  isFetched: false,
};

const preSearchSlice = createSlice({
  name: PATH,
  initialState,
  reducers: {
    toggleLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    toggleFetched: (state, action: PayloadAction<boolean>) => {
      state.isFetched = action.payload;
    },

    removeCurrentList: (state) => {
      state.currentList = null;
    },

    setCurrentList: (state, action: PayloadAction<SetCurrentListProps>) => {
      const temp: SearchResult = {
        id: uuid(),
        list: action.payload.list,
        query: action.payload.query,
      };

      if (state.currentList) {
        state.cachedResponses.push(temp);
      }

      state.currentList = temp;
    },
  },
});

export const actions = {
  toggleLoading: preSearchSlice.actions.toggleLoading,
  toggleFetched: preSearchSlice.actions.toggleFetched,
  setCurrentList: preSearchSlice.actions.setCurrentList,
  removeCurrentList: preSearchSlice.actions.removeCurrentList,
};
export const reducers = { [PATH]: preSearchSlice.reducer };

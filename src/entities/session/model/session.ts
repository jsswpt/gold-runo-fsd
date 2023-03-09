import { User } from "@/shared/api/internal";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "./session.type";
import { PATH } from "./utils";

const initialState: InitialState = {
  user: null,
  isLoading: false,
  isAuthed: false,
  isFetched: false,
};

const sessionSlice = createSlice({
  initialState,
  name: PATH,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    toggleLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    toggleAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuthed = action.payload;
    },
    toggleFetch: (state, action: PayloadAction<boolean>) => {
      state.isFetched = action.payload;
    },
  },
});

export const actions = {
  setUser: sessionSlice.actions.setUser,
  toggleLoading: sessionSlice.actions.toggleLoading,
  toggleAuth: sessionSlice.actions.toggleAuth,
  toggleFetch: sessionSlice.actions.toggleFetch,
};

export const reducers = { [PATH]: sessionSlice.reducer };

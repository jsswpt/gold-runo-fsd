import { createSlice } from "@reduxjs/toolkit";

const PATH = "entities/session";

const initialState = {};

const sessionSlice = createSlice({
  initialState,
  name: PATH,
  reducers: {},
});

const reducers = { [PATH]: sessionSlice.reducer };

export const session = {
  actions: {},
  reducers,
};

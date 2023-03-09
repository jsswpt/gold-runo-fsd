import { BannerT, SalesLeader } from "@/shared/api/internal";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../sales-leader.type";

const initialState: InitialState = {
  list: [],
};

const PATH = "entities/sales-leader";

const salesLeaderSlice = createSlice({
  initialState,
  name: PATH,
  reducers: {
    setList: (state, action: PayloadAction<SalesLeader[]>) => {
      state.list = action.payload;
    },
  },
});

const reducers = { [PATH]: salesLeaderSlice.reducer };
const actions = { ...salesLeaderSlice.actions };

export const salesLeader = {
  reducers,
  actions,
};

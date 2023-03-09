import { RecentRequest } from "@/shared/api/internal";
import { addLocalStorage, getLocalStorage } from "@/shared/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "./recent-requests.type";
import { PATH } from "./utils";

const initialState: InitialState = { list: [] };

const recentRequestsSlice = createSlice({
  initialState,
  name: PATH,
  reducers: {
    initRequests: (state) => {
      const requests = getLocalStorage("recent-requests");

      if (requests) {
        const typedRequests = JSON.parse(requests) as RecentRequest[];
        state.list = typedRequests;
      }
    },

    addRequest: (state, action: PayloadAction<RecentRequest>) => {
      const findedEl = state.list.find(
        (item) => item.query === action.payload.query
      );

      if (!findedEl) {
        state.list.unshift(action.payload);

        addLocalStorage("recent-requests", JSON.stringify(state.list));
      }
    },
  },
});

export const actions = {
  addRequest: recentRequestsSlice.actions.addRequest,
  initRequests: recentRequestsSlice.actions.initRequests,
};

export const reducers = {
  [PATH]: recentRequestsSlice.reducer,
};

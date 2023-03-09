import { configureStore } from "@reduxjs/toolkit";

import {
  setsPreview,
  banner,
  salesLeader,
  categories,
  sessionModel,
  recentRequestsModel,
} from "entities/";

export const store = configureStore({
  reducer: {
    ...setsPreview.reducers,
    ...banner.reducers,
    ...salesLeader.reducers,
    ...categories.reducers,
    ...sessionModel.reducers,
    ...recentRequestsModel.reducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

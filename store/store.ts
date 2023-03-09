import { configureStore } from "@reduxjs/toolkit";

import {
  setsPreview,
  banner,
  salesLeader,
  categories,
  sessionModel,
  recentRequestsModel,
  preSearchModel,
} from "entities/";

export const store = configureStore({
  reducer: {
    ...setsPreview.reducers,
    ...banner.reducers,
    ...salesLeader.reducers,
    ...categories.reducers,
    ...sessionModel.reducers,
    ...recentRequestsModel.reducers,
    ...preSearchModel.reducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

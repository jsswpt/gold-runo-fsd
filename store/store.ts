import { configureStore } from "@reduxjs/toolkit";

import {
  setsPreview,
  banner,
  salesLeader,
  categories,
  session,
} from "entities/";

export const store = configureStore({
  reducer: {
    ...setsPreview.reducers,
    ...banner.reducers,
    ...salesLeader.reducers,
    ...categories.reducers,
    ...session.reducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

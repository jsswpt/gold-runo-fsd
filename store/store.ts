import { configureStore } from "@reduxjs/toolkit";

import { setsPreview, banner, salesLeader } from "entities/";

export const store = configureStore({
  reducer: {
    ...setsPreview.reducers,
    ...banner.reducers,
    ...salesLeader.reducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

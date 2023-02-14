import { configureStore } from "@reduxjs/toolkit";

import { setsPreview } from "entities/";

export const store = configureStore({
  reducer: {
    ...setsPreview.reducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

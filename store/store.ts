import { configureStore } from "@reduxjs/toolkit";

import { setsPreview, banner } from "entities/";

export const store = configureStore({
  reducer: {
    ...setsPreview.reducers,
    ...banner.reducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

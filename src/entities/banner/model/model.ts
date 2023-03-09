import { BannerT } from "@/shared/api/internal";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../banner.type";

const initialState: InitialState = {
  slides: [],
};

const PATH = "entities/banner";

const bannerSlice = createSlice({
  initialState,
  name: PATH,
  reducers: {
    setSlides: (state, action: PayloadAction<BannerT[]>) => {
      state.slides = action.payload;
    },
  },
});

const reducers = { [PATH]: bannerSlice.reducer };
const actions = { ...bannerSlice.actions };

export const banner = {
  reducers,
  actions,
};

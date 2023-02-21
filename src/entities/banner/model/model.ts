import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BannerSliceT, BannerT } from "../banner.type";

const initialState: BannerSliceT = {
  slides: [],
};

const PATH = "entities/banner";

const BannerSlice = createSlice({
  initialState,
  name: PATH,
  reducers: {
    setSlides: (state, action: PayloadAction<BannerT[]>) => {
      state.slides = action.payload;
    },
  },
});

const reducers = { [PATH]: BannerSlice.reducer };
const actions = { ...BannerSlice.actions };

export const banner = {
  reducers,
  actions,
};

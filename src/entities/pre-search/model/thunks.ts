import { preSearchModel } from "@/entities";
import { searchFurniture } from "@/shared/api/internal";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { PreSearchThunkProps } from "./pre-search.type";
import { PATH } from "./utils";

const preSearchThunk = createAsyncThunk(
  PATH + "/preSearchThunk",
  async (data: PreSearchThunkProps, thunkAPI) => {
    thunkAPI.dispatch(preSearchModel.actions.toggleLoading(true));
    try {
      const resp = await searchFurniture({ query: data.query });
      thunkAPI.dispatch(
        preSearchModel.actions.setCurrentList({ list: resp, query: data.query })
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    } finally {
      thunkAPI.dispatch(preSearchModel.actions.toggleLoading(false));
      thunkAPI.dispatch(preSearchModel.actions.toggleFetched(true));
    }
  }
);

export const thunks = { preSearchThunk };

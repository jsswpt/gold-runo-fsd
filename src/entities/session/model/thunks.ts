import { getUser } from "@/shared/api/internal";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions } from "./session";
import { PATH } from "./utils";

const getSessionThunk = createAsyncThunk(
  PATH + "/getSessionThunk",
  async (_, ApiThunk) => {
    ApiThunk.dispatch(actions.toggleLoading(true));

    try {
      const user = await getUser();

      ApiThunk.dispatch(actions.setUser(user));

      ApiThunk.dispatch(actions.toggleAuth(true));

      return ApiThunk.fulfillWithValue(user);
    } catch (e) {
      return ApiThunk.rejectWithValue(e);
    } finally {
      ApiThunk.dispatch(actions.toggleFetch(true));
      ApiThunk.dispatch(actions.toggleLoading(false));
    }
  }
);

export const thunks = {
  getSessionThunk,
};

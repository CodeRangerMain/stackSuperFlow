import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance, key } from "../../shared/lib/axios";

export interface searchReduser {
  search: {
    isLoaded: boolean;
    questions: any;
  };
}

const initialState: searchReduser = {
  search: {
    isLoaded: false,
    questions: [],
  },
};

export const search = createAsyncThunk(
  "search/stringSearch ",
  async (question: string | undefined) => {
    return axiosInstance.get(
      `/questions?order=desc&sort=activity&key=${key}&site=stackoverflow`
    );
  }
);

export const searchReduser = createSlice({
  name: "search",
  initialState,
  reducers: {
    resetSearchState: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(search.pending, (state) => {
      state.search.isLoaded = false;
    });
    builder.addCase(search.fulfilled, (state, action) => {
      state.search.questions = action.payload;
      state.search.isLoaded = true;
    });
    builder.addCase(search.rejected, (state) => {
      state.search.isLoaded = false;
    });
  },
});
export const { resetSearchState } = searchReduser.actions;
export default searchReduser.reducer;

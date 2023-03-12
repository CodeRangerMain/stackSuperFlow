import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import searchReduser from "../models/Search/searchReduser";

export const store = configureStore({
  reducer: {
    search: searchReduser,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

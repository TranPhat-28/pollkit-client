import { configureStore } from "@reduxjs/toolkit";
import pollReducer from "./slices/pollSlice";

export const store = configureStore({
  reducer: {
    poll: pollReducer
  }
});

export type AppStore = typeof store;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

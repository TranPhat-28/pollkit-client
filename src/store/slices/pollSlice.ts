import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPollState } from "@/types";

const initialState: IPollState = {
  value: 0
};

export const pollSlice = createSlice({
  name: "poll",
  initialState,
  reducers: {
    incrementPoll: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementPoll: (state) => {
      state.value -= 1;
    }
  }
});

export const { incrementPoll, decrementPoll } = pollSlice.actions;
export default pollSlice.reducer;

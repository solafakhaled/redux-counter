import { createSlice } from "@reduxjs/toolkit";
const initState = {
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.value += 1;
    },
    decrease: (state, action) => {
      state.value -= 1;
    },
  },
});
export const counterAction = counterSlice.actions;
export default counterSlice.reducer;

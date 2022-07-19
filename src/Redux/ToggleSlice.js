import { createSlice } from "@reduxjs/toolkit";
const initState = {
  isToggleOn: true,
};

const ToggleSlice = createSlice({
  name: "toggle",
  initialState: initState,
  reducers: {
    toggleOn: (state, action) => {
      state.isToggleOn = false;
    },
    toggleOff: (state, action) => {
      state.isToggleOn = true;
    },
  },
});

export const toggleAction = ToggleSlice.actions;
export default ToggleSlice.reducer;

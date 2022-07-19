import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import ToggleSlice from "./ToggleSlice";
const store = configureStore({
  reducer: { counter: CounterSlice, toggle: ToggleSlice },
});
export default store;

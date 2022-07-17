import { configureStore } from "redux";

const counterReducer = (state = { value: 0 }, action) => {
  if (action.type === "increase") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "decrease") {
    return {
      ...state,
      value: state.value - 1,
    };
  }

  return state;
};

const store = configureStore(counterReducer);
export default store;

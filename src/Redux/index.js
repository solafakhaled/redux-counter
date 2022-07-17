import { createStore } from "redux";

const counterReducer = (state = { value: 0, toggle: true }, action) => {
  if (action.type === "increase") {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === "decrease") {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else if (action.type === "toggle") {
    return {
      ...state,
      toggle: !state.toggle,
    };
  }

  return state;
};

const store = createStore(counterReducer);
export default store;

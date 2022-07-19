import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "./Redux/CounterSlice";
import { toggleAction } from "./Redux/ToggleSlice";
function App() {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const { increase, decrease } = counterAction;
  const { toggleOff, toggleOn } = toggleAction;
  const isToggleOn = () => {
    return globalState.toggle.isToggleOn;
  };
  const toggleCounter = (status) => {
    if (status) {
      console.log(status);
      dispatch(toggleOn());
    } else {
      console.log(status);
      dispatch(toggleOff());
    }
  };

  const handleGlobalStateNegativeValue = (value) => {
    if (value < 0) {
      return "Negative";
    } else {
      return value;
    }
  };
  return (
    <div className="App">
      <h1>Hello Redux Basics</h1>
      {!isToggleOn() && (
        <div>
          <div className="counter">
            Counter:{handleGlobalStateNegativeValue(globalState.counter.value)}
          </div>
          <div>
            <button className="btn" onClick={() => dispatch(increase())}>
              increase +
            </button>
            <button className="btn" onClick={() => dispatch(decrease())}>
              decrease -
            </button>
          </div>
        </div>
      )}

      <div>
        <button className="btn" onClick={() => toggleCounter(isToggleOn())}>
          {isToggleOn() ? "Show" : "Hide"}
        </button>
      </div>
    </div>
  );
}

export default App;

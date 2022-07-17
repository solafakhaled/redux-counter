import "./App.css";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  const increase = () => {
    const action = { type: "increase", payload: 1 };
    dispatch(action);
  };
  const decrease = () => {
    const action = { type: "decrease", payload: 1 };
    dispatch(action);
  };
  const toggleCounter = () => {
    const action = { type: "toggle" };
    dispatch(action);
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
      {globalState.toggle && (
        <div>
          <div className="counter">
            Counter:{handleGlobalStateNegativeValue(globalState.value)}
          </div>
          <div>
            <button className="btn" onClick={increase}>
              increase +
            </button>
            <button className="btn" onClick={decrease}>
              decrease -
            </button>
          </div>
        </div>
      )}

      <div>
        <button className="btn" onClick={toggleCounter}>
          Hide/Show Counter Value
        </button>
      </div>
    </div>
  );
}

export default App;

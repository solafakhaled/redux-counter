import "./App.css";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const counterOperation = (type, payload) => {
    dispatch({ type, payload });
  };
  const toggleCounter = () => {
    dispatch({ type: "toggle" });
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
            <button
              className="btn"
              onClick={() => counterOperation("increase", 1)}
            >
              increase +
            </button>
            <button
              className="btn"
              onClick={() => counterOperation("decrease", 1)}
            >
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

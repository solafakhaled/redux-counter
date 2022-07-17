import "./App.css";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const state = useSelector((state) => state.value);
  const toggleState = useSelector((state) => state.toggle);
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
  return (
    <div className="App">
      <h1>Hello Redux Basics</h1>
      {toggleState && (
        <div>
          <div className="counter">Counter:{state}</div>
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

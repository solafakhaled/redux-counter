import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello Redux Basics</h1>
      <div className="counter">Counter:0</div>
      <div>
        <button className="btn">increase +</button>
        <button className="btn">decrease -</button>
      </div>
      <div>
        <button className="btn">Hide/Show Counter Value</button>
      </div>
    </div>
  );
}

export default App;

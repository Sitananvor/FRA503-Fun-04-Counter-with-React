import { useState } from "react";

import "./App.css";
import SexBox from "./components/SexBox";
import HistoryLog from "./components/HistoryLog";
import Stars from "./components/Stars";

function App() {
  const [manCount, setManCount] = useState(0);
  const [womanCount, setWomanCount] = useState(0);
  const [logs, setLogs] = useState([]);

  const handleUp = (setter) => setter((prev) => prev + 1);
  const handleDown = (setter) => setter((prev) => (prev > 0 ? prev - 1 : 0));

  const handleSave = () => {
    const timestamp = new Date().toString().split(" ").slice(0, 5).join(" ");
    const total = manCount + womanCount;
    const entry = `[ ${timestamp} ] : M:${manCount}, F:${womanCount}, T:${total}`;
    setLogs([entry, ...logs]);
  };
  const handleReset = () => {
    setManCount(0);
    setWomanCount(0);
    setLogs([]);
  };

  return (
    <div className="App">
      <Stars />
      <h1 className="App-header">Counter </h1>
      <div className="boxLayout">
        <SexBox
          title="Man"
          count={manCount}
          colorTitle="title-blue"
          onUp={() => handleUp(setManCount, manCount)}
          onDown={() => handleDown(setManCount, manCount)}
        />

        <SexBox
          title="Woman"
          count={womanCount}
          colorTitle="title-pink"
          onUp={() => handleUp(setWomanCount, womanCount)}
          onDown={() => handleDown(setWomanCount, womanCount)}
        />
      </div>
      <div className="buttonLayout">
        <button className="buttonMain" onClick={handleSave}>
          Save
        </button>
        <button className="buttonMain" onClick={handleReset}>
          Reset
        </button>
      </div>
      <HistoryLog logs={logs} />
    </div>
  );
}

export default App;

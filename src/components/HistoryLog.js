import "./HistoryLog.css"

export default function HistoryLog({ logs }) {
  return (
    <div className="displayLayout">
      <div className="logContainer">
        {logs.length > 0 && logs.map((log, index) => (
          <div key={index} className="logItem">
            {log}
          </div>
        ))}
      </div>
    </div>
  );
}
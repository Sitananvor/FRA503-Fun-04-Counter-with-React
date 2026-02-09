import "./SexBox.css"

export default function SexBox({
  title,
  count,
  onUp,
  onDown,
  colorTitle,
}) {
  return (
    <div className="counterBox">
      <h2 className={`title ${colorTitle}`}>{title}</h2>
      <div className="count">{count}</div>
      <div className="buttonGroup">
        <button className="buttonAction" onClick={onUp}>
          UP
        </button>
        <button className="buttonAction" onClick={onDown}>
          DOWN
        </button>
      </div>
    </div>
  );
}

import React from "react";

export default function History(props) {
  let style = props.show
    ? { height: "15.5em", padding: " 1.8em 1em", border: "0.3em solid #bdc3c7" }
    : { height: "0", padding: "0", border: "none" };

  return (
    <div className="history" style={style}>
      <span className="closeBtn" onClick={props.closeHistory}>
        Close
      </span>
      <ul>
        <li>Game 1 - 10 rolls</li>
        <li>Game 2 - 6 rolls</li>
        <li>Game 3 - 10 rolls</li>
        <li>Game 4 - 8 rolls</li>
        <li>Game 5 - 7 rolls</li>
        <li>Game 6 - 15 rolls</li>
        <li>Game 7 - 17 rolls</li>
      </ul>
    </div>
  );
}

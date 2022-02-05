import React from "react";
import { nanoid } from "nanoid";

export default function History(props) {
  let style = props.show
    ? { height: "15.5em", padding: " 1.8em 1em", border: "0.3em solid #bdc3c7" }
    : { height: "0", padding: "0", border: "none" };

  const list = props.rolls.map((roll, index) => (
    <li key={nanoid()}>
      Game {index + 1} - {roll} rolls
    </li>
  ));

  return (
    <div className="history" style={style}>
      <span className="closeBtn" onClick={props.closeHistory}>
        Close
      </span>
      <ol>
          {list}
      </ol>
    </div>
  );
}

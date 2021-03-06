import React from "react"

export default function Header(props) {

    const {count,leastRoll,highestRoll, gameRoll} = props;

    return (
      <header>

<div className="scoreboard">
          <h3>Total played</h3>
          <div className="number">{count || "" }</div>
        </div>

        <div className="scoreboard">
          <h3>Highest roll</h3>
          <div className="number">{highestRoll || ""}</div>
        </div>

        <div className="scoreboard">
          <h3>Your best</h3>
          <div className="number">{leastRoll || ""}</div>
        </div>

        <div className="scoreboard">
          <h3>Current rolls</h3>
          <div className="number">{gameRoll || ""}</div>
        </div>

      </header>
    );
  }
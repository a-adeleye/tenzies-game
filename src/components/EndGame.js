import React from "react"
import trophy from "../trophy.png"

export default function EndGame(props) {

    const style = props.tenzies ? {padding: "2em 1em", border: "0.7em solid #bdc3c7", height: "25em"} : {padding: "0", border: "none", height: "0"};

    return(
        <div className="tenzies" style={style}>
            <h1>Tenzies!!! 😋</h1>
            <img className="tenzies-trophy" src={trophy}/> 
            <button onClick={props.restart}>Restart Game</button>
        </div>

    )
} 
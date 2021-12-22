import React from 'react'
import "./head.scss";

export default function Head({setLoggined}) {
  
    return (
        <div className="head">
        <h1>ROCK, PAPER,SCISSORS</h1>
        <button onClick={()=>setLoggined(false)}>Exit</button>
      </div>
    )
}

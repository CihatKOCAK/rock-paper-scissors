import React from 'react'
import "./container.scss";

export default function Container() {
    return (
        <div className="container">
            <div className="top">
                <h2>PLAYER VS COMPUTER</h2>
                <button>CHANGE MODE</button>
            </div>
            <div className="bot">
                <div className="computer">
                    <p>COMPUTER</p>
                    <div className="mark">?</div>
                    <p>0 PT</p>
                </div>
                <div className="vs">vs</div>
                <div className="player">
                    <p>PLAYER</p>
                    <div className="mark">?</div>
                    <p>0 PT</p>
                </div>
            </div>
        </div>
    )
}

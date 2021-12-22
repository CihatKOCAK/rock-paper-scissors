import React from 'react'
import "./container.scss";

export default function Container({credit}) {
    return (
        <div className="container">
            <div className="top">
                <h2>Credit: {credit}</h2>
                <h2 className='p2'>PLAYER VS COMPUTER</h2>
                <button className='changeBtn'>CHANGE MODE</button>

            </div>
            <div className="bot">
                <div className="computer">
                    <p>COMPUTER</p>

                    <img src="assets/qmark.png" alt="" />

                    <p>0 PT</p>
                </div>
                <div className="vs">vs</div>
                <div className="player">
                    <p>PLAYER</p>

                    <img src="assets/qmark.png" alt="" />

                    <p>0 PT</p>
                </div>
            </div>
        </div>
    )
}

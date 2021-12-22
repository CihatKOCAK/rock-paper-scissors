import React, { useState } from 'react'
import "./container.scss";

export default function Container({ credit, userSelection, pcSelection }) {
   
    

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
                    <img src={pcSelection} alt="" />
                </div>
                <p className='score'>0 PT</p>
                <div className="vs">vs</div>
                <p className='score'>0 PT</p>
                <div className="player">
                    <p>PLAYER</p>
                   <img src={userSelection} alt="" />
                </div>
            </div>
        </div>
    )
}

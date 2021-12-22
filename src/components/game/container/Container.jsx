import React, { useState } from 'react'
import "./container.scss";

export default function Container({ data, setData, userSelection, pcSelection }) {
   
    

    return (
        <div className="container">
            <div className="top">
                <h2>Credit: {data[0].credit}</h2>
                <h2 className='p2'>PLAYER VS COMPUTER</h2>
                <button className='changeBtn'>CHANGE MODE</button>

            </div>
            <div className="bot">
                <div className="computer">
                    <p>PLAYER</p>
                    <img src={userSelection} alt="" />
                </div>
                <p className='score'>{data[0].userScore} PT</p>
                <div className="vs">vs</div>
                <p className='score'>{data[0].pcScore} PT</p>
                <div className="player">
                    <p>COMPUTER</p>
                   <img src={pcSelection} alt="" />
                </div>
            </div>
        </div>
    )
}

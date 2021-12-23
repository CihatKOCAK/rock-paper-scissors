import React from 'react'
import "./container.scss";

export default function Container({ data, setData, userSelection, pcSelection,winningSide}) {

    //data[0].mode ==> pve eve
    const changeMode = () => {
        let newData = [...data];
        newData[0].mode == "eve" ? newData[0].mode = "pve" : newData[0].mode = "eve";
        setData(newData);
    }


    return (
        <div className="container">
            <div className="top">
                <h2>Credit: {data[0].credit}</h2>

                <h2 className='p2'>{data[0].mode === "pve" ? "PLAYER VS COMPUTER" : "COMPUTER VS COMPUTER"}</h2>
                <button className='changeBtn' onClick={() => changeMode()}>CHANGE MODE</button>

            </div>
            <div className="bot">
                <div className="computer">
                    <p>{data[0].mode === "pve" ? "PLAYER" : "COMPUTER 1"}</p>
                    <img className={winningSide == "user"  ? 'winner': winningSide == "draw" ? "draw" : winningSide == "" ? "" : "lose" } src={userSelection} alt="" />
                </div>
                <p className='score'>{data[0].normalMode.userScore} PT</p>
                <div className="vs">vs</div>
                <p className='score'>{data[0].normalMode.pcScore} PT</p>
                <div className="player">
                    <p>{data[0].mode === "pve" ? "COMPUTER" : "COMPUTER 2"}</p>
                    <img className={winningSide == "pc"  ? 'winner': winningSide == "draw" ? "draw" : winningSide == "" ? "" : "lose"} src={pcSelection} alt="" />
                </div>
            </div>
        </div>
    )
}

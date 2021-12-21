import React from 'react'
import "./menu.scss";

export default function menu({ setSelectedMenu }) {

    return (
       
            <form className='actionForm' action="/game">
                <div className='containerMenu' >
                    <h1 className='menuH'>MENU</h1>
                    <hr />
                    <button onClick={() => setSelectedMenu("Resume")}><span>Resume</span></button>
                    <button onClick={() => setSelectedMenu("NewGame")}>New Game</button>
                    <button onClick={() => setSelectedMenu("Start")} >Start</button>
                </div >
            </form>
       
    )
}

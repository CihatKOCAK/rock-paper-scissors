import React, { useEffect, useState } from 'react'
import "./menu.scss";

export default function Menu({ setSelectedMenu }) {


    const [menuState, setMenuState] = useState([{
        resume: true,
        newgame: false,
        start: false,
    }]);

    

    useEffect(() => {
        localStorage.getItem('myData') ?  setMenuState([{
            resume: false,
            newgame: false,
            start: true
        }]) :  setMenuState([{
            resume: true,
            newgame: true,
            start: false
        }]);


    }, []);


    return (
        <div className='actionForm'>
            <div className='containerMenu' >
                <h1 className='menuH'>MENU</h1>
                <hr />
                <button disabled={menuState[0].resume} onClick={() => setSelectedMenu("Resume")}>Resume</button>
                <button disabled={menuState[0].newgame} onClick={() => setSelectedMenu('NewGame')}>New Game</button>
                <button disabled={menuState[0].start} onClick={() => setSelectedMenu("Start")}>Start</button>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import Select from 'react-select';
import "./bottom.scss";


export default function Bottom({ setUserSelection,userSelectDisabled, data, setData }) {
  const [raundPopUp, setRaundPopUp] = useState("");
  const [hltPopUp, setHltPopUp] = useState("");

  const hlt = [
    { value: 1, label: '1x' },
    { value: 5, label: '5x' },
    { value: 10, label: '10x' },
    { value: 20, label: '20x' },
    { value: 100, label: '100x' },
  ];
  const bot=[
    { value: 1, label: 'COMPUTER 1' },
    { value: 2, label: 'COMPUTER 2' },
  ]
  const watchMode=[
    { value: 1, label: 'Animate' },
    { value: 2, label: 'Console' },
  ]

  return (
    data[0].mode === "pve" ?
      (<div className="bottom">
        <div className="layer"><h2>CHOOSE A WEAPON</h2></div>
        <div className="selection">
          <img className='rock' onClick={ userSelectDisabled ? () => setUserSelection("assets/rock.png") : ""} src="assets/rock.png" alt="rock"></img>
          <img className='paper' onClick={() => setUserSelection("assets/paper.png")} src="assets/paper.png" alt="paper"></img>
          <img className='scissors' onClick={() => setUserSelection("assets/scissors.png")} src="assets/scissors.png" alt="scissors"></img>
        </div>
      </div>) :
      (
        <div className='bottomGambling'>
          <h1>Gambling Mode</h1>
          <div className="raundSelection">
            <p>Raund Number:</p>
            <input type="text" name='set' placeholder='1' />
            <p>x</p>
            <input type="text" name='raund' placeholder='3' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="popup" onClick={() => raundPopUp == "" ? setRaundPopUp("show") : setRaundPopUp("")}>i
              <span className={"popuptext " + raundPopUp} id="myPopup">Sets last 3 raunds and are repeated 1 times</span>
            </div>
          </div>
          <div className="hltBotSelection">
            <p>HLT:</p>
            <Select className="comboBox" options={hlt} onChange={(e) => console.log("HLT", e)} />
            <div className="popup" onClick={() => hltPopUp == "" ? setHltPopUp("show") : setHltPopUp("")}>i
              <span className={"popuptext " + hltPopUp} id="myPopup">Highly Leveraged Transaction</span>
            </div>
            <p>Bot Selection:</p>
            <Select className="comboBox" options={bot} onChange={(e) => console.log("Bot Selection", e)} />
          </div>

          <div className="creditAndMode">
            <p>Credit:</p>
            <input className='txtCredit' type="text" name='credit' placeholder='Amount' />
            <p>Watch Mode:</p>
            <Select className="comboBox" options={watchMode} onChange={(e) => console.log("Bot Selection", e)} />
          </div>
          <div className="start">
            <button>PLAY</button>
          </div>
        </div>
       
      )

  )
}

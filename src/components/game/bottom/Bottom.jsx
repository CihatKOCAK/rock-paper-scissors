import React, { useState } from 'react'
import Select from 'react-select';
import "./bottom.scss";
import { hlt, bot, watchMode } from "./SelectData"


export default function Bottom({ setUserSelection, userSelectDisabled, data, setData }) {
  const [raundPopUp, setRaundPopUp] = useState("");
  const [hltPopUp, setHltPopUp] = useState("");
  const [gamblingError, setGamblingError] = useState(false);
  const [requiredCredit, setRequiredCredit] = useState("");

  let sHlt, sBotSelection, sWatchMode, sRaundNumber, sRepeat;
  const getStartGambling = () => {

    if (!sRaundNumber) //default values
      sRaundNumber = 3;
    if (!sRepeat)
      sRepeat = 1;

    if (data[0].credit >= sHlt * sRepeat * 25) {
      setGamblingError(false)

      var newDataG = [...data];
      newDataG[0].gamblingMode.HLT = sHlt;
      newDataG[0].gamblingMode.raundNum = sRaundNumber;
      newDataG[0].gamblingMode.raundRepeat = sRepeat;
      newDataG[0].gamblingMode.botSelection = sBotSelection;
      newDataG[0].gamblingMode.watchMode = sWatchMode;
      setData(newDataG);

    }
    else {
      setGamblingError(true)
      setRequiredCredit(sHlt * sRepeat * 25);
    }

  }





  return (
    data[0].mode === "pve" ?
      (<div className="bottom">
        <div className="layer"><h2>CHOOSE A WEAPON</h2></div>
        <div className="selection">
          <img className='rock' onClick={userSelectDisabled ? () => setUserSelection("assets/rock.png") : ""} src="assets/rock.png" alt="rock"></img>
          <img className='paper' onClick={() => setUserSelection("assets/paper.png")} src="assets/paper.png" alt="paper"></img>
          <img className='scissors' onClick={() => setUserSelection("assets/scissors.png")} src="assets/scissors.png" alt="scissors"></img>
        </div>
      </div>) :
      (
        <div className='bottomGambling'>
          <h1>Gambling Mode</h1>
          <div className="raundSelection">
            <p>Raund Number:</p>
            <input type="text" name='set' placeholder='1' onChange={(e) => sRaundNumber = e.target.value} />
            <p>x</p>
            <input type="text" name='raund' placeholder='3' onChange={(e) => sRepeat = e.target.value} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="popup" onClick={() => raundPopUp === "" ? setRaundPopUp("show") : setRaundPopUp("")}>i
              <span className={"popuptext " + raundPopUp} id="myPopup">Sets last 3 raunds and are repeated 1 times</span>
            </div>
          </div>
          <div className="hltBotSelection">
            <p>HLT:</p>
            <Select className="comboBox" options={hlt} onChange={(e) => sHlt = e.value} />
            <div className="popup" onClick={() => hltPopUp === "" ? setHltPopUp("show") : setHltPopUp("")}>i
              <span className={"popuptext " + hltPopUp} id="myPopup">Highly Leveraged Transaction</span>
            </div>
            <p>Bot Selection:</p>
            <Select className="comboBox" options={bot} onChange={(e) => sBotSelection = e.value /*1 -> pc1 2 -> pc2 */} />
          </div>

          <div className="creditAndMode">
            <p>Watch Mode:</p>
            <Select className="comboBox" options={watchMode} onChange={(e) => sWatchMode = e.value} />
          </div>
          <div className="start">
            <div className="credit">
              <p className={(data[0].gamblingMode.creditEarned > 0) ? "profit" : "loss"}>Credit Earned:</p>
              <p className={(data[0].gamblingMode.creditEarned > 0) ? "profit" : "loss"}>{data[0].gamblingMode.creditEarned}</p>
            </div>
            <button onClick={() => getStartGambling()}>PLAY!</button>
          </div>
          <div className='error'><p className={gamblingError ? "" : 'hidden'}>{"You need " + requiredCredit + " credits to play!"}</p></div>
        </div>

      )

  )
}

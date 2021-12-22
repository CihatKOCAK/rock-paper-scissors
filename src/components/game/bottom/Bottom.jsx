import React from 'react'
import "./bottom.scss";


export default function Bottom({setUserSelection}) {
  return (
    <div className="bottom">
      <div className="layer"><h2>CHOOSE A WEAPON</h2></div>
      <div className="selection">
        <img className='rock' onClick={() => setUserSelection("assets/rock.png")} src="assets/rock.png" alt="rock"></img>
        <img className='paper' onClick={() => setUserSelection("assets/paper.png")} src="assets/paper.png" alt="paper"></img>
        <img className='scissors' onClick={() => setUserSelection("assets/scissors.png")} src="assets/scissors.png" alt="scissors"></img>
      </div>
    </div>

  )
}

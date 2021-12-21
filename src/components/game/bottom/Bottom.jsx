import React from 'react'
import "./bottom.scss";


export default function Bottom() {
  return (
    <div className="bottom">
      <div className="layer"><h2>CHOOSE A WEAPON</h2></div>
      <div className="selection">
        <img className='rock' src="assets/rock.png" alt="rock"></img>
        <img className='paper' src="assets/paper.png" alt="paper"></img>
        <img className='scissors' src="assets/scissors.png" alt="scissors"></img>
      </div>
    </div>

  )
}

import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development';
import Bottom from './bottom/Bottom';
import Container from './container/Container';
import "./game.scss";
import Head from './head/Head';

export default function Game({ setLoggined, data, setData }) {

  const [userSelection, setUserSelection] = useState("assets/qmark.png")
  
  const [pcSelection, setPcSelection] = useState("assets/qmark.png")


  useEffect(() => {
    var selections = ["assets/rock.png", "assets/paper.png", "assets/scissors.png"]
    setPcSelection(selections[Math.floor(Math.random() * selections.length)]);
  }, [userSelection])

  console.log("user :",userSelection, "pc :",pcSelection)
  return (
    <div className='game'>
      <Head setLoggined={setLoggined} />
      <br />
      <Container credit={data[0].credit} userSelection={userSelection} pcSelection={pcSelection} />
      <Bottom setUserSelection={setUserSelection} />
    </div>
  )
}

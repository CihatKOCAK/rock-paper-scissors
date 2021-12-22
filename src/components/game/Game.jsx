import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development';
import Bottom from './bottom/Bottom';
import Container from './container/Container';
import "./game.scss";
import Head from './head/Head';

export default function Game({ setLoggined, data, setData }) {

  const qMarkPath = "assets/qmark.png";
  const [userSelection, setUserSelection] = useState(qMarkPath)
  const [pcSelection, setPcSelection] = useState(qMarkPath)


  const selectionReset = () => {
    setTimeout(() => {
      setUserSelection(qMarkPath);
      setPcSelection(qMarkPath);
    }, 2000);

  };


  useEffect(() => {
    if ((userSelection === qMarkPath) === false) {
      var selections = ["assets/rock.png", "assets/paper.png", "assets/scissors.png"]
      setPcSelection(selections[Math.floor(Math.random() * selections.length)]);
    }
  }, [userSelection])


  useEffect(() => {

    if (selectionDialer(userSelection) === "rock") {
      if (selectionDialer(pcSelection) === "paper") {
        var newData = [...data];
        newData[0].pcScore++;
        setData(newData);
        selectionReset();

      }
      else if (selectionDialer(pcSelection) === "scissors") {
        var newData = [...data];
        newData[0].userScore++;
        setData(newData);
        selectionReset();
      }
      else
        selectionReset();
    }
    else if (selectionDialer(userSelection) === "paper") {
      if (selectionDialer(pcSelection) === "scissors") {
        var newData = [...data];
        newData[0].pcScore++;
        setData(newData);
        selectionReset();

      }
      else if (selectionDialer(pcSelection) === "rock") {
        var newData = [...data];
        newData[0].userScore++;
        setData(newData);
        selectionReset();
      }
      else
        selectionReset();
    }
    else if (selectionDialer(userSelection) === "scissors") {
      if (selectionDialer(pcSelection) === "rock") {
        var newData = [...data];
        newData[0].pcScore++;
        setData(newData);
        selectionReset();

      }
      else if (selectionDialer(pcSelection) === "paper") {
        var newData = [...data];
        newData[0].userScore++;
        setData(newData);
        selectionReset();
      }
      else
        selectionReset();
    }

  }, [pcSelection])

  const selectionDialer = (s) => {
    var v1 = s.split('/');
    var v2 = v1[1].split('.');
    var selection = v2[0];
    return selection;
  }



  return (
    <div className='game'>
      <Head setLoggined={setLoggined} />
      <br />
      <Container
        data={data}
        setData={setData}
        userSelection={userSelection}
        pcSelection={pcSelection}
      />
      <Bottom setUserSelection={setUserSelection} />
    </div>
  )
}

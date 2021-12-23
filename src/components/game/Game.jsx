import React, { useEffect, useState } from 'react'
import Bottom from './bottom/Bottom';
import Container from './container/Container';
import "./game.scss";
import Head from './head/Head';

export default function Game({ setLoggined, data, setData }) {

  const qMarkPath = "assets/qmark.png";
  const [userSelection, setUserSelection] = useState(qMarkPath)
  const [pcSelection, setPcSelection] = useState(qMarkPath)
  const [winningSide, setWinningSide] = useState(""); //for sign frame
  const [userSelectDisabled, setUserSelectDisabled] = useState(true); //for no new election until the delay is over

  const selectionReset = () => {
    setTimeout(() => {
      setUserSelection(qMarkPath);
      setPcSelection(qMarkPath);
      setWinningSide("");
      setUserSelectDisabled(true);
    }, 2000);

  }; //line of code that selection reset and delay


  useEffect(() => {
    if ((userSelection === qMarkPath) === false) {
      var selections = ["assets/rock.png", "assets/paper.png", "assets/scissors.png"]
      setPcSelection(selections[Math.floor(Math.random() * selections.length)]);
    }
  }, [userSelection]) //line of code that makes the pc choose randomly based on the user


  useEffect(() => {
    var newData = [...data];
    setUserSelectDisabled(false);
    if (data[0].normalMode.pcScore < 3 && data[0].normalMode.userScore < 3) {
      if (selectionDialer(userSelection) === "rock") {
        if (selectionDialer(pcSelection) === "paper") {
          newData[0].normalMode.pcScore++;
          setWinningSide("pc")
          selectionReset();

        }
        else if (selectionDialer(pcSelection) === "scissors") {
          newData[0].normalMode.userScore++;
          setWinningSide("user")
          selectionReset();
        }
        else {
          setWinningSide("draw");
          selectionReset();
        }
      }
      else if (selectionDialer(userSelection) === "paper") {
        if (selectionDialer(pcSelection) === "scissors") {
          newData[0].normalMode.pcScore++;
          setWinningSide("pc")
          selectionReset();

        }
        else if (selectionDialer(pcSelection) === "rock") {
          newData[0].normalMode.userScore++;
          setWinningSide("user")
          selectionReset();
        }
        else {
          setWinningSide("draw")
          selectionReset();
        }

      }
      else if (selectionDialer(userSelection) === "scissors") {
        if (selectionDialer(pcSelection) === "rock") {
          newData[0].normalMode.pcScore++;
          setWinningSide("pc")
          selectionReset();

        }
        else if (selectionDialer(pcSelection) === "paper") {
          newData[0].normalMode.userScore++;
          setWinningSide("user")
          selectionReset();
        }
        else {
          setWinningSide("draw")
          selectionReset();
        }

      }

    } else if (newData[0].normalMode.userScore === 3) {
      newData[0].credit += 50;
      newData[0].normalMode.userScore = 0;
      newData[0].normalMode.pcScore = 0;
      setWinningSide("");
    }
    else {
      if (newData[0].credit > 0) {
        newData[0].credit -= 25;
        newData[0].normalMode.userScore = 0;
        newData[0].normalMode.pcScore = 0;
        setWinningSide("");
      }
      else {
        newData[0].normalMode.userScore = 0;
        newData[0].normalMode.pcScore = 0;
        setWinningSide("");
      }
    }

    setData(newData);


  }, [pcSelection]) //line of code showing who won according to pcSelection




  const selectionDialer = (s) => {
    var v1 = s.split('/');
    var v2 = v1[1].split('.');
    var selection = v2[0];
    return selection;
  } //line of code that separates the path and only shows selection



  return (
    <div className='game'>
      <Head setLoggined={setLoggined} />
      <br />
      <Container
        data={data}
        setData={setData}
        userSelection={userSelection}
        pcSelection={pcSelection}
        winningSide={winningSide}
        setWinningSide={setWinningSide}
      />
      <Bottom
        setUserSelection={setUserSelection}
        data={data}
        userSelectDisabled = {userSelectDisabled}
        setData={setData} />
    </div>
  )
}

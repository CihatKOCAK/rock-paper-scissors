import "./App.scss";
import Menu from "../src/components/menu/Menu"
import Game from "../src/components/game/Game"
import { useEffect, useState } from "react";

function App() {


  /*      -----ROAD MAP-----
    Change Mode code's in Container jsx
    Selection processes code's in Game jsx
    Score calculations code's in Game jsx
    Gambling Mode code's in Bottom jsx
    Menu button activity and selection  code's in Menu jsx
    Program startup and database selection processes code's in App jsx (here)

  */

  const [selectedMenu, setSelectedMenu] = useState("")
  const [loggined, setLoggined] = useState(false)

  const [data, setData] = useState([]);


  useEffect(() => {
   setSelectedMenu("");
  }, [loggined]) 


  useEffect(() => {
    localStorage.getItem('myData') ? setData(JSON.parse(localStorage.getItem('myData'))) : setData([]);
  }, []) //check localStorage in case of page refresh or opening and add data to state


  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(data))
  }, [data]); //Add to localStorage as data is refreshed




  const newAndStart = () => {
    var today = new Date();
    var date = today.getDate() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getFullYear();
    setLoggined(true)
    setData([{
      name: "Rock GAME",
      loginDate: date,
      credit: 100,
      mode: "pve",
      normalMode: {
        pcScore: 0,
        userScore: 0,
      },
      gamblingMode: { //continue until the round repeat is equalized in the played round 
        raundNum:0,
        raundRepeat:0,
        roundPlayed:0,
        HLT:0,
        botSelection:0,
        watchMode:0,
        creditEarned:0,
      }
    }])
  }//we reset the locale to reset the game or start from scratch





  useEffect(() => {

    switch (selectedMenu) {
      case "Resume":
        setLoggined(true);
        break;
      case "NewGame":
        newAndStart();
        break;
      case "Start":
        newAndStart();
        break;
    }
  }, [selectedMenu]);//menu selections and necessary actions


  return (
    <div>
      {loggined ?
        <Game
          loggined={loggined}
          setLoggined={setLoggined}
          data={data}
          setData={setData} /> :
        <Menu setSelectedMenu={setSelectedMenu} />}
    </div>

  );
}


export default App;

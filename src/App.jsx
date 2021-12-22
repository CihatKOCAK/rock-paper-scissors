import "./App.scss";
import Menu from "../src/components/menu/Menu"
import Game from "../src/components/game/Game"
import { useEffect, useState } from "react";

function App() {

  const [selectedMenu, setSelectedMenu] = useState("")
  const [loggined, setLoggined] = useState(false)

  const [data, setData] = useState([]);


  //check localStorage in case of page refresh or opening and add data to state
  useEffect(() => {
    localStorage.getItem('myData') ? setData(JSON.parse(localStorage.getItem('myData'))) : setData([]);
  }, [])

  //Add to localStorage as data is refreshed
  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(data))
  }, [data]);



  //we reset the locale to reset the game or start from scratch 
  const newAndStart = () => {
    var today = new Date();
    var date = today.getDate() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getFullYear();
    setLoggined(true)
    setData([{
      name: "Rock GAME",
      loginDate: date,
      credit: 0,
      mode: "pvc",
      raund: [{
        1: "",
        2: "",
        3: ""
      }]
    }])
  }




//menu selections and necessary actions
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
  }, [selectedMenu]);


  return (
    <div>
      {loggined ?
        <Game loggined={loggined} setLoggined={setLoggined} data={data} setData={setData} /> :
        <Menu setSelectedMenu={setSelectedMenu} />}
    </div>

  );
}


export default App;

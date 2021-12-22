import "./App.scss";
import Menu from "../src/components/menu/Menu"
import Game from "../src/components/game/Game"
import { useEffect, useState } from "react";

function App() {

  const [selectedMenu, setSelectedMenu] = useState("")
  const [loggined, setLoggined] = useState(false)

  const [data, setData] = useState([{
    name: "Rock GAME",
    loginDate: "",
    credit: 0,
    mode:"pvc",
    raund:[{
      1:"",
      2:"",
      3:""
    }]
  }]);
//JSON.parse(localStorage.getItem('myData'))[0]  
//console.log(data[0].raund)
useEffect(() => {
  localStorage.setItem('myData', JSON.stringify(data))
}, [data]);


  const newAndStart = () => {
    var today = new Date();
    var date = today.getDate() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getFullYear();
    setLoggined(true)
    setData([{ name: "Rock GAME", loginDate: date, credit: 0 }])
  }

 

 

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
        <Game loggined={loggined} setLoggined={setLoggined} data = {data} setData = {setData} /> :
        <Menu setSelectedMenu={setSelectedMenu} />}
    </div>

  );
}


export default App;

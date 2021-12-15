import "./App.scss";
import Menu from "../src/components/menu/Menu"
import Game from "../src/components/game/Game"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("")
  console.log(selectedMenu)
  switch (selectedMenu) {
    case "Resume":
      break;
    case "NewGame":
      break;
    case "Start":
      break;
    default:
    console.log("Def")
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu setSelectedMenu={setSelectedMenu} />} />
        <Route path="game/" element={<Game selectedMenu={selectedMenu} />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

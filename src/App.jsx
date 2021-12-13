import "./App.scss";

function App() {
  return <div className="App">
    <div className="top">
      <h1>ROCK, PAPER,SCISSORS</h1>
    </div>
    <div className="container">
      <div>
        <h2>PLAYER VS COMPUTER</h2>
        <button>CHANGE MODE</button>
      </div>
      <div className="bot">
        <div className="computer">
          <p>COMPUTER</p>
          <div className="mark">?</div>
          <p>0 PT</p>
        </div>
        <p>vs</p>
        <div className="player">
          <p>PLAYER</p>
          <div className="mark">?</div>
          <p>0 PT</p>
        </div>
      </div>

    </div>
    <div className="bottom">
      <div className="selection">
        <button>Rock</button>
        <button>Paper</button>
        <button>Scissors</button>
      </div>
      <div className="layer"><p>CHOOSE A WEAPON</p></div>
    </div>
  </div>;
}

export default App;

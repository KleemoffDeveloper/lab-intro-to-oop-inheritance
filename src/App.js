import { useEffect, useState } from "react";
import badFoods from "./assets/bad-foods";
import FoodChoice from "./components/FoodChoice";
import { BadFood, Food } from "./assets/food";

function App() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);

  // Since there are only 2 players, we can just use a boolean
  const [player1Attacking, setPlayer1Attacking] = useState(false);

  return (
    <div className="App">
      <main>
        <div className="player-select">
          <h1>{player1 && player2 ? "Players" : "Player Select"}</h1>
          <div className="selection-layout">
            {player1 ? (
              <div className="player1 selected">
                P1
                <FoodChoice m_food={player1} playerIsSet={true} />
              </div>
            ) : (
              <div className="player1 food">
                <h2>Player 1 Food</h2>
                <div className="list">
                  {badFoods.map((food) => (
                    <FoodChoice m_food={food} setPlayer={setPlayer1} />
                  ))}
                </div>
              </div>
            )}
            {player2 ? (
              <div className="player2 selected">
                P2
                <FoodChoice m_food={player2} playerIsSet={true} />
              </div>
            ) : (
              <div className="player2 food">
                <h2>Player 2 Food</h2>
                <div className="list">
                  {badFoods.map((food) => (
                    <FoodChoice m_food={food} setPlayer={setPlayer2} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <h1>Arena</h1>
        <div className="arena">
          <section className="player player1">
            <h2>{player1 ? `${player1Attacking ? "Attacking" : "Waiting for P2"} - ${player1.food.name}` : 'Player 1 - picking...'}</h2>
            <div className="log-actions">
              <div className="player-log">
                <div className="log-instance">
                  <h3>Action</h3>
                  <p>Text</p>
                </div>
              </div>
              <div className="actions">
                <button onClick={() => {
                  if(player1Attacking) {
                    // Do Action
                    // Instantiate a new attack log
                    setPlayer1Attacking(false);
                  }
                }}>Fight</button>
                <button onClick={() => {
                  if(player1Attacking) {
                    // Do Action
                    // Instantiate a new attack log
                    setPlayer1Attacking(false);
                  }
                }}>Block</button>
                <button onClick={() => {
                  if(player1Attacking) {
                    // Do Action
                    // Instantiate a new attack log
                    setPlayer1Attacking(false);
                  }
                }}>Heal</button>
              </div>
            </div>
          </section>
          <section className="player player2">
            <h2>{player2 ? `${player1Attacking ? "Waiting for P1" : "Attacking"} - ${player1.food.name}` : 'Player 2 - picking...'}</h2>
            <div className="log-actions">
              <div className="player-log">
                <div className="log-instance">
                  <h3>Action</h3>
                  <p>Text</p>
                </div>
              </div>
              <div className="actions">
                <button onClick={() => {
                  if(!player1Attacking) {
                    setPlayer1Attacking(true);
                  }
                }}>Fight</button>
                <button onClick={() => {
                  if(!player1Attacking) {
                    setPlayer1Attacking(true);
                  }
                }}>Block</button>
                <button onClick={() => {
                  if(!player1Attacking) {
                    setPlayer1Attacking(true);
                  }
                }}>Heal</button>
              </div>
            </div>
          </section>
        </div>
        <div className="spacer"></div>
      </main>
    </div>
  );
}

export default App;

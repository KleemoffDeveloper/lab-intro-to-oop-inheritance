import { useEffect, useState } from "react";
import badFoods from "./assets/bad-foods";
import FoodChoice from "./components/FoodChoice";
import { BadFood, Food } from "./assets/food";
import Log from "./components/Log";

function App() {
  const [player1, setPlayer1] = useState(null);
  const [player1Log, setPlayer1Log] = useState([]);

  const [player2, setPlayer2] = useState(null);
  const [player2Log, setPlayer2Log] = useState([]);

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
            <h2>
              {player1
                ? `${player1Attacking ? "Attacking" : "Waiting"} - ${
                    player1.food.name
                  }`
                : "Player 1 - picking..."}
            </h2>
            <div className="log-actions">
              <div className="player-log">
                {player1Log.map((_info) => (
                  <Log info={_info} />
                ))}
              </div>
              <div className="actions">
                <button
                  onClick={() => {
                    if (player1Attacking) {
                      // Do Action
                      const action = player1.food.fight(player2.food);
                      console.log(action);
                      // Instantiate a new attack log
                      setPlayer1Log([
                        ...player1Log,
                        { action: "Fight", text: action },
                      ]);

                      // Switch turn
                      setPlayer1Attacking(false);
                    }
                  }}
                >
                  Fight
                </button>
                <button
                  onClick={() => {
                    if (player1Attacking) {
                      // Do Action
                      const action = player1.food.block();
                      console.log(action);
                      // Instantiate a new attack log
                      setPlayer1Log([
                        ...player1Log,
                        { action: "Block", text: action },
                      ]);

                      // Switch turn
                      setPlayer1Attacking(false);
                    }
                  }}
                >
                  Block
                </button>
                <button
                  onClick={() => {
                    if (player1Attacking) {
                      // Do Action
                      const action = player1.food.heal();
                      console.log(action);
                      // Instantiate a new attack log
                      setPlayer1Log([
                        ...player1Log,
                        { action: "Heal", text: action },
                      ]);

                      // Switch turn
                      setPlayer1Attacking(false);
                    }
                  }}
                >
                  Heal
                </button>
              </div>
            </div>
          </section>
          <section className="player player2">
            <h2>
              {player2
                ? `${player1Attacking ? "Waiting" : "Attacking"} - ${
                    player2.food.name
                  }`
                : "Player 2 - picking..."}
            </h2>
            <div className="log-actions">
              <div className="player-log">
                {player2Log.map((_info) => (
                  <Log info={_info} />
                ))}
              </div>
              <div className="actions">
                <button
                  onClick={() => {
                    if (!player1Attacking) {
                      // Do Action
                      const action = player2.food.fight(player1.food);
                      console.log(action);
                      // Instantiate a new attack log
                      setPlayer2Log([
                        ...player2Log,
                        { action: "Fight", text: action },
                      ]);

                      // Switch turn
                      setPlayer1Attacking(true);
                    }
                  }}
                >
                  Fight
                </button>
                <button
                  onClick={() => {
                    if (!player1Attacking) {
                      // Do Action
                      const action = player2.food.block();
                      console.log(action);
                      // Instantiate a new attack log
                      setPlayer2Log([
                        ...player2Log,
                        { action: "Block", text: action },
                      ]);

                      // Switch turn
                      setPlayer1Attacking(true);
                    }
                  }}
                >
                  Block
                </button>
                <button
                  onClick={() => {
                    if (!player1Attacking) {
                      // Do Action
                      const action = player2.food.heal();
                      console.log(action);
                      // Instantiate a new attack log
                      setPlayer2Log([
                        ...player2Log,
                        { action: "Heal", text: action },
                      ]);

                      // Switch turn
                      setPlayer1Attacking(true);
                    }
                  }}
                >
                  Heal
                </button>
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

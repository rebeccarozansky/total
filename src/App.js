import React, { useState, useEffect } from 'react';
import './App.css';
import Game from './components/Game';
import GameClass from './classes/GameStateClass';
import CurrentLevel from './classes/CurrentLevel';
import Overlay from './components/Overlay';
import gamestatearray from './goalnumbers/db.js';

let gs1 = new GameClass([1, 2, 3, 4, 5, 6], 27);
    let gs2 = new GameClass([3, 5, 9, 10, 12, 15], 28);
    let gs3 = new GameClass([1, 2, 13, 14, 15, 16], 31);
    let gs4 = new GameClass([1, 2, 3, 4, 5, 20], 40);
    let gs5 = new GameClass([3, 5, 9, 10, 12, 15], 45);

const gameStates = gamestatearray;

// TODO: potentially, move overlay to here?
// TODO: move up Game.js state managing to this level
function App() {
  
    const [gameState, setGameState] = useState(gameStates[0]);
  
    // Function to switch levels
    const switchLevel = (level) => {
      gameStates[currentLvl.level - 1] = gameState.clone();
      setCurrentLvl(new CurrentLevel(level));
      setGameState(gameStates[level - 1]);
    };

    useState(() => {
    }, [gameState]);
    
    // Callback function to update the game state
    const updateGameState = (newGameState) => {
      // Use setGameState to update the state and trigger re-render
      setGameState(newGameState);
    };
    gameState.display();
    if(gameState.prevGames===null){
    let initialGs = new GameClass(gameState.numAr, gameState.endGoal)
    let cloneGs = gameState.clone();
    cloneGs.prevGames = initialGs;
    cloneGs.currGame = initialGs;
    updateGameState(cloneGs);
  }

  const [currentLvl, setCurrentLvl] = useState(new CurrentLevel(1));
  const [currGs, setCurrGs ] = useState(gs1);

  const updateLvl = (newLvl) => {
    setCurrentLvl(newLvl);
  };

  useEffect(() => {

  }, [currentLvl]);

  return (
    <div>
       
      {[1,2,3,4,5].map((number) => (
        <button
          key={number}
          onClick={() => switchLevel(number)}
          style={{
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New'",
            backgroundColor: gameStates[number-1].checkGoal() ? "#F7D61B" : number !== currentLvl.level ? "#FFFBE3" : "green",
            textAlign: "center",
            color: gameStates[number-1].checkGoal() ? "black" : number !== currentLvl.level ? "black" : "white",
            marginRight: "10px", // Add margin-right to create space between buttons
            border: "1px solid black",
          }}
        >
          {number}
        </button>
      ))}

 
      {/*currentGame*/}

      {<Game gameState={gameState} updateGameState = {updateGameState} updateLvl={updateLvl} currentLvl={currentLvl}/>}
      {
        
    !gameState.checkGoal() ? <div></div> : <Overlay isVisible={true} updateLvl={updateLvl} currentLvl = {currentLvl}/>
        
}

    </div>
  );
}

export default App;

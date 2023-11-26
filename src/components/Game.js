// Each Game component should be initialized with a unique GameState
// Each Game component will be called in a larger navigation component that lets
// users switch between levels

import Number from "./Number";
import Operation from "./Operation";
import Undo from "./Undo";
import "./cssfiles/Game.css"

function Game({gameState,updateGameState}) {
    return (
      <div className="App">
        <div id="endGoal">{gameState.endGoal}</div>
  
        <div class="container">
  
         {gameState.state.map(number => (
          <Number gs={gameState} num={number} updateGameState={updateGameState}/>
        ))}
         </div>
         <div class="containerOp">
          <Undo gs={gameState} updateGameState={updateGameState}/>
        {gameState.signs.map(sign => (
          <Operation gs={gameState} sign = {sign} updateGameState={updateGameState}/>
        )) }
       </div>
  
       {

}
         
  
      </div>
    );
  }
  
  export default Game;
  
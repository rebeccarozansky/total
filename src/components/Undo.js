import React from "react";
import './cssfiles/Undo.css'

function Undo(props){
    function doUndo(){
        props.updateGameState(props.gs.prevGames);
    }

    return (<div class="undoClass" onClick={doUndo} id="undo">
        
    </div>)
}

export default Undo;
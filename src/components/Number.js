import React from "react";
import './cssfiles/Number.css'

const unSelected = "#FFFBE3";
const selected = "#1D662E";


function Number(props){
    var color = unSelected;
    if(props.num.selected === true){
        color = selected;
    }
    else{
        color = unSelected;
    }

    function changeColor(){
        if(props.num.selected===true){
            color = selected;
        }
        else{
            color = unSelected;
        }

        let tempClone = props.gs.clone();
        let validOp = tempClone.validateOp(props.num.index);
        if(validOp){
            tempClone.clickOnNum(props.num.index);
            tempClone.display();
            props.updateGameState(tempClone);  
        }
        else{
                tempClone.deselectEverything();
                props.updateGameState(tempClone);
        }
    }
    if(props.num.val === 0){
        return <div class="blankItem">
        </div>;
    }

    return (

        <div class="numberCircle" onClick={changeColor} style={{background: color}}>
                {props.num.val}  
        </div>
    );


}

export default Number;
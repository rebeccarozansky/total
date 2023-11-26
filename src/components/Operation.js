import React, { useEffect, useState } from 'react';
import "./cssfiles/Operation.css";

const unSelected = "#331905";
const selected = "#3663E0";

const opToName = {'+': 'add', '-': 'subtract', '*': 'multiply', '/': 'divide'};

function Operation(props) {
    const [color, setColor] = useState("blue");
    const [classNamer, setClassName] = useState("operationClassUnselected");

    let path = "";
    if (props.sign.sign === "U") {
        path = "svgs/undo-svgrepo-com.svg"
    }

    useEffect(() => {
        if(props.sign.selected){
            setColor(selected);
            setClassName("operationClassSelected");
        }
        else{
            setColor(unSelected);
            setClassName("operationClassUnselected");
        }
    }, [props.sign.selected]);

    function changeColor() {
        let tempClone = props.gs.clone();
        tempClone.clickOnOp(props.sign.sign);
        props.updateGameState(tempClone);
    }

    return (
        <div className={classNamer} id={opToName[props.sign.sign]} onClick={changeColor}>
        </div>
    );
}

export default Operation;
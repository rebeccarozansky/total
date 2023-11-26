import React from 'react';
import './cssfiles/Overlay.css'
import { useState } from 'react';

//TODO: Create a new Overlay to return when all of the levels are done

const Overlay = ({isVisible,updateLvl,currentLvl }) => {

    const [visible,setVisible] = useState(true);
    
    useState(() => {
    }, [visible]);

    const onClose = () => {
        setVisible(false);
    }
    const onNextLevel = () => {
        onClose();
        let lvlClone = currentLvl.clone();
        lvlClone.level+=1;
        console.log("UPDATE please!")
        updateLvl(lvlClone);
    }

  if (!visible) {
    return null; // Don't render the overlay if it's not visible
  }

  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2>Congratulations!</h2>
        <p>You've won this level!</p>
        <button onClick={onClose}>Close </button>
      </div>
    </div>
  );
};

export default Overlay;

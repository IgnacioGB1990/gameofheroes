import React, { useState } from 'react';
import './styles.css';

export const BasketHeroes = ({ selectedHeroes, game, setGame }) => {
  const [display, setDisplay] = useState(false)
  //console.log('display:', display)
  //console.log('selectedHeroes length:', selectedHeroes.length)

  const gameOn = () => {
    if (selectedHeroes.length <= 10) {

      setDisplay(!display)
      setGame(!game)
    }
    console.log("No puedes jugar")
  }

  if (display) {
    return <div>
      entras???
    </div>
  }

  return (
    < button onClick={() => gameOn(selectedHeroes)} className="startGame" ><span>
      Game
    </span>

    </button >
  );
};

// Redirect to /auth/login if user is not present
export default BasketHeroes;
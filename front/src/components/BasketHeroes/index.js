import React from 'react';
import './styles.css';

export const BasketHeroes = ({ selectedHeroes, game, setGame }) => {
  console.log('selectedHeroes:', selectedHeroes)


  const gameOn = () => {
    if (selectedHeroes.length = 3) {
      console.log("Puedes jugar")
      console.log('selectedHeroes.length:', selectedHeroes.length)
      setGame(!game)
    }
    console.log("No puedes jugar")

  }





  return (
    < button onClick={() => gameOn(selectedHeroes)} className="startGame" >
      Game: {selectedHeroes.length}
    </button >
  );
};



// Redirect to /auth/login if user is not present
export default BasketHeroes;
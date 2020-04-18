import React from 'react';
import './styles.css';

export const BasketHeroes = ({ selectedHeroes }) => {
  console.log('selectedHeroes:', selectedHeroes)








  return (
    < button className="startGame" >
      Game 2: {selectedHeroes.length}
    </button >
  );
};



// Redirect to /auth/login if user is not present
export default BasketHeroes;
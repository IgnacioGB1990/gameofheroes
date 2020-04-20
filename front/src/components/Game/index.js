import React from 'react';
import './styles.css';

export const Game = ({ recruited }) => {
  console.log("Entras aqui con los heroes", recruited)

  return (
    < div className="Game" >
      < div className="userBox" >

        <div className="imagesRecruited">
          <img alt={recruited[1]} key={name} src={recruited[2].xs} />

        </div>


      </div >

      < div className="machineBox" >
        machine
   </div >
    </div>
  );
};



// Redirect to /auth/login if user is not present
export default Game;
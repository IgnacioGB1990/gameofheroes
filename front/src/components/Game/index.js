import React from 'react';
import './styles.css';
import Chart from "../Heroes/Chart"

export const Game = ({ recruited }) => {
  console.log("Entras aqui con los heroes", recruited)

  return (
    < div className="userBox" >
      <p>{recruited[1]}</p>
      <img className="imgRecruited" alt={recruited[1]} key={name} src={recruited[2].sm} />
      <div className="cabroni">
        <Chart className="chartSelected" int={recruited[3].intelligence} str={recruited[3].strength} spe={recruited[3].speed}
          dur={recruited[3].durability} pow={recruited[3].power} com={recruited[3].combat}
        />
        <div className="spaceBar">space</div>
      </div>
    </div >
  );
};



// Redirect to /auth/login if user is not present
export default Game;


/*


  < div className="machineBox" >
  machine
</div >


*/
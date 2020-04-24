import React from 'react';
import './styles.css';


export const Machine = ({ heroe }) => {
  console.log("Entraste a Machine!!!!!!", heroe)

  return (
    < div className="machineBox" >
      <img className="imgMachine" alt={name} src={heroe.images.sm} />
    </div >
  );
};




export default Machine;
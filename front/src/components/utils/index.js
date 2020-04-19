export const getAveragePrice = powerstats => Math.round((powerstats.intelligence + powerstats.strength +
  powerstats.speed + powerstats.durability + powerstats.power + powerstats.combat) / 6)


//Cogemos y eliminamos Heroes que no tienen foto correcta: 288, 369, 461, 475, 568, 582, 538
export const allHeroesUtils = heroes => heroes.filter(heroe => (heroe.id != 288 && heroe.id != 369 && heroe.id
  != 461 && heroe.id != 475 && heroe.id != 568 && heroe.id != 582 && heroe.id != 538))

export const averagePowerstat = array => array.reduce((acc, cV) => {
  return acc + cV;
}, 0) / array.length;





  //Le estamos indicando a React que el comoponente tiene que hacer algo después de renderizarse.
  //React recordará la función que le hemos pasado y la llamará más tarde después de actualizar el DOM.
  //Se ejecuta despues de cada renderizado
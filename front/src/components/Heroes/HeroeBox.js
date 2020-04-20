import React, { useState } from "react";
import Chart from "./Chart"
import { getAveragePrice } from "../utils/"

//...otherStats te devuelve el resto del la info del heroe
export const HeroeBox = ({ heroe: { id, name, images, appearance, powerstats },
  selectedHeroes, setSelectedHeroes, curncy, setCurncy, game, setGame,
  avgInt, avgStr, avgSpe, avgDur, avgPow, avgCom }) => {

  const [noDisplay, yesDisplay] = useState(false)
  const [noShake, yesShake] = useState(false)



  const addHeroesToCart = (heroe) => {
    console.log("ACABAS DE RECLUTAR A", heroe)
    console.log(getAveragePrice(heroe[3]))
    console.log(heroe[4].selectedHeroes.length)
    if (curncy > getAveragePrice(heroe[3]) && heroe[4].selectedHeroes.length <= 2) {
      setSelectedHeroes([...selectedHeroes, heroe])
      yesDisplay(!noDisplay)
      curncy -= getAveragePrice(heroe[3]);
      setCurncy(curncy)
    } else if (curncy < getAveragePrice(heroe[3]) || heroe[4].selectedHeroes.length > 2) {
      yesShake(!noShake)
      console.log("no va")
    }
    console.log("Salio")
  }

  const wiggle = () => {
    if (!noShake) {
      return "heroCard"
    }
    return "heroCardWiggle"
  }

  const stop = () => {
    if (!noShake) {
      return "recruitBtn"
    }
    return "cancelBtn"
  }

  const stopMe = () => {
    if (!noShake) {
      return "Recruit"
    }
    return "Only 3!"
  }

  if (noDisplay) {
    return (<div className={wiggle()}>

      <img className="imgCard" alt={name} src={images.sm} />
      <p className="heroName" > Name: {name} <br />
        Height: {appearance.height[1]} <br />
        Weight: {appearance.weight[1]}
      </p >
      <Chart int={powerstats.intelligence} str={powerstats.strength} spe={powerstats.speed}
        dur={powerstats.durability} pow={powerstats.power} com={powerstats.combat}
        avgInt={avgInt} avgStr={avgStr} avgSpe={avgSpe} avgDur={avgDur} avgPow={avgPow} avgCom={avgCom} />

      <p className="priceTag">Price: {getAveragePrice(powerstats)}💰 Available: {curncy} </p>
      <button style={{ outline: "none" }} className={stop()} onClick={() => addHeroesToCart([id, name, images, powerstats, { selectedHeroes }])}><span>{stopMe()}</span></button>
      <button style={{ outline: "none" }} className="dismissBtn" onClick={() => yesDisplay(!noDisplay)}><span>Dismiss</span></button>
    </div>
    )
  }

  return (
    <>
      <button style={{ outline: "none" }} className="visuallyhidden" onClick={() => yesDisplay(!noDisplay) && noRecruits(noRecruits)}>
        <img className="heroes-format" alt={name} key={name} src={images.xs} />
      </button>
    </>
  )
};

export default HeroeBox;
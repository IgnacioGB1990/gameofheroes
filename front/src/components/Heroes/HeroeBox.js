import React, { useState } from "react";
import Chart from "./Chart"

//...otherStats te devuelve el resto del la info del heroe
export const HeroeBox = ({ heroe: { name, images, appearance, powerstats },
  selectedHeroes, setSelectedHeroes, curncy, setCurncy }) => {

  //console.log('selectedHeroes:', selectedHeroes)
  const [noDisplay, yesDisplay] = useState(false)
  const [noShake, yesShake] = useState(false)

  const addHeroesToCart = (power) => {
    console.log("ACABAS DE RECLUTAR A", power)

    if (curncy > power.intelligence) {
      setSelectedHeroes([...selectedHeroes, power])
      yesDisplay(!noDisplay)
      curncy -= power.intelligence * 3;
      setCurncy(curncy)
    } else if (curncy < power.intelligence) {
      yesShake(!noShake)
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
    return "No money!"
  }

  if (noDisplay) {
    return (<div className={wiggle()}>

      <img className="imgCard" alt={name} src={images.sm} />
      <p className="heroName" > Name: {name} <br />
        Height: {appearance.height[1]} <br />
        Weight: {appearance.weight[1]}
      </p >
      <Chart int={powerstats.intelligence} str={powerstats.strength} spe={powerstats.speed} dur={powerstats.durability} pow={powerstats.power} com={powerstats.combat} />
      <p className="priceTag">Price: {Math.round((powerstats.intelligence + powerstats.strength + powerstats.speed + powerstats.durability + powerstats.power + powerstats.combat) / 6)}💰 Available: {curncy} </p>
      <button style={{ outline: "none" }} className={stop()} onClick={() => addHeroesToCart(powerstats)}><span>{stopMe()}</span></button>
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
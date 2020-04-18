import React, { useState, useEffect } from 'react';
import './styles.css';
import useFetch from "../../../src/components/Hooks/useFetch"
import { withProtected } from "../../../lib/protectRoute.hoc"
import HeroeBox from "./HeroeBox"
import Input from "./Input"
import BasketHeroes from "../BasketHeroes"
import { whoami } from "../../../lib/auth.api";


const ListHeroes = () => {
  const { heroes, loading } = useFetch("https://akabab.github.io/superhero-api/api/all.json");
  const [selectedHeroes, setSelectedHeroes] = useState([])
  const [filter, setFilter] = useState("");
  const [curncy, setCurncy] = useState();

  console.log(selectedHeroes)
  //Le estamos indicando a React que el comoponente tiene que hacer algo después de renderizarse.
  //React recordará la función que le hemos pasado y la llamará más tarde después de actualizar el DOM.
  //Se ejecuta despues de cada renderizado

  useEffect(() => {
    console.log("Acabas de entrar en useEffect")
    whoami()
      .then(user => {
        setCurncy(user.currency)
      })
      .catch(e => {
        console.log("No user logged in")
      })
  }, []);


  if (loading) {
    return <div>
      Loading your heroes...
    </div>
  }

  //Cogemos y eliminamos Heroes que no tienen foto correcta: 288, 369, 461, 475, 568, 582, 538
  const allHeroes = heroes.filter(heroe => (heroe.id != 288 && heroe.id != 369 && heroe.id != 461 && heroe.id != 475 && heroe.id != 568 && heroe.id != 582 && heroe.id != 538))

  //Separate powerstats into arrays
  const arrayIntelligence = allHeroes.map(heroe => heroe.powerstats.intelligence)
  const arrayStrength = allHeroes.map(heroe => heroe.powerstats.strength)
  const arraySpeed = allHeroes.map(heroe => heroe.powerstats.speed)
  const arrayDurability = allHeroes.map(heroe => heroe.powerstats.durability)
  const arrayPower = allHeroes.map(heroe => heroe.powerstats.power)
  const arrayCombat = allHeroes.map(heroe => heroe.powerstats.combat)



  let arrayPowerstats = allHeroes.map(heroe => [heroe.powerstats.intelligence, heroe.powerstats.strength, heroe.powerstats.speed, heroe.powerstats.durability, heroe.powerstats.power, heroe.powerstats.combat])
  // console.log(arrayPowerstats)

  //Get powerstats average
  const averageIntelligence = arrayIntelligence.reduce((acc, cV) => {
    return acc + cV;
  }, 0) / arrayIntelligence.length;

  const averageStrength = arrayStrength.reduce((acc, cV) => {
    return acc + cV;
  }, 0) / arrayStrength.length;

  const averageSpeed = arraySpeed.reduce((acc, cV) => {
    return acc + cV;
  }, 0) / arraySpeed.length;

  const averageDurability = arrayDurability.reduce((acc, cV) => {
    return acc + cV;
  }, 0) / arrayDurability.length;

  const averagePower = arrayPower.reduce((acc, cV) => {
    return acc + cV;
  }, 0) / arrayPower.length;

  const averageCombat = arrayCombat.reduce((acc, cV) => {
    return acc + cV;
  }, 0) / arrayCombat.length;

  // console.log("This is the average of intelligence", averageIntelligence)
  // console.log("This is the average of strength", averageStrength)
  // console.log("This is the average of speed", averageSpeed)
  // console.log("This is the average of durability", averageDurability)
  // console.log("This is the average of power", averagePower)
  // console.log("This is the average of combat", averageCombat)

  const renderHeroes = () =>
    allHeroes.map((heroe, key) =>
      heroe.name.toLowerCase().includes(filter.toLowerCase()) && (

        <HeroeBox curncy={curncy} setCurncy={setCurncy} selectedHeroes={selectedHeroes} setSelectedHeroes={setSelectedHeroes} hello={averageIntelligence} heroe={heroe} key={key} />
      )
    );

  return (

    < div className="App" >
      <BasketHeroes selectedHeroes={selectedHeroes} />

      <Input setFilter={setFilter} />
      {renderHeroes()}
    </div >
  );
};

const Page = () => (
  <div>
    <ListHeroes />
  </div>
);

// Redirect to /auth/login if user is not present
export const List = withProtected(Page);

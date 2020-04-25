import React, { useState, useEffect } from 'react';
import './styles.css';
import useFetch from "../../../src/components/Hooks/useFetch"
import { withProtected } from "../../../lib/protectRoute.hoc"
import HeroeBox from "./HeroeBox"
import Input from "./Input"
import BasketHeroes from "../BasketHeroes"
import Game from "../Game"
import Machine from "../Machine"
import { whoami } from "../../../lib/auth.api";
import { allHeroesUtils, averagePowerstat } from "../utils"

const ListHeroes = () => {
  const { heroes, loading } = useFetch("https://akabab.github.io/superhero-api/api/all.json");
  const [selectedHeroes, setSelectedHeroes] = useState([])
  const [filter, setFilter] = useState("");
  const [curncy, setCurncy] = useState();
  const [game, setGame] = useState(false)
  const [machine, setMachine] = useState(false)

  useEffect(() => {
    // console.log("Acabas de entrar en useEffect")
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

  const allHeroes = allHeroesUtils(heroes)
  //Separate powerstats into arrays
  const arrInt = allHeroes.map(heroe => heroe.powerstats.intelligence)
  const arrStr = allHeroes.map(heroe => heroe.powerstats.strength)
  const arrSpe = allHeroes.map(heroe => heroe.powerstats.speed)
  const arrDur = allHeroes.map(heroe => heroe.powerstats.durability)
  const arrPow = allHeroes.map(heroe => heroe.powerstats.power)
  const arrCom = allHeroes.map(heroe => heroe.powerstats.combat)
  //Get powerstats average
  const avgInt = averagePowerstat(arrInt).toFixed(2)
  const avgStr = averagePowerstat(arrStr).toFixed(2)
  const avgSpe = averagePowerstat(arrSpe).toFixed(2)
  const avgDur = averagePowerstat(arrDur).toFixed(2)
  const avgPow = averagePowerstat(arrPow).toFixed(2)
  const avgCom = averagePowerstat(arrCom).toFixed(2)
  //Renders and filters all heroes list
  const renderHeroes = () =>
    allHeroes.map((heroe, key) =>
      heroe.name.toLowerCase().includes(filter.toLowerCase()) && (
        <HeroeBox game={game} setGame={setGame} curncy={curncy} setCurncy={setCurncy} selectedHeroes={selectedHeroes}
          setSelectedHeroes={setSelectedHeroes} heroe={heroe} key={key}
          avgInt={avgInt} avgStr={avgStr} avgSpe={avgSpe} avgDur={avgDur} avgPow={avgPow} avgCom={avgCom} />
      )
    );

  const recruited = () =>
    selectedHeroes.map((recruited, key) =>
      <Game className="gamePosition" recruited={recruited} key={key} />
    );


  const getRandom = (heroes) =>
    heroes.map((heroe, key) =>
      <Machine heroe={heroe} key={key} />
    );


  const random = (heroes) => {
    if (machine) {
      return (
        < >
          <div className="randomContainer">
            {getRandom(heroes.sort(() => Math.random() - Math.random()).slice(0, 3))}
          </div>
        </>
      );
    } else if (machine === false) {
      return "machine"
    }

  }


  //If game is clicked it displays heroes selected and menu for battling
  if (game) {
    return <>
      <button className="back" onClick={() => setGame(!game)}><span>BACK</span></button>
      <button className="remove" onClick={() => setSelectedHeroes([])} >X</button>
      <div className="boxUser">
        {recruited()}
      </div>

      <button className="fightBtn" onClick={() => { setMachine(!machine) }} > Fight </button>

      <div className={random(heroes)}>
        {/* {getRandom(heroes.sort(() => Math.random() - Math.random()).slice(0, 3))} */}
        {random(allHeroes)}
      </div>
    </>
  }

  return (
    < div className="App" >
      <BasketHeroes selectedHeroes={selectedHeroes} game={game} setGame={setGame} />
      <Input setFilter={setFilter} />
      {renderHeroes()}
      <p className="heroeBtn">Total Heroes: {allHeroes.length}</p>
      <p className="recruitedBtn">Recruited: {selectedHeroes.length}</p>

      <p className="curncyBtn">{curncy} 💰</p>
    </div >
  );
};

const Page = () => (
  <div>
    <ListHeroes />
  </div>
);


export const List = withProtected(Page);

import React, { useState, useEffect } from 'react';
import './styles.css';
import useFetch from "../../../src/components/Hooks/useFetch"
import { withProtected } from "../../../lib/protectRoute.hoc"
import HeroeBox from "./HeroeBox"
import Input from "./Input"
import BasketHeroes from "../BasketHeroes"
import { whoami } from "../../../lib/auth.api";
import { allHeroesUtils, averagePowerstat } from "../utils"

const ListHeroes = () => {
  const { heroes, loading } = useFetch("https://akabab.github.io/superhero-api/api/all.json");
  const [selectedHeroes, setSelectedHeroes] = useState([])
  const [filter, setFilter] = useState("");
  const [curncy, setCurncy] = useState();
  const [game, setGame] = useState(false)


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

  const allHeroes = allHeroesUtils(heroes)
  //Separate powerstats into arrays
  const arrInt = allHeroes.map(heroe => heroe.powerstats.intelligence)
  const arrStr = allHeroes.map(heroe => heroe.powerstats.strength)
  const arrSpe = allHeroes.map(heroe => heroe.powerstats.speed)
  const arrDur = allHeroes.map(heroe => heroe.powerstats.durability)
  const arrPow = allHeroes.map(heroe => heroe.powerstats.power)
  const arrCom = allHeroes.map(heroe => heroe.powerstats.combat)
  //Get powerstats average
  const avgInt = averagePowerstat(arrInt)
  const avgStr = averagePowerstat(arrStr)
  const avgSpe = averagePowerstat(arrSpe)
  const avgDur = averagePowerstat(arrDur)
  const avgPow = averagePowerstat(arrPow)
  const avgCom = averagePowerstat(arrCom)

  const renderHeroes = () =>
    allHeroes.map((heroe, key) =>
      heroe.name.toLowerCase().includes(filter.toLowerCase()) && (
        <HeroeBox game={game} setGame={setGame} curncy={curncy} setCurncy={setCurncy} selectedHeroes={selectedHeroes}
          setSelectedHeroes={setSelectedHeroes} heroe={heroe} key={key}
          avgInt={avgInt} avgStr={avgStr} avgSpe={avgSpe} avgDur={avgDur} avgPow={avgPow} avgCom={avgCom} />
      )
    );

  if (game) {
    return <div>
      Gaming Mode!!!!
      <button onClick={() => setGame(!game)}></button>
      )
    </div>
  }

  return (

    < div className="App" >
      <BasketHeroes selectedHeroes={selectedHeroes} game={game} setGame={setGame} />

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

import React from "react";
import useFetch from "../../src/components/Hooks/useFetch"
import '../App.css'


export const HeroDetail = (id) => {
  const { heroes, loading } = useFetch(`https://akabab.github.io/superhero-api/api/powerstats/${id}.json`);

  console.log('Powerstats of hero:', heroes)
  console.log("This is the id of the clicked hero", id)

  if (loading) {
    return <div>
      Cargando los datos...
    </div>
  }
  return (

    <div className="flex-container"> {heroes.map((heroe, key) =>
      <div >
        <img className="heroes-format" key={key.id} src={heroe.images.xs} />
      </div>
    )
    }</div>
  );
};



export default HeroDetail;
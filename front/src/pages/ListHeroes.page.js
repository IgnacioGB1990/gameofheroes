import React from "react";
import useFetch from "../../src/components/Hooks/useFetch"
import { withProtected } from "../../lib/protectRoute.hoc";
import '../App.css'
import HeroDetail from "../pages/HeroesDetails.page"


const GetAllHeroes = () => {
  const { heroes, loading } = useFetch("https://akabab.github.io/superhero-api/api/all.json");

  console.log('heroes in list of heroes:', heroes)
  console.log(loading)




  if (loading) {
    return <div>
      Cargando los datos...
    </div>
  }

  const prueba = (name, id) => {
    { console.log("This is the ", name, "and this is the id", id) }


  }



  return (

    <div className="flex-container"> {heroes.map((heroe, key) =>
      <div >
        <button style={{ outline: "none" }} className="visuallyhidden" onClick={() => prueba(heroe.name, heroe.id)}>
          <img className="heroes-format" alt={heroe.name} key={key} src={heroe.images.xs} />
        </button>
        <>

          {console.log("Fini")}
        </>
      </div>
    )
    }</div>
  );
};

const Page = () => (
  <div>
    <GetAllHeroes />

  </div>
);

// Redirect to /auth/login if user is not present
export const ListHeroesPage = withProtected(Page);
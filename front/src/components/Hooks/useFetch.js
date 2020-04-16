import { useEffect, useState } from "react"

const useFetch = url => {
  const [loading, setLoading] = useState(true)
  const [heroes, setHeroes] = useState(null)





  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url)
        const heroes = await response.json();
        //console.log('This is the list of heroes', heroes)
        setHeroes(heroes);
        setLoading(false);
      } catch (e) {
        console.log(e)
      }
    }
    fetchData();

  }, [url]);
  return { heroes, loading }

}

export default useFetch;
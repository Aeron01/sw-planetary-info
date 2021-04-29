/*import { useState, useEffect } from 'react';

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchPlanet() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
    }
    fetchPlanet();
  }, []);

}

export default Planets*/
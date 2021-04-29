import { useState, useEffect } from 'react';
//import Planets from './components/Planets'

function App({ data }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchPlanet() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
    }
    fetchPlanet();
  }, []);

  console.log(planets)
  return (
    < body >
      <div id="root" className="App">
        <section className="container py-5">
          <h1 className="mb-5">Planètes dans l'univer Star Wars</h1>
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
              <article className="bg-warning p-3">
                <h2>{planets.id}</h2>
              </article>
            </div>
          </div>
        </section>
      </div>
    </body >
  );
}

export default App;

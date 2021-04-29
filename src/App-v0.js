import { useState, useEffect } from 'react';
import Planets from './components/Planets'
import { Container, Dimmer, Loader } from 'semantic-ui-react'


function App() {

  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }
    fetchPlanets();
  }, []);



  return (
    <>

      <Container>
        {loading ? (
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        ) : (
          <Planets data={planets} />
        )}
      </Container>

    </>
  );
}

export default App;

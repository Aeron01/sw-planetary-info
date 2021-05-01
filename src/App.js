import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import SWApp from './components/SWApp.js'
import './App.css';

function App() {
  const [url, setUrl] = useState(`https://swapi.dev/api/planets/`)
  const [nextPlanets, setNextPlanets] = useState('')

  const handleButtonNxt = () => {
    setUrl(nextPlanets)
  }

  return (
    <div className="App">
      <h1 className="display-1 text-center my-5">Les planètes dans l'univer Star Wars</h1>
      <div className="container">
        <SWApp setNextPlanets={setNextPlanets} url={url} />
        <button disabled={nextPlanets === null} onClick={handleButtonNxt} className="btn btn-info my5 me-2">{nextPlanets !== null ? "Plus de Planète" : "Fin de la liste"}</button>
      </div>
    </div>
  )
};

export default App;

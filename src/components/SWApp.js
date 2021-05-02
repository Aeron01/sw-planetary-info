import { useState, useEffect } from 'react'
import { planetColor } from '../PlanetColor'


const SWApp = ({ url, nextPlanets, setNextPlanets }) => {
  const [names, setNames] = useState([]);

  const [apiCallCount, setApiCallCount] = useState(0)

  useEffect(() => {

    fetch(url)
      .then((response) => {
        setApiCallCount(a => a + 1)
        if (!response.ok) {

          throw new Error("Information Introuvable")
        }

        return response.json()
      })
      .then((data) => {

        for (let elem of data.results) {
          names.push(elem)
        }
        let nextPlanets
        if (data.next !== null) {
          nextPlanets = data.next.split('')
          nextPlanets[3] = 'ps'
          nextPlanets = nextPlanets.join('')
        } else {
          nextPlanets = data.data.next
        }
        setNames(() => names)
        setNextPlanets(() => nextPlanets)

      })
      .catch((error) => {
        alert(error.message)
      })
  }, [url, names, nextPlanets, setNextPlanets, setApiCallCount])
  return (
    <>
      <p>{apiCallCount}</p>
      < div className="d-flex flex-wrap" >
        {names.map((elem) => {
          return <div key={elem.name} className="card mb-2 me-2" style={{ width: "200px", backgroundColor: "#6669AA" }}>
            <div className="card-body">
              <h2 className="card-title">{elem.name}</h2>
              <p className="card-subtitle">Rotation : {elem.rotation_period} H</p>
              <p className="card-subtitle">Révolution orbital : {elem.orbital_period} Jours</p>
              <p className="card-subtitle">Diamètre : {elem.diameter} Km</p>
              <p className="card-subtitle">Climat : {elem.climate}</p>
              <p className="card-subtitle">Pesenteur : {elem.gravity}</p>
              <p className="card-subtitle">Biome : {elem.terrain}</p>
              <p className="card-subtitle">Population : {elem.population} Âmes</p>
              <div
                className="card-gradient rounded-pill d-flex mt-3 mx-auto" style={{ height: "4rem", width: "4rem", backgroundImage: planetColor(elem.terrain.split(',')[0]) }}
              ></div>
            </div>
          </div>
        })}
      </div >
    </>
  )
}

export default SWApp
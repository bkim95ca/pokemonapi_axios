import './App.css';
import axios from 'axios';
import {useState} from 'react';

function App() {

  const [pokemon, setPokemon] = useState([])

  const axiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=808&offset=0")
    .then((res) => {
      setPokemon(res.data.results)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <button onClick={axiosPokemon}>Get Pokemon</button>
      {
        pokemon.map((onePokemon, index) => {
          return (
            <li>{onePokemon.name}</li>
            )
        })
      }
    </div>
  );
}

export default App;

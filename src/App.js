import './App.css';
import Wrapper from './components/Wrapper';
import { useState, useEffect } from 'react';
import Popup from './components/Popup';
import pokemonLogo from './International_Pokémon_logo.svg.png'

function App() {

  const [showPop, setShowPop] = useState(false)
  const [pokemon, setPokemon] = useState({})
  const [data, setData] = useState({})
  const [thumbnails, setThumbnails] = useState([])
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')

  useEffect(() => {
    const callApi = async () => {
      const response = await fetch(url)
      const responseJson = await response.json()
      return responseJson
    }
    callApi()
      .then(response => {
        setData(response)
        setThumbnails(response.results)
        console.log(response)
      })
  }, [url])


  const currentPokemon = (poke) => {
    setPokemon(poke)
  }

  const openPopup = () => {
    setShowPop(true)
  }

  const closePopup = () => {
    setShowPop(false)
  }

  return (
    <>
      <div className='header' ><img src={pokemonLogo} /></div>
      <Wrapper thumbnails={thumbnails} currentPokemon={currentPokemon} openPopup={openPopup} />
      {showPop && <div className='pop-container'><Popup closePopup={closePopup} pokemon={pokemon} /></div>}
      <div className="nav-buttons">
        <button disabled={!data.previous} onClick={() => setUrl(data.previous)}>prev</button>
        <button disabled={!data.next} onClick={() => setUrl(data.next)}>next</button>
      </div>
    </>
  );
}

export default App;

import './App.css';
import Wrapper from './components/Wrapper';
import { useState, useEffect } from 'react';
import Popup from './components/Popup';

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
      {showPop ? <Popup closePopup={closePopup} pokemon={pokemon} /> : <Wrapper thumbnails={thumbnails} currentPokemon={currentPokemon} openPopup={openPopup} />}
      {!showPop && <div className="nav-buttons">
            <button onClick={() => setUrl(data.previous)}>prev</button>
            <button onClick={() => setUrl(data.next)}>next</button>
        </div>}
    </>
  );
}

export default App;

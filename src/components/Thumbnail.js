import { useEffect, useState } from "react"

const Thumbnail = ({ name, url, currentPokemon, openPopup }) => {

    const [pokemon, setPokemon] = useState({})
    const [image, setImage] = useState('')

    useEffect(() => {
        const callApi = async () => {
            const response = await fetch(url)
            const responseJson = await response.json()
            return responseJson
        }
        callApi()
            .then(response => {
                setPokemon(response)
                if(response.sprites.other.dream_world.front_default){
                    setImage(response.sprites.other.dream_world.front_default)
                }
                else {
                    setImage(response.sprites.other['official-artwork'].front_default)
                }
            })
    }, [url])

    return (
        <div className="thumbnail" onClick={() => {
            currentPokemon(pokemon)
            openPopup()
        }}>
            {/* <p>{name}</p> */}
            <div className="image">
                <img src={image} alt={name} />
                
            </div>
            <span className="id">{pokemon.id && `#${pokemon.id}`}</span>
            <h4>{name}</h4>
        </div>
    )
}

export default Thumbnail
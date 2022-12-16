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
                setImage(response.sprites.front_default)
            })
    }, [url])

    return (
        <div className="thumbnail" onClick={() => {
            currentPokemon(pokemon)
            openPopup()
        }}>
            <p>{name}</p>
            <img src={image} alt={name} />
        </div>
    )
}

export default Thumbnail
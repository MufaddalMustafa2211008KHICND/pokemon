import { useState, useEffect } from "react";
import App from "./App";

const MyApp = () => {
    // const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    // const [pokemon, setPokemon] = useState(null)
    const path = window.location.pathname;
    console.log(path, window.location)
    let render;
    // useEffect(() => {
    //     const poke = window.location.pathname;
    //     const callApi = async () => {
    //         const response = await fetch('https://pokeapi.co/api/v2/pokemon'+poke)
    //         const responseJson = await response.json()
    //         return responseJson
    //     }
    //     callApi()
    //         .then(response => {
    //             setPokemon(response)
    //             console.log(response)
    //         })
    // }, [])

    switch(path) {
        case '/pokemon':
            render = <App/>
        break;

        default:
            render = <h1>specify correct path</h1>
        break;
    }

    return (
        // <div>{pokemon ? <h1>{pokemon.name}</h1> : 'please specify a correct poke'}</div>
        <>
        {render}
        </>
    )
}

export default MyApp
const Popup = ({pokemon, closePopup}) => {
    return(
        <div className="popup">
            <h1>{pokemon.name}</h1>
            <div><img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} /></div>
            <div><p>Weight: {pokemon.weight/10} kgs</p></div>
            <div><p>Height: {pokemon.height/10} meters</p></div>
            <button onClick={closePopup}>close</button>
        </div>
    )
}

export default Popup
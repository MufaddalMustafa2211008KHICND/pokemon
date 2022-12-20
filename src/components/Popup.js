const Popup = ({ pokemon, closePopup }) => {
    return (
        <div className="popup">
            <h1 className="popup-title">{pokemon.name}</h1>
            <div className="popup-image">
                <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
            </div>
            <div className="popup-specs">
                <p>Weight: {pokemon.weight / 10} kgs</p>
                <p>Height: {pokemon.height / 10} meters</p>
            </div>
            <div className="popup-types">
                <h4 className="specs-title" >{pokemon.types.length === 1 ? 'Type':'Types'}:</h4>
                <div className="make-flex">
                    {pokemon.types.map((item) => {
                        return <p>{item.type.name}</p>
                    })}
                </div>
            </div>
            <div className="popup-abilities">
                <h4 className="specs-title" >{pokemon.abilities.length === 1 ? 'Ability':'Abilities'}:</h4>
                <div className="make-flex">
                    {pokemon.abilities.map((item) => {
                        return <p>{item.ability.name}</p>
                    })}
                </div>
            </div>
            <button className="popup-close" onClick={closePopup}>X</button>
        </div>
    )
}

export default Popup
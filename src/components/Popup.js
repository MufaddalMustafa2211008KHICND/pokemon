const Popup = ({pokemon, closePopup}) => {
    return(
        <div className="popup">
            <h1>{pokemon.name}</h1>
            <button onClick={closePopup}>close</button>
        </div>
    )
}

export default Popup
import { useEffect, useState } from "react"
import Thumbnail from "./Thumbnail"

const Wrapper = ({ currentPokemon, openPopup, thumbnails }) => {
    return (
        <>
        <div className="wrapper">
            {thumbnails.map((item) => <Thumbnail currentPokemon={currentPokemon} openPopup={openPopup} name={item.name} url={item.url} />)}
        </div>
        </>
    )
}

export default Wrapper
import React from 'react'
import sprites from './assets/sprites.png'
import './pokedex.scss'

export default function PokeCell({ pokeClass, handleOnClick}) {
    const { id, backgroundPosition } = pokeClass;
    const style = { backgroundImage: `url(${sprites})`, backgroundPosition };
    return <button onClick={() => handleOnClick(id)} style={style} className="pokecell"></button>
}

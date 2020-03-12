import React from 'react'
import {pokeClasses} from './pokeclasses'
import PokeCell from './pokecell'

import './pokedex.scss'

const PokeList = ({handleOnClick}) => {
    const cells = pokeClasses.map(pokeClass => {
        return(
            <PokeCell
                key={pokeClass.id}
                pokeClass={pokeClass}
                handleOnClick={handleOnClick}
            />
        )
    })
    return (
        <div className='pokelist'>
            {cells}
        </div>
    )
}

export default PokeList

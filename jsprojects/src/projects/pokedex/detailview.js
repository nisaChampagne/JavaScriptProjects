import React from 'react'

import './pokedex.scss'

const DetailView = ({ pokemon }) => {
    const { id, name, sprite, type } = pokemon
    return (
        <div className='details'>
            <img src={sprite} className='sprite'/>
            <div className='data'>
                <h2 className='datah1'>{name}</h2>
                <h3 className='datap'>Type: {type}</h3>
            </div>
        </div>
    )
}

export default DetailView;
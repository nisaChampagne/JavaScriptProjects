import React from 'react'

import './pokedex.scss'

const DetailView = ({ pokemon }) => {
    const { name, sprite, type, exp, weight, ability1, ability2 } = pokemon
    return (
        <div className='details'>
            <img src={sprite} className='sprite'/>
            <div className='data'>
                <h2 className='datah1'>{name}</h2>
                <h3 className='datap'>Type: {type}</h3>
                <h3 className='datap'>Exp: {exp}</h3>
                <h3 className='datap'>Weight: {weight} lbs</h3>
                <ul>
                    <h4 className='datap'>Abilities</h4>
                    <li className='datap'>{ability1}</li>
                    <li className='datap'>{ability2}</li>
                </ul>
            </div>
        </div>
    )
}

export default DetailView;
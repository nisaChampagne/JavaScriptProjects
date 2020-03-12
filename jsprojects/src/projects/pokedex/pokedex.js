import React, {Component} from 'react'

import Pokemon from './pokemon';
import PokeList from './pokelist';
import DetailView from './detailview';

import './pokedex.scss'

export default class Pokedex extends Component{
    constructor(){
        super();
        this.state = {
            pokemon: {}
        }; // initial state

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(id) {
        fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
          .then(res => res.json())
          .then(data => {
            const pokemon = new Pokemon(data);
    
            this.setState({ pokemon });
          })
          .catch(err => console.log(err));
      }

    render(){
        return(
            <div className='pokedex'>
                <PokeList handleOnClick={this.handleOnClick}/>
                <DetailView pokemon={this.state.pokemon}/>
            </div>
        )
    }
}

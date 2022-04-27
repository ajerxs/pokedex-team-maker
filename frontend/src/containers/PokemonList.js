import { Component } from "react";
import Pokemon from '../components/Pokemon';

export default class PokemonList extends Component {
    render() {

        const pokemon = this.props.pokemon.map(poke => <Pokemon key={poke.id} pokemon={poke} img={poke.img} name={poke.name} types={poke.types} addPokemon={this.props.addPokemon}/>)

        return(
            <div>
                {pokemon}
            </div>
        )
    }
}
import { Component } from "react";
import Pokemon from '../components/Pokemon';

export default class PokemonList extends Component {
    render() {

        const pokemon = this.props.pokemon.map(poke => <Pokemon key={poke.id} img={poke.img} name={poke.name} types={poke.types}/>)

        return(
            <div>
                {pokemon}
            </div>
        )
    }
}
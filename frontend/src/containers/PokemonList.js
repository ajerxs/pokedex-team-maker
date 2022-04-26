import { Component } from "react";
import Pokemon from '../components/Pokemon';

export default class PokemonList extends Component {
    render() {

        const pokemon = this.props.pokemon.map(poke => <Pokemon key={poke.id} img={poke.img} name={poke.name} />)

        return(
            <div>
                {pokemon}
            {/* <p>This will be a list of pokemon eventually</p> */}
            </div>
        )
    }
}
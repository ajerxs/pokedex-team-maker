import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

export default class SavedTeam extends Component {
    render() {
        const pokemon = this.props.pokemon.map(poke => {
            return(
                <div key={uuidv4()} className="poke-pics">
                    <img src={poke.img} alt={poke.name}/>
                    <h4>{poke.name}</h4>
                    <p>{poke.types}</p>
                </div>
            )
        })

        return(
            <div className="pokemon">
                <h2>{this.props.name}</h2>
                {pokemon}
            </div>
        )
    }
}
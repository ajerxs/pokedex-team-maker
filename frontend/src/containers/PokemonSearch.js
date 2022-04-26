import { Component } from "react";

export default class PokemonList extends Component {
    state = {
        img: "",
        name: ""
    }

    fetchPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/rayquaza')
        .then(resp => resp.json())
        .then(poke => {
            this.setState({
                img: poke["sprites"]["other"]["official-artwork"]["front_default"],
                name: poke.name
            });
        })
    }

    render() {
        return(
            <div>
                <h1>This should be a Pokemon Search page eventually.</h1>
                <img src={this.state.img} alt={this.state.name}/>
                <p>{this.state.name}</p>
                <button onClick={this.fetchPokemon}>button</button>
            </div>
        )
    }
}
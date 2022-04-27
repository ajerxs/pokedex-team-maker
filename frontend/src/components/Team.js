import { Component } from "react";

export default class Team extends Component {
    state = {
        name: this.props.team.name,
        newName: ""
    }

    handleOnChange = event => {
        this.setState({
            newName: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.changeTeamName(this.state.newName)
        this.setState({
            name: this.state.newName
        })
    }

    

    render() {

        const handleOnClick = pokemonId => {
            this.props.deletePokemon(pokemonId)
        }

        const pokemon = this.props.team.pokemon.map(poke => {
            return(
                <div key={poke.id}>
                    <li>{poke.name}</li>
                    <button onClick={() => handleOnClick(poke.id)}>Remove</button>
                </div>
            )
        })

        return(
            <div>
                <h2>{this.state.name}</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" placeholder="Change Team Name" onChange={this.handleOnChange}/>
                    <input type="submit" />
                </form>
                {pokemon}
            </div>
        )
    }
}
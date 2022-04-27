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

        const handleDeletePokemon = pokemonId => {
            this.props.deletePokemon(pokemonId)
            // NEED TO INCORPORATE UUID SO DUPLICATE POKEMON CAN BE ADDED TO TEAM
        }

        const handleDeleteTeam = team => {
            this.props.deleteTeam(team)
            this.setState({
                name: ""
            })
        }

        const pokemon = this.props.team.pokemon.map(poke => {
            return(
                <div key={poke.id}>
                    <li>{poke.name}</li>
                    <button onClick={() => handleDeletePokemon(poke.id)}>Remove</button>
                </div>
            )
        })

        return(
            <div>
                <div>
                    <h2>{this.state.name}</h2>
                    <form onSubmit={this.handleOnSubmit}>
                        <input type="text" placeholder="Change Team Name" onChange={this.handleOnChange}/>
                        <input type="submit" />
                    </form>
                    {pokemon}
                    <button onClick={() => handleDeleteTeam(this.props.team)}>Delete team</button>
                </div>
            </div>
        )
    }
}
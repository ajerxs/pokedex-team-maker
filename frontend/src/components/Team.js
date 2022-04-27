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

        const pokemon = this.props.team.pokemon.map(poke => <li key={poke.id}>{poke.name}</li>)

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
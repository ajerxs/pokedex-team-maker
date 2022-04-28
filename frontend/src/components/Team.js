import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import SavedTeam from "./SavedTeam";

export default class Team extends Component {
    state = {
        name: this.props.team.name,
        newName: "",
        team_id: 1,
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

    sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    saveTeam = () => {
        let formData = {
            name: this.state.name,
        }

        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        };

        fetch("http://127.0.0.1:3000/teams", configObj)
        .then(function(response){
            return response.json();
        })
        .then(function() {
            alert("Team successfully saved.");
        })
    }

    savePokemon = async () => {
        const pokemon = this.props.team.pokemon;

        for (let i = 0; i < pokemon.length; i++) {
            await this.sleep(2000)
            let formData = {
                name: pokemon[i].name,
                types: pokemon[i].types,
                img: pokemon[i].img,
                dex_num: pokemon[i].id,
                team_id: this.state.team_id
            }

            let configObj = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            };

            fetch("http://127.0.0.1:3000/pokemons", configObj)
            .then(function(response){
                return response.json();
            })
        }
        this.setState({
            team_id: this.state.team_id + 1,
            teams: this.props.savedTeams
        })
    }

    showSavedTeams = () => {
        this.state.teams.map(team => {
            const pokemon = team.pokemon.map(poke => {
                return(
                    <div key={uuidv4()}>
                        <img src={poke.img} alt={poke.name} />
                        <h4>{poke.name}</h4>
                        <p>{poke.types}</p>
                    </div>
                )
            })
            return(
                <div key={uuidv4()}>
                    <h2>{team.name}</h2>
                    {pokemon}
                </div>
            )
        })
    }

    save = (team) => {
        this.saveTeam();
        this.savePokemon();
        this.props.savedTeam(team);
    }

    render() {

        const handleDeletePokemon = pokemonId => {
            this.props.deletePokemon(pokemonId)
        }

        const handleDeleteTeam = team => {
            this.props.deleteTeam(team)
            this.setState({
                name: ""
            })
        }

        const pokemon = this.props.team.pokemon.map(poke => {
            return(
                <div key={uuidv4()}>
                    <li>{poke.name}</li>
                    <button onClick={() => handleDeletePokemon(poke.id)}>Remove</button>
                </div>
            )
        })

        const teams = this.props.savedTeams.map(team => <SavedTeam key={uuidv4()} team={team} name={team.name} pokemon={team.pokemon} />)


        return(
            <div>
                <div>
                    <h2>{this.state.name}</h2>
                    <form onSubmit={this.handleOnSubmit}>
                        <input type="text" placeholder="Change Team Name" onChange={this.handleOnChange}/>
                        <input type="submit" />
                    </form>
                    {pokemon}
                    <button onClick={() => this.save(this.props.team, this.props.savedTeams)}>Save Team</button>
                    <button onClick={() => handleDeleteTeam(this.props.team)}>Delete Team</button>
                </div>
                <div>
                    {teams}
                </div>
            </div>
        )
    }
}
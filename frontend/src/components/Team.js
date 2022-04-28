import { Component } from "react";

export default class Team extends Component {
    state = {
        name: this.props.team.name,
        newName: "",
        team_id: 1
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

        // let formData = {
        //     name: pokemon[0].name,
        //     types: pokemon[0].types,
        //     img: pokemon[0].img,
        //     dex_num: pokemon[0].id,
        //     team_id: this.state.team_id
        // }

        // let configObj = {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify(formData)
        // };

        // fetch("http://127.0.0.1:3000/pokemons", configObj)
        // .then(function(response){
        //     return response.json();
        // })

        this.setState({
            team_id: this.state.team_id + 1
        })
    }

    save = () => {
        this.saveTeam();
        this.savePokemon();
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
                    <button onClick={this.save}>Save Team</button>
                    <button onClick={() => handleDeleteTeam(this.props.team)}>Delete Team</button>
                </div>
                <div>

                </div>
            </div>
        )
    }
}
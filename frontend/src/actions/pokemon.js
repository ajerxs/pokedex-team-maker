export function fetchPokemon(pokemon) {

    const upcase = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    const types = (json) => {
        if (json.length === 2) {
            return upcase(json["0"]["type"]["name"]) + " / " + upcase(json["1"]["type"]["name"]);
        } else {
            return upcase(json["0"]["type"]["name"])
        }
    }

    return (dispatch) => {
        dispatch({ type: "START_ADDING_POKEMON" });
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(resp => resp.json())
        .then((poke) => {
            dispatch({ type: "ADD_POKEMON", pokemon: {
                id: poke.id,
                name: upcase(poke.name),
                img: poke["sprites"]["other"]["official-artwork"]["front_default"],
                types: types(poke["types"])
                }
            })
        });
    }
}

// export function fetchTeam() {
    // const pokeArray = (included, id) => {
    //     const pokemon = included.filter((pokemon) => pokemon["attributes"]["team_id"] === id);
    //     pokemon.map((poke) => ({
    //         id: poke["attributes"]["dex_num"],
    //         name: poke["attributes"]["name"],
    //         img: poke["attributes"]["img"],
    //         types: poke["attributes"]["types"]
    //     })
    //     )
    // }

    // return (dispatch) => {
    //     dispatch({ type: "START_ADDING_TEAM" });
    //     fetch('http://localhost:3000/teams')
    //     .then(resp => resp.json())
    //     .then((team) => {
    //         let i;
    //         if (team["data"].length === 0) {
    //             i = 0;
    //             return i;
    //         } else {
    //             i = team["data"].length - 1;
    //         }
    //         console.log(team["included"])
    //         console.log(team["data"][i]["id"])
    //         dispatch({ type: "ADD_TEAM", team: {
    //             name: team["data"][i]["attributes"]["name"],
    //             pokemon: pokeArray(team["included"], team["data"][i]["id"])
    //         }})
    //     })
    // }
// }

export function addPokemonToTeam(pokemon) {
    return {
        type: "ADD_POKEMON_TO_TEAM",
        pokemon
    }
}

export function deletePokemonFromTeam(pokemonId) {
    return {
        type: "DELETE_POKEMON_FROM_TEAM",
        pokemonId
    }
}

export function changeTeamName(name) {
    return {
        type: "CHANGE_TEAM_NAME",
        name
    }
}

export function deleteUnsavedTeam(team) {
    return {
        type: "DELETE_UNSAVED_TEAM",
        team
    }
}

export function savedTeam(team) {
    return {
        type: "SAVED_TEAM",
        team
    }
}
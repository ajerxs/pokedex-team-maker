function pokemonReducer(state = { 
    pokemon: [],
    loading: false,
    team: {
        name: "New Team",
        pokemon: []
    },
    savedTeams: []
    }, action ) {
    switch (action.type) {
        case "START_ADDING_POKEMON":
            return {
                ...state,
                loading: true
            };
        case "ADD_POKEMON":
            return {
                ...state,
                pokemon: state.pokemon.concat(action.pokemon),
                loading: false
            };
        case "ADD_POKEMON_TO_TEAM":
            return {
                ...state,
                pokemon: state.pokemon.filter(poke => poke.id !== action.pokemon.id),
                team: {
                    name: state.team.name,
                    pokemon: state.team.pokemon.concat(action.pokemon)
                }
            };
        case "DELETE_POKEMON_FROM_TEAM":
            return {
                ...state,
                team: {
                    name: state.team.name,
                    pokemon: state.team.pokemon.filter(poke => poke.id !== action.pokemonId)
                }
            }
        case "CHANGE_TEAM_NAME":
            return {
                ...state,
                team: {
                    name: action.name,
                    pokemon: state.team.pokemon
                }
            };
        case "DELETE_UNSAVED_TEAM":
            return {
                ...state,
                team: {
                    name: "",
                    pokemon: []
                }
            };
        // case "START_ADDING_TEAM":
        //     return {
        //         ...state,
        //         loading: true
        //     };
        // case "ADD_TEAM":
        //     return {
        //         ...state,
        //         savedTeams: state.savedTeams.concat(action.team),
        //         loading: false
        //     }
        case "SAVED_TEAM":
            return {
                ...state,
                team: {
                    name: "New Team",
                    pokemon: []
                },
                savedTeams: state.savedTeams.concat(action.team)
            }

        default:
            return state;
    }
}

export default pokemonReducer;
function pokemonReducer(state = { 
    pokemon: [],
    loading: false,
    team: {
        name: "New Team",
        pokemon: []
    },
    savedTeams: [],
    id: 0
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
                    id: state.team.id,
                    name: state.team.name,
                    pokemon: state.team.pokemon.filter(poke => poke.id !== action.pokemonId)
                }
            }
        case "CHANGE_TEAM_NAME":
            return {
                ...state,
                team: {
                    id: state.team.id,
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
        case "SAVED_TEAM":
            action.team.id = state.id + 1
            return {
                ...state,
                team: {
                    id: state.team.id,
                    name: "New Team",
                    pokemon: []
                },
                savedTeams: state.savedTeams.concat(action.team),
                id: action.team.id
            }
        case "DELETE_SAVED_TEAM":
            return {
                ...state,
                savedTeams: state.savedTeams.filter(team => team.id !== action.teamId)
            }
        default:
            return state;
    }
}

export default pokemonReducer;
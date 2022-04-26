function pokemonReducer(state = { pokemon: [], loading: false }, action ) {
    switch (action) {
        case "START_ADDING_POKEMON":
            return {
                ...state,
                pokemon: [...state.pokemon],
                loading: true
            };
        case "ADD_POKEMON":
            return {
                pokemon: state.pokemon.concat(action.pokemon),
                loading: false
            };
        default:
            return state;
    }
}

export default pokemonReducer;
export function fetchPokemon(pokemon) {
    return (dispatch) => {
        dispatch({ type: "START_ADDING_POKEMON" });
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(resp => resp.json())
        .then((poke) => {
            dispatch({ type: "ADD_POKEMON", pokemon: {
                id: poke.id,
                name: poke.name,
                img: poke["sprites"]["other"]["official-artwork"]["front_default"]
                }
            })
        });
    }
}
import { Component } from "react";
import { connect } from 'react-redux';
import { addPokemonToTeam, fetchPokemon } from '../actions/pokemon'
import PokemonList from "./PokemonList";

class PokemonSearch extends Component {
    state = {
        search: ""
    }

    handleOnChange = event => {
        this.setState({
            search: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.fetchPokemon(this.state.search.toLowerCase());
        this.setState({
            search: ""
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" placeholder="Search Pokemon" value={this.state.search} onChange={this.handleOnChange}/>
                    <input type="submit" value="Search" />
                </form>
                <PokemonList pokemon={this.props.pokemon} addPokemon={this.props.addPokemonToTeam}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchPokemon: pokemon => dispatch(fetchPokemon(pokemon)),
    addPokemonToTeam: pokemon => dispatch(addPokemonToTeam(pokemon))
})

const mapStateToProps = (state) => {
    return {
        pokemon: state.reducers.pokemon
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonSearch)
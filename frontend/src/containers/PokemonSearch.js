import { Component } from "react";
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions/pokemon'
// import PokemonList from "./PokemonList";

class PokemonSearch extends Component {
    state = {
        search: ""
    }

    handleOnChange = event => {
        this.setState({
            search: event.target.value
        })
        console.log(this.state.search)
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.fetchPokemon(this.state.search);
        this.setState({
            search: ""
        })
        console.log(this.state.search)
        console.log(this.props.pokemon)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" placeholder="Search Pokemon" value={this.state.search} onChange={this.handleOnChange}/>
                    <input type="submit" value="Search" />
                </form>
                {/* <PokemonList pokemon={this.props.pokemon} /> */}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchPokemon: pokemon => dispatch(fetchPokemon(pokemon))
})

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonSearch)
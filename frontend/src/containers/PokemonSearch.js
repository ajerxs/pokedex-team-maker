import { Component } from "react";
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions/pokemon'

class PokemonList extends Component {
    state = {
        // img: "",
        search: ""
    }

    // fetchPokemon = () => {
    //     fetch('https://pokeapi.co/api/v2/pokemon/rayquaza')
    //     .then(resp => resp.json())
    //     .then(poke => {
    //         this.setState({
    //             img: poke["sprites"]["other"]["official-artwork"]["front_default"],
    //             name: poke.name
    //         });
    //     })
    // }

    handleOnChange = event => {
        this.setState({
            search: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.fetchPokemon(this.state.search);
        this.setState({
            search: ""
        })
    }

    render() {
        return(
            <div>
                <form>
                    <input type="text" placeholder="Search Pokemon" onChange={this.handleOnChange}/>
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchPokemon: () => dispatch(fetchPokemon())
})

const mapStateToProps = state => ({
    pokemon: state.pokemon
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)
import { Component } from "react";

export default class Pokemon extends Component {
    handleOnClick = () => {
        this.props.addPokemon(this.props.pokemon)
    }

    render() {
        return(
            <div>
                <img src={this.props.img} alt={this.props.name} />
                <h4>{this.props.name}</h4>
                <p>{this.props.types}</p>
                <button onClick={this.handleOnClick}>Add</button>
            </div>
        )
    }
}
import { Component } from "react";

export default class Pokemon extends Component {
    render() {
        return(
            <div>
                <img src={this.props.img} alt={this.props.name} />
                <h4>{this.props.name}</h4>
                <p>{this.props.types}</p>
                {/* <p>{this.props.type2}</p> */}
            </div>
        )
    }
}
import { Component } from "react";
import Team from "../components/Team";
import { connect } from 'react-redux';
import { changeTeamName } from "../actions/pokemon";

class Teams extends Component {
    render() {
        return(
            <div>
                <Team team={this.props.team} changeTeamName={this.props.changeTeamName}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    changeTeamName: name => dispatch(changeTeamName(name))
})

const mapStateToProps = (state) => {
    return {
        team: state.reducers.team
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teams)
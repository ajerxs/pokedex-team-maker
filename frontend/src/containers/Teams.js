import { Component } from "react";
import Team from "../components/Team";
import { connect } from 'react-redux';
import { changeTeamName, deletePokemonFromTeam, deleteUnsavedTeam, savedTeam } from "../actions/pokemon";

class Teams extends Component {
    render() {
        return(
            <div>
                <Team 
                team={this.props.team}
                changeTeamName={this.props.changeTeamName}
                deletePokemon={this.props.deletePokemonFromTeam}
                deleteTeam={this.props.deleteUnsavedTeam}
                savedTeam={this.props.savedTeam}
                savedTeams={this.props.savedTeams}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    changeTeamName: name => dispatch(changeTeamName(name)),
    deletePokemonFromTeam: pokemonId => dispatch(deletePokemonFromTeam(pokemonId)),
    deleteUnsavedTeam: team => dispatch(deleteUnsavedTeam(team)),
    savedTeam: team => dispatch(savedTeam(team)),
})

const mapStateToProps = (state) => {
    return {
        team: state.reducers.team,
        savedTeams: state.reducers.savedTeams
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teams)
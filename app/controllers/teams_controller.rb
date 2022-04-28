class TeamsController < ApplicationController

    def index
        teams = Team.all
        options = {
            include: [:pokemons]
        }
        render json: TeamSerializer.new(teams, options)
    end

    def create
        team = Team.create(team_params)
        render json: TeamSerializer.new(team)
    end

    def destroy
        team = Team.find_by(id: params[:id])
        team.destroy
    end

    private

    def team_params
        params.require(:team).permit(
            :name
        )
    end

end

class TeamsController < ApplicationController

    def index
        teams = Team.all
        options = {
            include: [:pokemons]
        }
        render json: TeamSerializer.new(teams, options)
    end

    def create
        team = Team.find_by(id: params[:id])
        options = {
            include: [:pokemons]
        }
        render json: TeamsSerializer.new(couple, options)
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

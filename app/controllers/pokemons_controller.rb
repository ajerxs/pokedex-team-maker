class PokemonsController < ApplicationController

    def index
        pokemons = Pokemon.all
        render json: PokemonSerializer.new(pokemons)
    end

    def create
        pokemon = Pokemon.create(pokemon_params)
        render json: PokemonSerializer.new(pokemon)
    end

    def destroy
        pokemon = Pokemon.find_by(id: params[:id])
        pokemon.destroy
    end

    private

    def pokemon_params
        params.require(:pokemon).permit(
            :name, :types, :img, :dex_num, :team_id
        )
    end

end

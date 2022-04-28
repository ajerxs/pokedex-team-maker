class PokemonSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :types, :img, :dex_num, :team_id
    belongs_to :team
end
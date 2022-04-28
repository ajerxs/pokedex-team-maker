class PokemonSerializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :type, :img, :dex_num, :team_id
end
class TeamSerializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :name
    has_many :pokemons
end
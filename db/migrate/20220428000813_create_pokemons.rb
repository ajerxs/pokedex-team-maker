class CreatePokemons < ActiveRecord::Migration[6.1]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :type
      t.string :img
      t.integer :dex_num
      t.integer :team_id

      t.timestamps
    end
  end
end

class CreateCity < ActiveRecord::Migration[7.0]
  def change
    create_table :cities do |t|
      t.string :name, null: false
      t.string :slug, null: false

			t.integer :population # 人
			t.integer :population_density # 人/km
			t.decimal :unemployment_rate, precision: 10, scale: 2 # %
			t.boolean :is_has_pulic_medical
			t.decimal :salary, precision: 10, scale: 2 # 円
			t.decimal :one_room_rent, precision: 10, scale: 2 # 円
			t.decimal :temperature, precision: 10, scale: 2 # 度
			t.decimal :humidity, precision: 10, scale: 2 # %
			t.integer :is_has_river
			t.integer :is_has_mountain

      t.timestamps
    end
  end
end

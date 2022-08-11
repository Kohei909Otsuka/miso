class CreateCar < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |t|
      t.string :name, null: false
      t.string :slug, null: false, index: {unique: true}
      t.integer :score, null: false, default: 0

      t.decimal :height , precision: 10, scale: 2 # cm
      t.decimal :width , precision: 10, scale: 2 # cm
      t.decimal :length , precision: 10, scale: 2 # cm
      t.integer :luggage_size , precision: 10, scale: 2 # L
      t.decimal :zero_to_hundred, precision: 10, scale: 2 # sec
      t.integer :max_speed
      t.integer :max_torque
      t.decimal :fuel_consumption, precision: 10, scale: 2 # km/L

      t.timestamps
    end
  end
end

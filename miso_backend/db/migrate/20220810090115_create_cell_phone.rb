class CreateCellPhone < ActiveRecord::Migration[7.0]
  def change
    create_table :cell_phones do |t|

      t.string :name, null: false
      t.string :slug, null: false, index: {unique: true}
      t.integer :score, null: false, default: 0

      t.decimal :weight # gram
      t.decimal :thickness, precision: 10, scale: 2 # mm
      t.decimal :width , precision: 10, scale: 2 # cm
      t.decimal :height , precision: 10, scale: 2 # cm
      t.decimal :screen_size , precision: 10, scale: 2 # inch
      t.integer :screen_kind
      t.integer :refresh_rate # Ghz/s
      t.string :cpu
      t.integer :memory # GB
      t.integer :disk # GB
      t.boolean :is_multi_sim
      t.timestamps
    end
  end
end

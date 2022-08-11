class CreateImage < ActiveRecord::Migration[7.0]
  def change
    create_table :images do |t|
      t.references :owner, null: false, polymorphic: true
      t.integer :sequence, null: false
      t.string :url, null: false
      t.timestamps
    end
  end
end

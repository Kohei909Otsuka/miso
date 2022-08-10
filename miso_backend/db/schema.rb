# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_08_10_090936) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cars", force: :cascade do |t|
    t.string "name", null: false
    t.string "slug", null: false
    t.decimal "height", precision: 10, scale: 2
    t.decimal "width", precision: 10, scale: 2
    t.decimal "length", precision: 10, scale: 2
    t.integer "luggage_size"
    t.decimal "zero_to_hundred", precision: 10, scale: 2
    t.integer "max_speed"
    t.integer "max_torque"
    t.decimal "fuel_consumption", precision: 10, scale: 2
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cell_phones", force: :cascade do |t|
    t.string "name", null: false
    t.string "slug", null: false
    t.decimal "weight"
    t.decimal "thickness", precision: 10, scale: 2
    t.decimal "width", precision: 10, scale: 2
    t.decimal "height", precision: 10, scale: 2
    t.decimal "screen_size", precision: 10, scale: 2
    t.integer "screen_kind"
    t.integer "refresh_rate"
    t.string "cpu"
    t.integer "memory"
    t.integer "disk"
    t.boolean "is_multi_sim"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cities", force: :cascade do |t|
    t.string "name", null: false
    t.string "slug", null: false
    t.integer "population"
    t.integer "population_density"
    t.decimal "unemployment_rate", precision: 10, scale: 2
    t.boolean "is_has_pulic_medical"
    t.decimal "salary", precision: 10, scale: 2
    t.decimal "one_room_rent", precision: 10, scale: 2
    t.decimal "temperature", precision: 10, scale: 2
    t.decimal "humidity", precision: 10, scale: 2
    t.integer "is_has_river"
    t.integer "is_has_mountain"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end

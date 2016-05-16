# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160516133751) do

  create_table "boards", id: false, force: :cascade do |t|
    t.string   "name",        null: false
    t.string   "full_name"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "boards", ["name"], name: "index_boards_on_name"

  create_table "posts", force: :cascade do |t|
    t.string   "subject"
    t.text     "text"
    t.boolean  "is_base"
    t.integer  "reply_to"
    t.integer  "tread_id"
    t.integer  "user_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "posts", ["is_base"], name: "index_posts_on_is_base"
  add_index "posts", ["tread_id"], name: "index_posts_on_tread_id"
  add_index "posts", ["user_id"], name: "index_posts_on_user_id"

  create_table "treads", force: :cascade do |t|
    t.string   "name"
    t.string   "board_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "treads", ["board_id"], name: "index_treads_on_board_id"

end

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

ActiveRecord::Schema.define(version: 20170513140246) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cursos", force: :cascade do |t|
    t.string   "nombre"
    t.string   "tipo_curso"
    t.string   "lugar"
    t.text     "descripcion"
    t.float    "duracion"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "horarios", force: :cascade do |t|
    t.string   "dia"
    t.time     "hora"
    t.integer  "curso_id"
    t.integer  "profesor_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["curso_id"], name: "index_horarios_on_curso_id", using: :btree
    t.index ["profesor_id"], name: "index_horarios_on_profesor_id", using: :btree
  end

  create_table "profesors", force: :cascade do |t|
    t.string   "nombre"
    t.string   "apellido"
    t.string   "especialidad"
    t.integer  "no_clases"
    t.integer  "salario"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "tarifas", force: :cascade do |t|
    t.string   "plan"
    t.string   "nombre"
    t.integer  "valor"
    t.string   "descripcion"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "role",                   default: "visitor"
    t.datetime "created_at",                                 null: false
    t.datetime "updated_at",                                 null: false
    t.string   "email",                  default: "",        null: false
    t.string   "encrypted_password",     default: "",        null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,         null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  add_foreign_key "horarios", "cursos"
  add_foreign_key "horarios", "profesors"
end

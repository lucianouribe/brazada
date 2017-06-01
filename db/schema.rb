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

ActiveRecord::Schema.define(version: 20170526020227) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "alumnos", force: :cascade do |t|
    t.string   "primer_nombre"
    t.string   "segundo_nombre"
    t.string   "primer_apellido"
    t.string   "segundo_apellido"
    t.string   "cedula"
    t.string   "correo"
    t.date     "fecha_nacimiento"
    t.string   "direccion"
    t.string   "telefono"
    t.date     "fecha_matriculacion"
    t.string   "programa"
    t.string   "nivel"
    t.string   "estado"
    t.string   "genero"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  create_table "contactos", force: :cascade do |t|
    t.string   "nombre",                      null: false
    t.string   "correo",                      null: false
    t.text     "mensaje",                     null: false
    t.boolean  "leido",       default: false
    t.boolean  "importancia", default: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  create_table "cursos", force: :cascade do |t|
    t.string   "nombre",      null: false
    t.string   "tipo_curso",  null: false
    t.string   "lugar"
    t.text     "descripcion"
    t.float    "duracion"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "delayed_jobs", force: :cascade do |t|
    t.integer  "priority",   default: 0, null: false
    t.integer  "attempts",   default: 0, null: false
    t.text     "handler",                null: false
    t.text     "last_error"
    t.datetime "run_at"
    t.datetime "locked_at"
    t.datetime "failed_at"
    t.string   "locked_by"
    t.string   "queue"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["priority", "run_at"], name: "delayed_jobs_priority", using: :btree
  end

  create_table "happy_newsmessages", force: :cascade do |t|
    t.string   "nombre"
    t.string   "email"
    t.string   "fecha"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "horarios", force: :cascade do |t|
    t.string   "dia",         null: false
    t.time     "hora",        null: false
    t.integer  "curso_id"
    t.integer  "profesor_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["curso_id"], name: "index_horarios_on_curso_id", using: :btree
    t.index ["profesor_id"], name: "index_horarios_on_profesor_id", using: :btree
  end

  create_table "profesors", force: :cascade do |t|
    t.string   "nombre",       null: false
    t.string   "apellido",     null: false
    t.string   "especialidad"
    t.integer  "no_clases"
    t.integer  "salario"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "responders", force: :cascade do |t|
    t.string   "nombre",     null: false
    t.string   "correo",     null: false
    t.text     "mensaje",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tarifas", force: :cascade do |t|
    t.string   "plan",        null: false
    t.string   "nombre",      null: false
    t.integer  "valor",       null: false
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

class CreateMisvis < ActiveRecord::Migration[5.0]
  def change
    create_table :misvis do |t|
      t.string :titulo
      t.text :articulo

      t.timestamps
    end
  end
end

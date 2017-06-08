class CreateMisvis < ActiveRecord::Migration[5.0]
  def change
    create_table :misvis do |t|
      t.string :mision
      t.string :vision
      t.string :nosotros
      t.string :reglamento

      t.timestamps
    end
  end
end

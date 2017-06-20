class CreateHorarios < ActiveRecord::Migration[5.0]
  def change
    create_table :horarios do |t|
      t.string :dia, null: false
      t.integer :hora, null: false
      t.integer :minutos, null: false
      t.string :posicion, null: false
      t.string :calendario, null: false
      t.integer :duracion, null: false
      t.belongs_to :curso, foreign_key: true
      t.belongs_to :profesor, foreign_key: true

      t.timestamps
    end
  end
end

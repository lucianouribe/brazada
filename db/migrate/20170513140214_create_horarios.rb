class CreateHorarios < ActiveRecord::Migration[5.0]
  def change
    create_table :horarios do |t|
      t.string :dia, null: false
      t.time :hora, null: false
      t.belongs_to :curso, foreign_key: true
      t.belongs_to :profesor, foreign_key: true

      t.timestamps
    end
  end
end

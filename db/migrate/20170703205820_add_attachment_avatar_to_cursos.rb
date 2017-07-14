class AddAttachmentAvatarToCursos < ActiveRecord::Migration
  def self.up
    change_table :cursos do |t|
      t.attachment :avatar
    end
  end

  def self.down
    remove_attachment :cursos, :avatar
  end
end

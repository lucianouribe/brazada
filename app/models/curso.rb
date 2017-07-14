require 'pry'
class Curso < ApplicationRecord
  # binding.pry
  validates_presence_of :nombre, :tipo_curso
  validates_inclusion_of :tipo_curso, in: %w(natacion gimnasio hidro mente)

  # has_many horarios, dependent: :destroy
  # has_many profesors, through: :horarios
  # has_many tarifas

  has_attached_file :avatar,
    styles: { medium: "300x300>", thumb: "100x100>" },
    default_url: "/images/:style/missing.png"

  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/
  # validates_attachment :avatar, :presence => true,
  # :content_type => { :content_type => ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'] }
end

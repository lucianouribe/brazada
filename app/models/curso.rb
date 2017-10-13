require 'pry'
class Curso < ApplicationRecord
  # binding.pry
  validates_presence_of :nombre, :tipo_curso
  validates_inclusion_of :tipo_curso, in: %w(natacion gimnasio hidro mente)

  def self.upload_image(image_info)
    # binding.pry
    Cloudinary::Uploader.upload(image_info[:avatar], :public_id => image_info[:nombre], :width => 600, :crop => :limit)
  end

  def self.delete_me(info)
    testing = info.nombre.downcase
    # testing = testing.gsub(' ', '%20')
    # retesting = info.role
    # retesting = retesting.gsub('%20', ' ')
    puts 'delete_me'
    puts testing
    # fijarse si testing deberia ser el nombre del archivo o el archivo mismo!
    # puts retesting
    Cloudinary::Uploader.destroy(testing)
  end

  def self.order_by_nombre
    Curso.order("nombre ASC")
  end
end

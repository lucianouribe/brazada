20.times do
  Tarifa.create(plan: ['integral', 'ninos', 'madres', 'convenio'].sample,
              nombre: ['1 Dia', '1 Semana', 'Mensualidad'].sample,
              valor: rand(12300..456078),
              descripcion: 'bla ble bli blo blu'
              )
end

puts "tarifas seeded"

20.times do
  Profesor.create(nombre: ['pepe', 'pepa', 'pepo', 'pepi'].sample,
              apellido: ['jaramillo', 'restrepo', 'garcia', 'uribe'].sample,
              especialidad: ['natacion', 'hidro', 'gimnacio', 'mente'].sample,
              no_clases: [1, 2, 3, 4].sample,
              salario: 12000
              )
end

puts "profes seeded"

20.times do
  Curso.create(nombre: ['ninos', 'bebes', 'senior', 'mamas'].sample,
              tipo_curso: ['natacion', 'hidro', 'gimnacio', 'mente'].sample,
              descripcion: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
              lugar: ['salon 1', 'salon 2', 'salon 3', 'salon 4', 'piscina'].sample,
              duracion: [1, 2, 1.5].sample
              )
end

puts "cursos seeded"

User.create({:first_name => "test", :last_name => "test", :email => "test@test.com", :role => "admin", :password => "password", :password_confirmation => "password" })

User.create({:first_name => "test", :last_name => "test", :email => "test@gmail.com", :role => "visitor", :password => "password", :password_confirmation => "password" })

puts "user seeded"

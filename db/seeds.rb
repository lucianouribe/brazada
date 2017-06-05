5.times do
  Alumno.create(
              primer_nombre: ['juan', 'jose', 'maria', 'camila'].sample,
              segundo_nombre: ['juan', 'jose', 'maria', 'camila'].sample,
              primer_apellido: ['restrepo', 'acosta', 'uribe', 'jaramillo'].sample,
              segundo_apellido: ['restrepo', 'acosta', 'uribe', 'jaramillo'].sample,
              cedula: rand(1233200..45623078),
              correo: Faker::Internet.email,
              fecha_nacimiento: Faker::Date.between_except(1.year.ago, 1.year.from_now, Date.today),
              direccion: Faker::Address.street_address,
              telefono: rand(1233200..45623078),
              fecha_matriculacion: Faker::Date.between_except(1.year.ago, 1.year.from_now, Date.today),
              programa: ['plan integral', 'semanal', 'mensual', 'dia'].sample,
              nivel: ['caballito de mar', 'medusa', 'caracol', 'pinguino', 'tortuga', 'pulpo', 'tiburon', 'delfin', 'estrellita', 'semillero', 'ninguno', 'adultos', 'bebes'].sample,
              estado: ['activo', 'inactivo', 'retirado'].sample,
              genero: ['masculino', 'femenino'].sample
              )
end

puts "alumnos seeded"

# 20.times do
#   Tarifa.create(
#               plan: ['convenio', 'integral'].sample,
#               nombre: ['dia', 'mensualidad', 'matricula'].sample,
#               cual_curso: ['bebes', 'ninos', 'madres', 'convenio'].sample,
#               valor: rand(12300..456078),
#               descripcion: 'bla ble bli blo blu'
#               )
# end
#
# puts "tarifas seeded"

20.times do
  Profesor.create(nombre: ['pepe', 'pepa', 'pepo', 'pepi'].sample,
              apellido: ['jaramillo', 'restrepo', 'garcia', 'uribe'].sample,
              especialidad: ['natacion', 'hidro', 'gimnacio', 'mente'].sample,
              cual_curso: ['natacion libre', 'bebes', 'ninos', 'adultos', 'buceo'].sample,
              no_clases: [1, 2, 3, 4].sample,
              salario: 12000
              )
end

puts "profes seeded"

# 20.times do
#   Curso.create(nombre: ['ninos', 'bebes', 'senior', 'mamas'].sample,
#               tipo_curso: ['natacion', 'hidro', 'gimnacio', 'mente'].sample,
#               descripcion: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
#               lugar: ['salon 1', 'salon 2', 'salon 3', 'salon 4', 'piscina'].sample,
#               duracion: [1, 2, 1.5].sample
#               )
# end

# puts "cursos seeded"

User.create({:first_name => "test", :last_name => "test", :email => "test@test.com", :role => "admin", :password => "password", :password_confirmation => "password" })

User.create({:first_name => "test", :last_name => "test", :email => "test@gmail.com", :role => "visitor", :password => "password", :password_confirmation => "password" })

puts "user seeded"

Curso.create(nombre: 'natacion libre',
            tipo_curso: 'natacion',
            descripcion: """Natacion libre para que entrenes como quieras""",
            lugar: 'piscina',
            duracion: 1)
Curso.create(nombre: 'bebes',
            tipo_curso: 'natacion',
            descripcion: """Clases desde los seis meses de edad, para que los bebés se familiaricen con el medio acuático, disfruten de él y se recreen, ejerciten su cuerpo y desarrollen habilidades motrices.""",
            lugar: 'piscina',
            duracion: 1)
Curso.create(nombre: 'ninos',
            tipo_curso: 'natacion',
            descripcion: """Enseñanza, entrenamiento.
            Además de ser una herramienta de supervivencia, la práctica de la natación les da a los niños la posibilidad de ejercitarse y de interactuar con sus compañeros en un ambiente de camaradería y amor por la naturaleza.""",
            lugar: 'piscina',
            duracion: 1)
Curso.create(nombre: 'adultos',
            tipo_curso: 'natacion',
            descripcion: """Enseñanza, entrenamiento, Senior master.
            Desde aprender a nadar, hasta entrenar para mejorar su estado físico y perfeccionar algunos detalles de técnica, son las opciones que ofrecemos para las personas adultas.""",
            lugar: 'piscina',
            duracion: 1)
Curso.create(nombre: 'buceo',
            tipo_curso: 'natacion',
            descripcion: """Aprender a bucear es regalarse la oportunidad de vivir las sensaciones y emociones inigualables del mundo subacuático. Espíritu sereno, mente relajada, autoconfianza, comunión con la naturaleza son algunos de los tesoros que nos entregan las aguas profundas""",
            lugar: 'piscina',
            duracion: 1)
Curso.create(nombre: 'spinning',
            tipo_curso: 'gimnacio',
            descripcion: """El ciclismo estático es un entrenamiento de bajo impacto para personas de cualquier edad y condición física. Mejora las capacidades aeróbicas, fortalece los músculos y contribuye a la pérdida de peso.""",
            lugar: 'salon 1',
            duracion: 1)
Curso.create(nombre: 'circuito',
            tipo_curso: 'gimnacio',
            descripcion: """La resistencia aeróbica mejora considerablemente con esta modalidad dinámica y variada de entrenamiento, que se basa en la repetición sincronizada de series de ejercicios. Los músculos se definen sin aumentar su masa, al tiempo que disminuye el tejido graso.""",
            lugar: 'salon 1',
            duracion: 1)
Curso.create(nombre: 'resortes',
            tipo_curso: 'gimnacio',
            descripcion: """Músculos y huesos se benefician con la práctica de resortes. Además de sus bondades fisioterapéuticas, estos ejercicios tonifican y definen los músculos. Según la orientación del trabajo, se puede optar por aumentar o no la masa muscular.""",
            lugar: 'salon 1',
            duracion: 1)
Curso.create(nombre: 'core',
            tipo_curso: 'gimnacio',
            descripcion: """Los ejercicios de core enfatizan en el fortalecimiento de la zona media del cuerpo. Con ellos se mejora la flexibilidad de los movimientos del tronco, se aumenta el equilibrio y la coordinación y se incrementa la firmeza postural, entre otros beneficios.""",
            lugar: 'salon 1',
            duracion: 1)
Curso.create(nombre: 'tono',
            tipo_curso: 'gimnacio',
            descripcion: """La práctica regular de los ejercicios de tono mejora la flexibilidad y fuerza de los músculos y aumenta su rigidez para soportar cargas, bases para conseguir una buena postura. Adicionalmente ayuda en la metabolización de grasas y calorías.""",
            lugar: 'salon 1',
            duracion: 1)
Curso.create(nombre: 'RTG',
            tipo_curso: 'gimnacio',
            descripcion: """Reducción Tejido Graso.
            Las prácticas de RTG combinan el trabajo cardiovascular con el muscular. Sus resultados se muestran en la reducción de los niveles de grasa, la tonificación de los grupos musculares y una mejor condición física.""",
            lugar: 'salon 1',
            duracion: 1)
Curso.create(nombre: 'hidrogimnacia especial',
            tipo_curso: 'hidro',
            descripcion: """El agua es un medio adecuado para rehabilitar y reincorporar a las actividades de su vida diaria a las personas que así lo necesiten. La fuerza hidrostática exige menos esfuerzo del corazón y a la vez potencia el trabajo de los sistemas óseo y muscular.""",
            lugar: 'salon 1',
            duracion: 1)
Curso.create(nombre: 'hidro adulto mayor',
            tipo_curso: 'hidro',
            descripcion: """El sol. El aire libre y el agua tienen un efecto revitalizante. Los ejercicios que se hacen en el medio acuático son de bajo impacto y tienen resultados favorables en los músculos, sistema cardiorespiratorio y en la elasticidad, además disminuyen el estrés.""",
            lugar: 'salon 1',
            duracion: 1)
Curso.create(nombre: 'pilates',
            tipo_curso: 'mente',
            descripcion: """Un cuerpo elástico y armonioso, con músculos fuertes y definidos, es la promesa de la práctica de Pilates. Pero además este sistema de ejercicio, basado en la respiración y la coordinación de movimientos precisos, relaja la mente y disminuye el estrés.""",
            lugar: 'salon 1',
            duracion: 1)
Curso.create(nombre: 'pilates reformer',
            tipo_curso: 'mente',
            descripcion: """El método Pilates es un sistema de ejercicios que se ha demostrado eficaz en la corrección postural y la rehabilitación de las lesiones. Es un pilar básico en la recuperación del movimiento con técnicas actualizadas las cuales nos muestran el potencial terapéutico de esta disciplina. Pilates para rehabilitación está dirigido a personas con dolencias del sistema músculo-esquelético y su objetivo es lograr la alineación corporal, la tonificación eficiente de la musculatura, el control del movimiento y el movimiento funcional sin dolor. Esto es debido a que Pilates integra de manera armónica el acondicionamiento físico y el control de la mente sobre el cuerpo y el movimiento.""",
            lugar: 'salon 1',
            duracion: 1)
Curso.create(nombre: 'yoga',
            tipo_curso: 'mente',
            descripcion: """Yoga quiere decir unión: armonía de cuerpo, mente y espíritu. Sus asanas o posturas han sido practicadas durante cientos de años y nos ayudan a conseguir un cuerpo sensible y vigoroso, una mente alerta y unas emociones serenas.""",
            lugar: 'salon 1',
            duracion: 1)
Curso.create(nombre: 'balance corporal',
            tipo_curso: 'mente',
            descripcion: """En una sola sesión se practican asanas de yoga, ejercicios de pilates y movimientos de tai-chi, en una combinación pensada para armonizar el cuerpo y la mente.""",
            lugar: 'salon 1',
            duracion: 1)
Curso.create(nombre: 'yoga pilates',
            tipo_curso: 'mente',
            descripcion: """Una modalidad de la práctica del yoga, que se complementa con ejercicios de pilates cuidadosamente elegidos para un beneficio óptimo.""",
            lugar: 'salon 1',
            duracion: 1)
Curso.create(nombre: 'masajes',
            tipo_curso: 'mente',
            descripcion: """Relajacion, Reductores.
            Undfln m omo wmom  ojweoj woj woj weoj eowejowjo joejoewj oj eowj oewj oej ewoj weoj a modalidad de la práctica del yoga, que se complementa con ejercicios de pilates cuidadosamente elegidos para un beneficio óptimo.""",
            lugar: 'salon 1',
            duracion: 1)
Curso.create(nombre: 'stretching',
            tipo_curso: 'mente',
            descripcion: """Mediante determinadas posiciones corporales se logra la relajación, apertura y estiramiento de distintas zonas del cuerpo. La meta es recuperar una postura armónica y natural, alineando cabeza, hombros, columna, caderas y extremidades.""",
            lugar: 'salon 1',
            duracion: 1)



puts "cursos seeded"


Tarifa.create(
            plan: 'Plan Integral',
            nombre: 'Día, Mensualidad, Matrícula',
            valor: '28000, 180000, 70000',
            descripcion: 'Natación libre, hidro, pilates, yoga, spinning, circuito, tono, resortes y stretching'
            )
Tarifa.create(
            plan: 'Plan Jóvenes',
            nombre: 'Mensualidad',
            valor: '112000',
            descripcion: 'Estudiantes con carnet'
            )
Tarifa.create(
            plan: 'Natación bebés, niños y equipo jóvenes',
            nombre: 'Matrícula, 1 vez x semana, 2 veces x semana, 3 veces x semana, 1 día familiar cliente, 1 clase de natación',
            valor: '70000, 165000, 245000, 260000, 16000, 45000',
            descripcion: ''
            )
Tarifa.create(
            plan: 'Intensivos',
            nombre: '1 día, 10 días',
            valor: '38000, 320000',
            descripcion: 'Julio y Diciembre'
            )
Tarifa.create(
            plan: 'Clases Personalizadas de Natación',
            nombre: '1 clase, 1 clase x 2 personas',
            valor: '58000, 45000 cu',
            descripcion: ''
            )
Tarifa.create(
            plan: 'Natación Adulto',
            nombre: '1 vez x semana, 2 veces x semana',
            valor: '165000, 245000',
            descripcion: 'Enseñanza'
            )
Tarifa.create(
            plan: 'Natación Adulto',
            nombre: '2 veces x semana, 3 veces x semana, 4 veces x semana',
            valor: '180000, 200000, 220000',
            descripcion: 'Senior Master'
            )
Tarifa.create(
            plan: 'Hidrogimnacia Especial',
            nombre: '1 sesión (grupo), 10 sesiones (grupo), Personalizada',
            valor: '33000, 270000, 58000',
            descripcion: ''
            )
Tarifa.create(
            plan: 'Masajes Relajantes',
            nombre: '30 minutos',
            valor: '35000',
            descripcion: ''
            )
Tarifa.create(
            plan: 'Masajes Reductores',
            nombre: '60 minutos, Paquete 10 sesiones',
            valor: '50000, 300000',
            descripcion: ''
            )
Tarifa.create(
            plan: 'Pilates Reformer y Entrenamiento',
            nombre: '1 vez x semana, 2 veces x semana, 3 veces x semana, 4 veces x semana, 5 veces x semana, Bono 5 sesiones, Bono 10 sesiones',
            valor: '205000, 370000, 513000, 625000, 666000, 250000, 470000',
            descripcion: ''
            )

puts "tarifas seeded"

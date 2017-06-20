5.times do
  Alumno.create(
              primer_nombre: ['juan', 'jose', 'maria', 'camila'].sample,
              segundo_nombre: ['juan', 'jose', 'maria', 'camila'].sample,
              primer_apellido: ['restrepo', 'acosta', 'uribe', 'jaramillo'].sample,
              segundo_apellido: ['restrepo', 'acosta', 'uribe', 'jaramillo'].sample,
              cedula: rand(1933200..45623078),
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

Misvi.create(titulo: 'nosotros',
              articulo: 'Brazada es una institución donde trabajamos con entusiasmo por enseñar y propiciar la práctica de actividades deportivas y de acondicionamiento físico. Nacimos en 1990, como Academia de Natación de Pablo Restrepo, y a partir de nuestra convicción de que enseñar a nadar es regalar a otros la oportunidad de gozar de bienestar, salud física y mental, incluimos con el tiempo más actividades que aportaran iguales beneficios.
              Brazada es un espacio amable, lleno de verde y de luz, con excelentes instalaciones para cada práctica. Quienes nos visitan se sienten acogidos en un ambiente familiar y tranquilo, y reciben la atención cálida y personalizada de nuestros instructores profesionales. En Brazada sabemos que la alegría y la tranquilidad interior provienen de sentir sanos y en equilibrio nuestro cuerpo y nuestra mente. ¡Y además sabemos cómo acompañarlo para que usted lo viva!.

              Un plan integral para usted
              En Brazada reconocemos la individualidad de las personas. Por eso diseñamos un Plan Integral con el que cada usuario, de acuerdo con sus necesidades, deseos y disponibilidad, organiza su plan de entrenamiento físico. Con el pago de una mensualidad, usted puede elegir las prácticas y horarios que más le convengan. Consulte aquí información completa sobre programas, instructores, horarios y tarifas.')
Misvi.create(titulo: 'reglamento',
              articulo: 'Normas para la utilización de los espacios


              Gimnasio
              • Utilizar tenis, camiseta y toalla pequeña para el sudor.
              • No entrar de sandalias, descalzos o mojados, ni comer en los salones de clase.
              • Tener en cuenta las indicaciones del manejo adecuado de las máquinas.
              • Área exclusiva para jóvenes y adultos.


              Salón segundo piso
              • Dejar los zapatos fuera del salón.
              • Traer toalla para colchonetas o mat.
              • Área exclusiva para jóvenes y adultos.


              Piscina
              • Utilizar pantaloneta de Licra (niños, jóvenes y adultos).
              • Utilizar de carácter obligatorio el GORRO DE BAÑO para ambos sexos.
              • DUCHARSE antes de ingresar.
              • Pasar por el lavapies a la entrada y a la salida.
              • No ingresar alimentos o bebidas al área de la piscina.
              • No ingresar calzado de la calle al área de la piscina.
              • No usar bronceador para ingresar a la piscina.


              Clases de natación personalizadas
              • Pagar por anticipado las clases que tome durante el mes.
              • En caso de ser necesario, cancelar la clase antes de 2 horas.
              • En caso de cancelar la clase oportunamente, ésta se podrá reemplazar durante el mismo mes o de lo contrario perderá su dinero.


              Clases de natación niños
              • Programar día y hora de clase y cumplir con ese horario.
              • Sólo en caso de enfermedad se pueden reemplazar las clases a las que no asistió.
              • Presentar la excusa médica y acordar con la coordinadora día y hora del reemplazo (nunca en día sábado).
              • Llevar a los niños al baño antes de ingresar a la piscina.
              • Pagar oportunamente la mensualidad para tener el derecho al descuento por hermanos y a la reposición de clases.
              • Nunca dejar ingresar a los niños al área de la piscina solos; deben hacerlo con un adulto o con el instructor.
              • Se cancela el mes completo. En caso de inasistencia por enfermedad, se reemplazará la clase durante el mismo mes o en el siguiente, pasado este tiempo se pierde la clase.


              Baños
              • Hacer uso adecuado de las toallas desechables para manos, (no utilizarlas para secarse el cabello).
              • Tomarse el tiempo justo para la ducha.
              • Abstenerse de dejar la llave del agua abierta para lavar el vestido de baño mientras se ducha, se enjabona o se lava el cabello.
              • Los niños de 5 años en adelante deben utilizar el baño de acuerdo a su sexo.


              Parqueadero
              • Dejar el carro bien cerrado y no dejar objetos de valor.
              • No dejar niños solos en el carro.
              • No ocupar dos celdas en el momento de parquear.
              • La Academia no se hace responsable de pérdidas.


              Generales
              • No traer objetos de valor.
              • Hacer uso del locker. No se permitirá dejar objetos y bolsos en la recepción.
              • No ingresar mascotas.
              • El café es una cortesía. Solicitarlo directamente en la cafetería y agradecemos el uso moderado de él.
              • Hacer los pagos de las mensualidades oportunamente.
              • La mensualidad se paga los primeros cinco días del mes.
              • Recuerde que el pago es mensual. Al tener el cupo reservado, la academia cuenta con su asistencia al momento de asignar los instructores. NO SE COBRA POR CLASE ASISTIDA, SINO POR CUPO RESERVADO.
              • En ningún caso habrá excepciones.
              Leído y comprendido')
Misvi.create(titulo: 'mision',
              articulo: 'este es un texto sobre nuestra mision')
Misvi.create(titulo: 'vision',
              articulo: 'este es un texto sobre nuestra vision')

puts "misvis seeded"



User.create({:first_name => "test", :last_name => "test", :email => "test@test.com", :role => "admin", :password => "password", :password_confirmation => "password" })

User.create({:first_name => "test", :last_name => "test", :email => "test@gmail.com", :role => "visitor", :password => "password", :password_confirmation => "password" })

puts "user seeded"

Curso.create(nombre: 'natacion libre',
            tipo_curso: 'natacion',
            descripcion: """Natacion libre para que entrenes como quieras""",
            lugar: 'piscina')
Curso.create(nombre: 'bebes',
            tipo_curso: 'natacion',
            descripcion: """Clases desde los seis meses de edad, para que los bebés se familiaricen con el medio acuático, disfruten de él y se recreen, ejerciten su cuerpo y desarrollen habilidades motrices.""",
            lugar: 'piscina')
Curso.create(nombre: 'ninos',
            tipo_curso: 'natacion',
            descripcion: """Enseñanza, entrenamiento.
            Además de ser una herramienta de supervivencia, la práctica de la natación les da a los niños la posibilidad de ejercitarse y de interactuar con sus compañeros en un ambiente de camaradería y amor por la naturaleza.""",
            lugar: 'piscina')
Curso.create(nombre: 'jovenes',
            tipo_curso: 'natacion',
            descripcion: """Entrenamiento.
            Además de ser una herramienta de supervivencia, la práctica de la natación les da a los niños la posibilidad de ejercitarse y de interactuar con sus compañeros en un ambiente de camaradería y amor por la naturaleza.""",
            lugar: 'piscina')
Curso.create(nombre: 'adultos',
            tipo_curso: 'natacion',
            descripcion: """Enseñanza, entrenamiento, Senior master.
            Desde aprender a nadar, hasta entrenar para mejorar su estado físico y perfeccionar algunos detalles de técnica, son las opciones que ofrecemos para las personas adultas.""",
            lugar: 'piscina')
Curso.create(nombre: 'senior master',
            tipo_curso: 'natacion',
            descripcion: """Entrenamiento.
            Desde aprender a nadar, hasta entrenar para mejorar su estado físico y perfeccionar algunos detalles de técnica, son las opciones que ofrecemos para las personas adultas.""",
            lugar: 'piscina')
Curso.create(nombre: 'spinning',
            tipo_curso: 'gimnasio',
            descripcion: """El ciclismo estático es un entrenamiento de bajo impacto para personas de cualquier edad y condición física. Mejora las capacidades aeróbicas, fortalece los músculos y contribuye a la pérdida de peso.""",
            lugar: 'salon 1')
Curso.create(nombre: 'rumba',
            tipo_curso: 'gimnasio',
            descripcion: """Baila y bla bla bla""",
            lugar: 'salon 1')
Curso.create(nombre: 'circuito',
            tipo_curso: 'gimnasio',
            descripcion: """La resistencia aeróbica mejora considerablemente con esta modalidad dinámica y variada de entrenamiento, que se basa en la repetición sincronizada de series de ejercicios. Los músculos se definen sin aumentar su masa, al tiempo que disminuye el tejido graso.""",
            lugar: 'salon 1')
Curso.create(nombre: 'resortes',
            tipo_curso: 'gimnasio',
            descripcion: """(fortalecimiento???)Músculos y huesos se benefician con la práctica de resortes. Además de sus bondades fisioterapéuticas, estos ejercicios tonifican y definen los músculos. Según la orientación del trabajo, se puede optar por aumentar o no la masa muscular.""",
            lugar: 'salon 1')
Curso.create(nombre: 'core',
            tipo_curso: 'gimnasio',
            descripcion: """Los ejercicios de core enfatizan en el fortalecimiento de la zona media del cuerpo. Con ellos se mejora la flexibilidad de los movimientos del tronco, se aumenta el equilibrio y la coordinación y se incrementa la firmeza postural, entre otros beneficios.""",
            lugar: 'salon 1')
Curso.create(nombre: 'tono',
            tipo_curso: 'gimnasio',
            descripcion: """La práctica regular de los ejercicios de tono mejora la flexibilidad y fuerza de los músculos y aumenta su rigidez para soportar cargas, bases para conseguir una buena postura. Adicionalmente ayuda en la metabolización de grasas y calorías.""",
            lugar: 'salon 1')
Curso.create(nombre: 'RTG',
            tipo_curso: 'gimnasio',
            descripcion: """Reducción Tejido Graso.
            Las prácticas de RTG combinan el trabajo cardiovascular con el muscular. Sus resultados se muestran en la reducción de los niveles de grasa, la tonificación de los grupos musculares y una mejor condición física.""",
            lugar: 'salon 1')
Curso.create(nombre: 'hidrogimnasia',
            tipo_curso: 'hidro',
            descripcion: """El agua es un medio adecuado para rehabilitar y reincorporar a las actividades de su vida diaria a las personas que así lo necesiten. La fuerza hidrostática exige menos esfuerzo del corazón y a la vez potencia el trabajo de los sistemas óseo y muscular.""",
            lugar: 'salon 1')
Curso.create(nombre: 'hidrogimnasia especial',
            tipo_curso: 'hidro',
            descripcion: """El agua es un medio adecuado para rehabilitar y reincorporar a las actividades de su vida diaria a las personas que así lo necesiten. La fuerza hidrostática exige menos esfuerzo del corazón y a la vez potencia el trabajo de los sistemas óseo y muscular.""",
            lugar: 'salon 1')
Curso.create(nombre: 'hidro adulto mayor',
            tipo_curso: 'hidro',
            descripcion: """El sol. El aire libre y el agua tienen un efecto revitalizante. Los ejercicios que se hacen en el medio acuático son de bajo impacto y tienen resultados favorables en los músculos, sistema cardiorespiratorio y en la elasticidad, además disminuyen el estrés.""",
            lugar: 'salon 1')
Curso.create(nombre: 'pilates',
            tipo_curso: 'mente',
            descripcion: """Un cuerpo elástico y armonioso, con músculos fuertes y definidos, es la promesa de la práctica de Pilates. Pero además este sistema de ejercicio, basado en la respiración y la coordinación de movimientos precisos, relaja la mente y disminuye el estrés.""",
            lugar: 'salon 1')
Curso.create(nombre: 'pilates reformer',
            tipo_curso: 'mente',
            descripcion: """El método Pilates es un sistema de ejercicios que se ha demostrado eficaz en la corrección postural y la rehabilitación de las lesiones. Es un pilar básico en la recuperación del movimiento con técnicas actualizadas las cuales nos muestran el potencial terapéutico de esta disciplina. Pilates para rehabilitación está dirigido a personas con dolencias del sistema músculo-esquelético y su objetivo es lograr la alineación corporal, la tonificación eficiente de la musculatura, el control del movimiento y el movimiento funcional sin dolor. Esto es debido a que Pilates integra de manera armónica el acondicionamiento físico y el control de la mente sobre el cuerpo y el movimiento.""",
            lugar: 'salon 1')
Curso.create(nombre: 'yoga',
            tipo_curso: 'mente',
            descripcion: """Yoga quiere decir unión: armonía de cuerpo, mente y espíritu. Sus asanas o posturas han sido practicadas durante cientos de años y nos ayudan a conseguir un cuerpo sensible y vigoroso, una mente alerta y unas emociones serenas.""",
            lugar: 'salon 1')
Curso.create(nombre: 'balance corporal',
            tipo_curso: 'mente',
            descripcion: """En una sola sesión se practican asanas de yoga, ejercicios de pilates y movimientos de tai-chi, en una combinación pensada para armonizar el cuerpo y la mente.""",
            lugar: 'salon 1')
Curso.create(nombre: 'yoga pilates',
            tipo_curso: 'mente',
            descripcion: """Una modalidad de la práctica del yoga, que se complementa con ejercicios de pilates cuidadosamente elegidos para un beneficio óptimo.""",
            lugar: 'salon 1')
Curso.create(nombre: 'masajes',
            tipo_curso: 'mente',
            descripcion: """Relajacion, Reductores.
            Undfln m omo wmom  ojweoj woj woj weoj eowejowjo joejoewj oj eowj oewj oej ewoj weoj a modalidad de la práctica del yoga, que se complementa con ejercicios de pilates cuidadosamente elegidos para un beneficio óptimo.""",
            lugar: 'salon 1')
Curso.create(nombre: 'stretching',
            tipo_curso: 'mente',
            descripcion: """Mediante determinadas posiciones corporales se logra la relajación, apertura y estiramiento de distintas zonas del cuerpo. La meta es recuperar una postura armónica y natural, alineando cabeza, hombros, columna, caderas y extremidades.""",
            lugar: 'salon 1')



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
            plan: 'hidrogimnasia Especial',
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


Profesor.create(nombre: 'Juan Diego',
            apellido: 'something',
            especialidad: 'gimnasio',
            cual_curso: 'spinning, circuito, tono, fortalecimiento',
            no_clases: 0,
            salario: 0
            )
Profesor.create(nombre: 'Alejandro',
            apellido: 'something',
            especialidad: 'gimnasio',
            cual_curso: 'spinning, pilates, stretching, yoga pilates',
            no_clases: 0,
            salario: 0
            )
Profesor.create(nombre: 'Alonso',
            apellido: 'something',
            especialidad: 'mente',
            cual_curso: 'yoga',
            no_clases: 0,
            salario: 0
            )
Profesor.create(nombre: 'William',
            apellido: 'something',
            especialidad: 'gimnasio',
            cual_curso: 'pilates, rumba',
            no_clases: 0,
            salario: 0
            )
Profesor.create(nombre: 'Maria Isabel',
            apellido: 'something',
            especialidad: 'mente',
            cual_curso: 'yoga',
            no_clases: 0,
            salario: 0
            )
Profesor.create(nombre: 'Natalia',
            apellido: 'something',
            especialidad: 'mente',
            cual_curso: 'yoga, balance corporal',
            no_clases: 0,
            salario: 0
            )
Profesor.create(nombre: 'Monica',
            apellido: 'Torres',
            especialidad: 'hidro',
            cual_curso: 'hidrogimnasia, hidro adulto mayor',
            no_clases: 0,
            salario: 0
            )
Profesor.create(nombre: 'Sandra',
            apellido: 'something',
            especialidad: 'hidro',
            cual_curso: 'hidrogimnasia, hidrogimnasia especial',
            no_clases: 0,
            salario: 0
            )
Profesor.create(nombre: 'Lina',
            apellido: 'something',
            especialidad: 'hidro',
            cual_curso: 'hidrogimnasia',
            no_clases: 0,
            salario: 0
            )
Profesor.create(nombre: 'Yakelin',
            apellido: 'something',
            especialidad: 'hidro',
            cual_curso: 'hidrogimnasia, hidrogimnasia especial',
            no_clases: 0,
            salario: 0
            )
Profesor.create(nombre: 'Gyna',
            apellido: 'something',
            especialidad: 'hidro',
            cual_curso: 'hidro adulto mayor',
            no_clases: 0,
            salario: 0
            )
Profesor.create(nombre: 'Marsha',
            apellido: 'Blair',
            especialidad: 'natacion',
            cual_curso: 'jovenes',
            no_clases: 0,
            salario: 0
            )
Profesor.create(nombre: 'Juan',
            apellido: 'something',
            especialidad: 'natacion',
            cual_curso: 'adultos',
            no_clases: 0,
            salario: 0
            )
Profesor.create(nombre: 'Horacio',
            apellido: 'Longas',
            especialidad: 'natacion',
            cual_curso: 'senior master',
            no_clases: 0,
            salario: 0
            )

puts "profes seeded"

Horario.create(
            dia: 'martes',
            hora: '17',
            minutos: '0',
            posicion: 'm-17',
            calendario: 'entrenamiento',
            curso_id: '4',
            profesor_id: '12',
            duracion: 60
            )
Horario.create(
            dia: 'miercoles',
            hora: '17',
            minutos: '0',
            posicion: 'w-17',
            calendario: 'entrenamiento',
            curso_id: '4',
            profesor_id: '12',
            duracion: 60
            )
Horario.create(
            dia: 'jueves',
            hora: '17',
            minutos: '0',
            posicion: 'j-17',
            calendario: 'entrenamiento',
            curso_id: '4',
            profesor_id: '12',
            duracion: 60
            )
Horario.create(
            dia: 'martes',
            hora: '18',
            minutos: '0',
            posicion: 'm-18',
            calendario: 'entrenamiento',
            curso_id: '4',
            profesor_id: '12',
            duracion: 60
            )
Horario.create(
            dia: 'miercoles',
            hora: '18',
            minutos: '0',
            posicion: 'w-18',
            calendario: 'entrenamiento',
            curso_id: '4',
            profesor_id: '12',
            duracion: 60
            )
Horario.create(
            dia: 'jueves',
            hora: '18',
            minutos: '0',
            posicion: 'j-18',
            calendario: 'entrenamiento',
            curso_id: '4',
            profesor_id: '12',
            duracion: 60
            )
Horario.create(
            dia: 'lunes',
            hora: '12',
            minutos: '0',
            posicion: 'l-12',
            calendario: 'entrenamiento',
            curso_id: '6',
            profesor_id: '14',
            duracion: 60
            )
Horario.create(
            dia: 'martes',
            hora: '12',
            minutos: '0',
            posicion: 'm-12',
            calendario: 'entrenamiento',
            curso_id: '6',
            profesor_id: '14',
            duracion: 60
            )
Horario.create(
            dia: 'miercoles',
            hora: '12',
            minutos: '0',
            posicion: 'w-12',
            calendario: 'entrenamiento',
            curso_id: '6',
            profesor_id: '14',
            duracion: 60
            )
Horario.create(
            dia: 'jueves',
            hora: '12',
            minutos: '0',
            posicion: 'j-12',
            calendario: 'entrenamiento',
            curso_id: '6',
            profesor_id: '14',
            duracion: 60
            )
Horario.create(
            dia: 'viernes',
            hora: '12',
            minutos: '0',
            posicion: 'v-12',
            calendario: 'entrenamiento',
            curso_id: '6',
            profesor_id: '14',
            duracion: 60
            )
Horario.create(
            dia: 'lunes',
            hora: '19',
            minutos: '0',
            posicion: 'l-19',
            calendario: 'entrenamiento',
            curso_id: '6',
            profesor_id: '14',
            duracion: 60
            )
Horario.create(
            dia: 'martes',
            hora: '19',
            minutos: '0',
            posicion: 'm-19',
            calendario: 'entrenamiento',
            curso_id: '6',
            profesor_id: '14',
            duracion: 60
            )
Horario.create(
            dia: 'miercoles',
            hora: '19',
            minutos: '0',
            posicion: 'w-19',
            calendario: 'entrenamiento',
            curso_id: '6',
            profesor_id: '14',
            duracion: 60
            )
Horario.create(
            dia: 'jueves',
            hora: '19',
            minutos: '0',
            posicion: 'j-19',
            calendario: 'entrenamiento',
            curso_id: '6',
            profesor_id: '14',
            duracion: 60
            )

Horario.create(
            dia: 'miercoles',
            hora: '6',
            minutos: '0',
            posicion: 'w-6',
            calendario: 'entrenamiento',
            curso_id: '8',
            profesor_id: '14',
            duracion: 60
            )
Horario.create(
            dia: 'viernes',
            hora: '6',
            minutos: '0',
            posicion: 'v-6',
            calendario: 'entrenamiento',
            curso_id: '8',
            profesor_id: '14',
            duracion: 60
            )
Horario.create(
            dia: 'miercoles',
            hora: '6',
            minutos: '0',
            posicion: 'w-6',
            calendario: 'gimnasio',
            curso_id: '7',
            profesor_id: '1',
            duracion: 30
            )
Horario.create(
            dia: 'lunes',
            hora: '7',
            minutos: '0',
            posicion: 'l-7',
            calendario: 'gimnasio',
            curso_id: '7',
            profesor_id: '1',
            duracion: 30
            )
Horario.create(
            dia: 'miercoles',
            hora: '8',
            minutos: '0',
            posicion: 'w-8',
            calendario: 'gimnasio',
            curso_id: '7',
            profesor_id: '1',
            duracion: 30
            )
Horario.create(
            dia: 'lunes',
            hora: '18',
            minutos: '0',
            posicion: 'l-18',
            calendario: 'gimnasio',
            curso_id: '7',
            profesor_id: '1',
            duracion: 30
            )
Horario.create(
            dia: 'miercoles',
            hora: '18',
            minutos: '0',
            posicion: 'w-18',
            calendario: 'gimnasio',
            curso_id: '7',
            profesor_id: '1',
            duracion: 30
            )


puts "horarios seeded"

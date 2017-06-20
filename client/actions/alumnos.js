import { destildador } from '../helpers';

export const fetchAlumnos = (wordToMatch) => {
  // console.log('this is fetch alumnos')
  const regex = new RegExp(wordToMatch, 'gi');

  return(dispatch) => {
    $.ajax({
      url: '/api/alumnos/',
      type: 'GET',
      dataType: 'JSON'
    }).done( alumnos => {
      if(wordToMatch === 'full') {
        dispatch({ type: 'ALL_ALUMNOS', alumnos});
      } else {
        let losAlumnos = alumnos.filter( alumno => {
          if(
            destildador(alumno.primer_nombre).match(regex) || destildador(alumno.segundo_nombre).match(regex) || destildador(alumno.primer_apellido).match(regex)|| destildador(alumno.segundo_apellido).match(regex)|| destildador(alumno.cedula).match(regex) || destildador(alumno.correo).match(regex)
          ) return alumno;
        })
        // console.table(losAlumnos)
        dispatch({ type: 'FILTERED_ALUMNOS', losAlumnos});
      }
    }).fail( data => {
      // console.log('fetch alumnos fail data')
      // console.log(data)
    })
  }

}

export const deleteAlumno = (id) => {
  // console.log(`this is delete alumno con id: ${id}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/alumnos/${id}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data => {
      console.log('delete alumon done data');
      console.log(data);
      dispatch({ type: 'DELETE_ALUMNO', id });
    }).fail( data => {
      console.log(data);
    })
  }
}

export const editAlumno = (id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, cedula, correo, fecha_nacimiento, direccion, telefono, fecha_matriculacion, programa, nivel, estado, genero) => {
  console.log(`this is edit alumno con id: ${id}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/alumnos/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { alumno: { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, cedula, correo, fecha_nacimiento, direccion, telefono, fecha_matriculacion, programa, nivel, estado, genero } }
    }).done( alumno => {
      console.log('edit alumno done data');
      console.table(alumno);
      dispatch({ type: 'EDIT_ALUMNO', alumno });
    }).fail( data => {
      console.log('edit alumno fail data')
      console.log(data);
    })
  }
}

export const addAlumno = ( primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, cedula, correo, fecha_nacimiento, direccion, telefono, fecha_matriculacion, programa, nivel, estado, genero ) => {
  console.log('this is add alumnos action');
  return(dispatch) => {
    $.ajax({
      url: `/api/alumnos`,
      type: 'POST',
      dataType: 'JSON',
      data: { alumno: { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, cedula, correo, fecha_nacimiento, direccion, telefono, fecha_matriculacion, programa, nivel, estado, genero } }
    }).done( alumno => {
      console.log('add alumno done data');
      console.table(alumno);
      dispatch({ type: 'ADD_ALUMNO', alumno });
    }).fail( data => {
      console.log('add alumno fail data')
      console.log(data);
    })
  }

}

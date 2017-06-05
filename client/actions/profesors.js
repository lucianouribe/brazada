export const addProfesor = (nombre, apellido, especialidad, cual_curso, no_clases, salario) => {
  // console.log('this is add profesors action');
  return(dispatch) => {
    $.ajax({
      url: `/api/profesors`,
      type: 'POST',
      dataType: 'JSON',
      data: { profesor: { nombre, apellido, especialidad, cual_curso, no_clases, salario } }
    }).done( profesor => {
      // console.log('add profesor done data');
      // console.table(profesor);
      dispatch({ type: 'ADD_PROFESOR', profesor });
    }).fail( data => {
      console.log('add profesor fail data')
      console.log(data);
    })
  }

}

export const fetchProfesors = () => {
  // console.log('this is fetch profesors')
  return(dispatch) => {
    $.ajax({
      url: '/api/profesors/',
      type: 'GET',
      dataType: 'JSON'
    }).done( profesors => {
      // console.log('fetch profesors done data');
      // console.table(profesors);
      dispatch({ type: 'ALL_PROFESORS', profesors});
    }).fail( data => {
      console.log('fetch profesors fail data')
      console.log(data)
    })
  }

}

export const editProfesor = (id, nombre, apellido, especialidad, cual_curso, no_clases, salario) => {
  // console.log(`this is edit profesor con id: ${id}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/profesors/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { profesor: { nombre, apellido, especialidad, cual_curso, no_clases, salario } }
    }).done( profesor => {
      // console.log('edit profesor done data');
      // console.table(profesor);
      dispatch({ type: 'EDIT_PROFESOR', profesor });
    }).fail( data => {
      console.log('edit profesor fail data')
      console.log(data);
    })
  }
}

export const deleteProfesor = (id) => {
  // console.log(`this is delete profesor con id: ${id}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/profesors/${id}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data => {
      // console.log('delete profesor done data');
      // console.log(data);
      dispatch({ type: 'DELETE_PROFESOR', id });
    }).fail( data => {
      console.log('delete profesor data')
      console.log(data);
    })
  }
}

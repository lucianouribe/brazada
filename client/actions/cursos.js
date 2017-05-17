export const addCurso = (nombre, lugar, descripcion, tipo_curso, duracion) => {
  // console.log('this is add cursos action');
  return(dispatch) => {
    $.ajax({
      url: `/api/cursos`,
      type: 'POST',
      dataType: 'JSON',
      data: { curso: { nombre, lugar, descripcion, tipo_curso, duracion } }
    }).done( curso => {
      // console.log('add curso done data');
      // console.table(curso);
      dispatch({ type: 'ADD_CURSO', curso });
    }).fail( data => {
      // console.log('add curso fail data')
      // console.log(data);
    })
  }

}

export const fetchCursos = () => {
  // console.log('this is fetch cursos')
  return(dispatch) => {
    $.ajax({
      url: '/api/cursos/',
      type: 'GET',
      dataType: 'JSON'
    }).done( cursos => {
      // console.log('fetch cursos done data');
      // console.table(cursos);
      dispatch({ type: 'ALL_CURSOS', cursos});
    }).fail( data => {
      // console.log('fetch cursos fail data')
      // console.log(data)
    })
  }

}

export const editCurso = (id, nombre, lugar, descripcion, tipo_curso, duracion) => {
  // console.log(`this is edit curso con id: ${id}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/cursos/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { curso: { nombre, lugar, descripcion, tipo_curso, duracion } }
    }).done( curso => {
      // console.log('edit curso done data');
      // console.table(curso);
      dispatch({ type: 'EDIT_CURSO', curso });
    }).fail( data => {
      // console.log('edit curso fail data')
      // console.log(data);
    })
  }
}

export const deleteCurso = (id) => {
  // console.log(`this is delete curso con id: ${id}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/cursos/${id}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data => {
      // console.log('delete curso done data');
      // console.log(data);
      dispatch({ type: 'DELETE_CURSO', id });
    }).fail( data => {
      console.log(data);
    })
  }
}

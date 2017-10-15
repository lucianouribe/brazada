import { destildador } from '../helpers';

export const addCurso = (nombre, lugar, descripcion, tipo_curso, url_direccion, avatar) => {
  let formData = new FormData();
  formData.append('nombre', nombre);
  formData.append('lugar', lugar);
  formData.append('descripcion', descripcion);
  formData.append('tipo_curso', tipo_curso);
  formData.append('url_direccion', url_direccion);
  formData.append('avatar', avatar);
  return(dispatch) => {
    $.ajax({
      url: `/api/cursos`,
      type: 'POST',
      data: formData,
      contentType: false,
      processData: false
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

export const fetchCursos = (wordToMatch) => {
  // console.log('this is fetch cursos')
  const regex = new RegExp(wordToMatch, 'gi');

  return(dispatch) => {
    $.ajax({
      url: '/api/cursos/',
      type: 'GET',
      dataType: 'JSON'
    }).done( cursos => {
      if(wordToMatch === 'full') {
        dispatch({ type: 'ALL_CURSOS', cursos});
      } else {
        let losCursos = cursos.filter( curso => {
          if(
            destildador(curso.nombre).match(regex)
          ) return curso;
        })
        // console.table(losCursos)
        dispatch({ type: 'FILTERED_CURSOS', losCursos});
      }
    }).fail( data => {
      // console.log('fetch cursos fail data')
      // console.log(data)
    })
  }

}

export const editCurso = (id, nombre, lugar, descripcion, tipo_curso, url_direccion, avatar) => {
  // console.log(`this is edit curso con id: ${id}`)
  // console.log(nombre)
  // console.log(url_direccion)
  // console.log(avatar)
  let formData = new FormData();
  formData.append('nombre', nombre);
  formData.append('lugar', lugar);
  formData.append('descripcion', descripcion);
  formData.append('tipo_curso', tipo_curso);
  formData.append('url_direccion', url_direccion);
  formData.append('avatar', avatar);
  return(dispatch) => {
    $.ajax({
      url: `/api/cursos/${id}`,
      type: 'PUT',
      data: formData,
      contentType: false,
      processData: false
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
      // console.log(data);
    })
  }
}


// export const addCurso = (nombre, lugar, descripcion, tipo_curso, avatar) => {
//   console.log('this is add cursos action');
//   return(dispatch) => {
//     const formData = new FormData()
//     formData.append("avatar", avatar);
//     formData.append("nombre", nombre);
//     formData.append("lugar", lugar);
//     formData.append("descripcion", descripcion);
//     formData.append("tipo_curso", tipo_curso);

//     $.ajax({
//       url: `/api/cursos`,
//       type: 'POST',
//       cache: false,
//       // contentType: 'multipart/form-data',
//       dataType: 'json',
//       processData: false,
//       contentType: false,
//       // data: formData,
//       data: { curso: formData },
//       // data: { curso: { nombre, lugar, descripcion, tipo_curso, avatar } }

// return(dispatch) => {
//   $.ajax({
//     url: `/api/cursos`,
//     type: 'POST',
//     dataType: 'json',
//     data: { curso: { nombre, lugar, descripcion, tipo_curso, avatar } }

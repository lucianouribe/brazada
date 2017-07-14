import { destildador } from '../helpers';

// cenderin [9:43 AM]
// feel like your params are messed up
//
// [9:45]
// data: formData,  maybe data: { curso: formData }
//
// [9:46]
// because you define the params should be curso: { nombre: “blah”, tipo_curso: “blah”, lugar: “blah”} but you dont have that in your params
//
// dave.jungst
// [9:47 AM]
// My advice... use React Dropzone for uploading. Use superagent to send the file then paperclip still works the same way on the rails side
//
// new messages
// [9:48]
// Or you may have better luck using cloudinary since paperclip gem loses a lot of its value if you are not using a fully baked rails solution.


// export const addCurso = (nombre, lugar, descripcion, tipo_curso, avatar) => {
//   console.log('this is add cursos action');
//   return(dispatch) => {
//     const formData = new FormData()
//
//     formData.append("avatar", avatar);
//     formData.append("nombre", nombre);
//     formData.append("lugar", lugar);
//     formData.append("descripcion", descripcion);
//     formData.append("tipo_curso", tipo_curso);
//
//     console.log(formData)
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
//     }).done( curso => {
//       // console.log('add curso done data');
//       // console.table(curso);
//       dispatch({ type: 'ADD_CURSO', curso });
//     }).fail( data => {
//       // console.log('add curso fail data')
//       // console.log(data);
//     })
//   }
//
// }

export const addCurso = (nombre, lugar, descripcion, tipo_curso, avatar) => {
  console.log('this is add cursos action');
  return(dispatch) => {
    $.ajax({
      url: `/api/cursos`,
      type: 'POST',
      dataType: 'json',
      data: { curso: { nombre, lugar, descripcion, tipo_curso, avatar } }
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

export const editCurso = (id, nombre, lugar, descripcion, tipo_curso) => {
  // console.log(`this is edit curso con id: ${id}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/cursos/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { curso: { nombre, lugar, descripcion, tipo_curso } }
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

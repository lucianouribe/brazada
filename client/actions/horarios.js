export const addHorario = (curso_id, profesor_id, dia, hora, minutos, posicion, calendario) => {
  // console.log('this is add horario action');
  return(dispatch) => {
    $.ajax({
      url: `/api/horarios`,
      type: 'POST',
      dataType: 'JSON',
      data: { horario: { curso_id, profesor_id, dia, hora, minutos, posicion, calendario } }
    }).done( horario => {
      // console.log('add horario done data actions');
      // console.table(horario);
      dispatch({ type: 'ADD_HORARIO', horario });
    }).fail( data => {
      // console.log('add horario fail data actions')
      // console.log(data);
    })
  }

}

export const fetchHorarios = () => {
  // console.log('this is fetch horarios')
  return(dispatch) => {
    $.ajax({
      url: '/api/horarios',
      type: 'GET',
      dataType: 'JSON'
    }).done( horarios => {
      // console.log('fetch horarios done data');
      // console.table(horarios);
      dispatch({ type: 'ALL_HORARIOS', horarios});
    }).fail( data => {
      // console.log('fetch horarios fail data')
      // console.log(data)
    })
  }

}

export const deleteHorario = (id) => {
  console.log(`this is delete horario con id: ${id}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/horarios/${id}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data => {
      console.log('delete horario done data');
      // console.log(data);
      dispatch({ type: 'DELETE_HORARIO', id });
    }).fail( data => {
      console.log(data);
    })
  }
}

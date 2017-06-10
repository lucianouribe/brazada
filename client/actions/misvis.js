export const addMisvi = (titulo, articulo) => {
  // console.log('this is add misvis action');
  return(dispatch) => {
    $.ajax({
      url: `/api/misvis`,
      type: 'POST',
      dataType: 'JSON',
      data: { misvi: { titulo, articulo } }
    }).done( misvi => {
      // console.log('add misvi done data');
      // console.table(misvi);
      dispatch({ type: 'ADD_MISVI', misvi });
    }).fail( data => {
      // console.log('add misvi fail data')
      // console.log(data);
    })
  }

}

export const fetchMisvis = () => {
  // console.log('this is fetch misvis')
  return(dispatch) => {
    $.ajax({
      url: '/api/misvis/',
      type: 'GET',
      dataType: 'JSON'
    }).done( misvis => {
      // console.log('fetch misvis done data (action)');
      // console.table(misvis);
      dispatch({ type: 'ALL_MISVIS', misvis});
    }).fail( data => {
      console.log('fetch misvis fail data (action)')
      // console.log(data)
    })
  }

}

export const editMisvi = (id, articulo) => {
  // console.log(`this is edit misvi con id: ${id}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/misvis/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { misvi: { articulo } }
    }).done( misvi => {
      // console.log('edit misvi done data');
      // console.table(misvi);
      dispatch({ type: 'EDIT_MISVI', misvi });
    }).fail( data => {
      // console.log('edit misvi fail data')
      // console.log(data);
    })
  }
}

export const deleteMisvi = (id) => {
  // console.log(`this is delete misvi con id: ${id}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/misvis/${id}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data => {
      // console.log('delete misvi done data');
      // console.log(data);
      dispatch({ type: 'DELETE_MISVI', id });
    }).fail( data => {
      console.log(data);
    })
  }
}

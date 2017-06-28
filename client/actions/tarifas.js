import { destildador } from '../helpers';

export const addTarifa = (plan, nombre, valor, descripcion) => {
  // console.log('this is add tarifas action');
  return(dispatch) => {
    $.ajax({
      url: `/api/tarifas`,
      type: 'POST',
      dataType: 'JSON',
      data: { tarifa: { plan, nombre, valor, descripcion} }
    }).done( tarifa => {
      // console.log('add tarifa done data');
      // console.table(tarifa);
      dispatch({ type: 'ADD_TARIFA', tarifa });
    }).fail( data => {
      console.log('add tarifa fail data')
      console.log(data);
    })
  }

}



export const fetchTarifas = (wordToMatch) => {
  // console.log('this is fetch tarifas')
  const regex = new RegExp(wordToMatch, 'gi');
  return(dispatch) => {
    $.ajax({
      url: '/api/tarifas/',
      type: 'GET',
      dataType: 'JSON'
    }).done( tarifas => {
      if(wordToMatch === 'full') {
        dispatch({ type: 'ALL_TARIFAS', tarifas});
      } else {
        let lasTarifas = tarifas.filter( tarifa => {
          if(
            destildador(tarifa.nombre).match(regex) || destildador(tarifa.plan).match(regex)
          ) return tarifa;
        })
        // console.table(lasTarifas)
        dispatch({ type: 'FILTERED_TARIFAS', lasTarifas});
      }
    }).fail( data => {
      console.log('fetch tarifas fail data')
      console.log(data)
    })
  }

}

export const editTarifa = (id, plan, nombre, valor, descripcion) => {
  // console.log(`this is edit tarifa con id: ${id}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/tarifas/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { tarifa: { plan, nombre, valor, descripcion } }
    }).done( tarifa => {
      // console.log('edit tarifa done data');
      // console.table(tarifa);
      dispatch({ type: 'EDIT_TARIFA', tarifa });
    }).fail( data => {
      console.log('edit tarifa fail data')
      console.log(data);
    })
  }
}

export const deleteTarifa = (id) => {
  // console.log(`this is delete tarifa con id: ${id}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/tarifas/${id}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data => {
      // console.log('delete tarifa done data');
      // console.log(data);
      dispatch({ type: 'DELETE_TARIFA', id });
    }).fail( data => {
      console.log('delete tarifa data')
      console.log(data);
    })
  }
}

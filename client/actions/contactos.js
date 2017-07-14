export const fetchMensajes = () => {
  // console.log('this is fetch mensajes')
  return(dispatch) => {
    $.ajax({
      url: '/api/contactos/',
      type: 'GET',
      dataType: 'JSON'
    }).done( contactos => {
      // console.log('fetch mensajes done data');
      // console.table(contactos);
      dispatch({ type: 'ALL_MENSAJES', contactos});
    }).fail( data => {
      // console.log('fetch mensajes fail data')
      // console.log(data)
    })
  }

}

export const createContacto = (nombre, correo, mensaje) => {
  console.log('this is create contactos action');
  return(dispatch) => {
    $.ajax({
      url: `/api/contacto`,
      type: 'POST',
      dataType: 'JSON',
      data: { contacto: { nombre, correo, mensaje } }
    }).done( contacto => {
      console.log('create contacto done data');
      console.log(contacto);
      dispatch({ type: 'CREATE_CONTACTO', contacto });
    }).fail( data => {
      // console.log('add curso fail data')
      // console.log(data);
    })
  }

}

export const deleteMensaje = (id) => {
  // console.log(`this is delete mensaje con id: ${id}`)
  return(dispatch) => {
    $.ajax({
      url: `/api/contactos/${id}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data => {
      // console.log('delete mensaje done data');
      // console.log(data);
      dispatch({ type: 'DELETE_MENSAJE', id });
    }).fail( data => {
      // console.log(data);
    })
  }
}

export const leidoSetup = (id, leido) => {
  // console.log(`this is leido setup con id: ${id}`);
  // console.log(leido);
  return(dispatch) => {
    $.ajax({
      url: `/api/contactos/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { contacto: { id, leido } }
    }).done( contacto => {
      // console.log('leido setup done data');
      // console.table(contacto);
      dispatch({ type: 'LEIDO_SETUP', contacto });
    }).fail( data => {
      // console.log('leido setup fail data')
      // console.log(data);
    })
  }
}
export const importanciaSetup = (id, importancia) => {
  // console.log(`this is IMPORTANCIA setup con id: ${id}`);
  // console.log(importancia);
  return(dispatch) => {
    $.ajax({
      url: `/api/contactos/${id}`,
      type: 'PUT',
      dataType: 'JSON',
      data: { contacto: { id, importancia } }
    }).done( contacto => {
      // console.log('leido setup done data');
      // console.table(contacto);
      dispatch({ type: 'IMPORTANCIA_SETUP', contacto });
    }).fail( data => {
      // console.log('leido setup fail data')
      // console.log(data);
    })
  }
}

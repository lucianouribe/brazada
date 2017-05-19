const contactos = ( state = [], action ) => {
  let index;
  // console.log('reducer contactos');
  // console.log(action, state);
  switch(action.type){
    case 'ALL_MENSAJES':
      return action.contactos;
      break;
    case 'LEIDO_SETUP':
    // console.log(state, action)
      let allMensajes = state;
      index = allMensajes.findIndex( m => m.id === action.contacto.id)
      allMensajes[index] = action.contacto
      return [...allMensajes]
      break;
    case 'IMPORTANCIA_SETUP':
    // console.log(state, action)
      let todosLosMensajes = state;
      index = todosLosMensajes.findIndex( m => m.id === action.contacto.id)
      todosLosMensajes[index] = action.contacto
      return [...todosLosMensajes]
      break;
    case 'DELETE_MENSAJE':
      index = state.findIndex( c => c.id === action.id)
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
      break;
    default:
      return state;
  }
}

export default contactos;

const horarios = ( state = [], action ) => {
  // console.log('reducer horarios');
  // console.log(action, state);
  let index;
  switch(action.type){
    case 'ALL_HORARIOS':
      return action.horarios;
      break;
    case 'ADD_HORARIO':
      return [action.horario, ...state]
      break;
    case 'DELETE_HORARIO':
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

export default horarios;

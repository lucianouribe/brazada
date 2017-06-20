const tarifas = ( state = [], action ) => {
  let index;
  // console.log('reducer tarifas');
  // console.log(action, state);
  switch(action.type){
    case 'ALL_TARIFAS':
      // console.log('all tarifas');
      return action.tarifas;
      break;
    case 'FILTERED_TARIFAS':
      // console.log('filtered tarifas');
      let filteredTarifas = action.lasTarifas;
      return filteredTarifas;
      break;
    case 'ADD_TARIFA':
      return [action.tarifa, ...state]
      break;
    case 'EDIT_TARIFA':
      // console.log(state, action);
      let allTarifas = state;
      index = allTarifas.findIndex( c => c.id === action.tarifa.id)
      allTarifas[index] = action.tarifa
      return [...allTarifas]
      break;
    case 'DELETE_TARIFA':
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

export default tarifas;

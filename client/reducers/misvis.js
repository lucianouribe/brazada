const misvis = ( state = [], action ) => {
  let index;
  // console.log('reducer misvis');
  // console.log(action, state);
  switch(action.type){
    case 'ALL_MISVIS':
      return action.misvis;
      break;
    case 'ADD_MISVI':
      return [action.misvi, ...state]
      break;
    case 'EDIT_MISVI':
      let allMisvis = state;
      index = allMisvis.findIndex( m => m.id === action.misvi.id)
      allMisvis[index] = action.misvi
      return [...allMisvis]
      break;
    case 'DELETE_MISVI':
      index = state.findIndex( m => m.id === action.id)
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
      break;
    default:
      return state;
  }
}

export default misvis;

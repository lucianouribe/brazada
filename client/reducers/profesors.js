const profesors = ( state = [], action ) => {
  let index;
  // console.log('reducer profesors');
  // console.log(action, state);
  switch(action.type){
    case 'ALL_PROFESORS':
      // console.log('all profesors');
      return action.profesors;
      break;
    case 'FILTERED_PROFESORS':
      // console.log('filtered tarifas');
      let filteredProfesors = action.losProfesors;
      return filteredProfesors;
      break;
    case 'ADD_PROFESOR':
      return [action.profesor, ...state]
      break;
    case 'EDIT_PROFESOR':
      // console.log(state, action);
      let allProfesors = state;
      index = allProfesors.findIndex( c => c.id === action.profesor.id)
      allProfesors[index] = action.profesor
      return [...allProfesors]
      break;
    case 'DELETE_PROFESOR':
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

export default profesors;

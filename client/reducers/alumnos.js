const alumnos = ( state = [], action ) => {
  let index;
  // console.log('reducer alumnos');
  // console.log(action, state);
  switch(action.type){
    case 'ALL_ALUMNOS':
      return action.alumnos;
      break;
    case 'FILTERED_ALUMNOS':
      // console.log('filtered tarifas');
      let filteredAlumnos = action.losAlumnos;
      return filteredAlumnos;
      break;
    case 'ADD_ALUMNO':
      return [action.alumno, ...state]
      break;
    case 'EDIT_ALUMNO':
      let allAlumnos = state;
      index = allAlumnos.findIndex( c => c.id === action.alumno.id)
      allAlumnos[index] = action.alumno
      return [...allAlumnos]
      break;
    case 'DELETE_ALUMNO':
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

export default alumnos;

const alumnos = ( state = [], action ) => {
  let index;
  // console.log('reducer alumnos');
  // console.log(action, state);
  switch(action.type){
    case 'ALL_ALUMNOS':
      // console.log('fetch all alumnos')
      return action.alumnos;
      break;
    case 'ADD_ALUMNO':
      console.log('add alumno');
      console.log(state, action);
      return [action.alumno, ...state]
      break;
    case 'EDIT_ALUMNO':
      console.log('edit alumno')
      console.log(state, action)
      let allAlumnos = state;
      index = allAlumnos.findIndex( c => c.id === action.alumno.id)
      allAlumnos[index] = action.alumno
      return [...allAlumnos]
      break;
    case 'DELETE_ALUMNO':
      console.log('delete alumno');
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

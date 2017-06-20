const cursos = ( state = [], action ) => {
  let index;
  // console.log('reducer cursos');
  // console.log(action, state);
  switch(action.type){
    case 'ALL_CURSOS':
      return action.cursos;
      break;
    case 'FILTERED_CURSOS':
      // console.log('filtered tarifas');
      let filteredCursos = action.losCursos;
      return filteredCursos;
      break;
    case 'ADD_CURSO':
      return [action.curso, ...state]
      break;
    case 'EDIT_CURSO':
      // action.curso = the updated curso
      // action.type = the type of the reducer action that was dispatched
      // state = all of the universities in the redux store
      let allCursos = state;
      index = allCursos.findIndex( c => c.id === action.curso.id)
      allCursos[index] = action.curso
      return [...allCursos]
      break;
    case 'DELETE_CURSO':
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

export default cursos;

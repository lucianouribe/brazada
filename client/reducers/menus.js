const menus = ( state = 'natacion', action ) => {

  switch(action.type){
    case 'SET_TIPO_CURSO':
      console.log('set tipo curso reducer')
      console.log(action.info)
      return action.info;
      break;
    case 'GET_TIPO_CURSO':
      console.log('get tipo curso reducer')
      console.log(state)
      return state
      break;
    default:
      return state;
  }
}
export default menus;

const submenus = ( state = 'ninos', action ) => {

  switch(action.type){
    case 'SET_CUAL_CLASE':
      // console.log('set tipo curso reducer')
      console.log(action.info)
      return action.info;
      break;
    case 'GET_CUAL_CLASE':
      // console.log('get tipo curso reducer')
      console.log(state)
      return state
      break;
    default:
      return state;
  }
}
export default submenus;

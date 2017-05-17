const flash = ( state = {}, action ) => {
  // console.log('flash reducer');
  switch (action.type) {
    case 'SET_FLASH':
      let { message, msgType } = action;
      return { message, msgType }
    case 'CLEAR_FLASH':
      return {}
    default:
      return state;
  }
}

export default flash;

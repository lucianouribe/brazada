export const setCualClase = (info) => {
  // console.log('this is set cual clase action')
  return(dispatch) => {
    dispatch({ type: 'SET_CUAL_CLASE', info});
  }
}

export const getTipoCurso = () => {
  // console.log('this is get cual clase action')
  return(dispatch) => {
    dispatch({ type: 'GET_CUAL_CLASE'});
  }
}

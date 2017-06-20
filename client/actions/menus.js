export const setTipoCurso = (info) => {
  // console.log('this is set tipo curso action')
  return(dispatch) => {
    dispatch({ type: 'SET_TIPO_CURSO', info});
  }
}
export const setCualClase = (info) => {
  // console.log('this is set cual clase action')
  return(dispatch) => {
    dispatch({ type: 'SET_CUAL_CLASE', info});
  }
}

export const getTipoCurso = () => {
  // console.log('this is get tipo curso action')
  return(dispatch) => {
    dispatch({ type: 'GET_TIPO_CURSO'});
  }
}

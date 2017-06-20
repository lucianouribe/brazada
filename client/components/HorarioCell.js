import React from 'react';
import { connect } from 'react-redux';
import { timeFixer, ortografica } from '../helpers';

class HorarioCell extends React.Component {


  render(){
    let horario = this.props.horario;
    let elProfe = this.props.profesors.filter( profe => { if(profe.id === horario.profesor_id) return profe;})
    let elCurso = this.props.cursos.filter( curso => { if(curso.id === horario.curso_id) return curso; })


    return(
      <div className="horario-cel" key={horario.id}>
        <span className="tarifa-info-encabezado">
          <p>{`${timeFixer(horario.hora)}:${timeFixer(horario.minutos)}`}</p></span>
        <span className="tarifa-info-nombres">
          {Object.keys(elCurso).map( key => <p key={key}>{ortografica(elCurso[key].nombre)}</p>)}
        </span>
        <span className="tarifa-info-valores">
          {Object.keys(elProfe).map( key => <p key={key}>{`${elProfe[key].nombre} ${elProfe[key].apellido}`}</p>)}
        </span>
      </div>
    )
  }

}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    cursos: state.cursos,
    profesors: state.profesors,
    horarios: state.horarios
  }
}

export default connect(mapStateToProps)(HorarioCell);

import React from 'react';
import { connect } from 'react-redux';
import { timeFixer, ortografica } from '../helpers';
import { deleteHorario } from '../actions/horarios';

class Horario extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: true }

    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.whichToRender = this.whichToRender.bind(this);
  }


  toggleDisplay(){
    this.setState({open: !this.state.open})
  }

  // discrimina los cursos cortos para no renderizar los profes
  whichToRender(){
    let horario = this.props.horario;
    let elProfe = this.props.profesors.filter( profe => { if(profe.id === horario.profesor_id) return profe;})
    let elCurso = this.props.cursos.filter( curso => { if(curso.id === horario.curso_id) return curso; })

    if(horario.duracion !== 30 && horario.duracion !== 10){
      return(
        <span className="event-info">
          {Object.keys(elCurso).map( key => <p key={key}>{ortografica(elCurso[key].nombre)}</p>)}
          {Object.keys(elProfe).map( key => <p key={key}>{`${elProfe[key].nombre} ${elProfe[key].apellido}`}</p>)}
        </span>
      )
    } else {
      return(
        <span className="event-info">
          {Object.keys(elCurso).map( key => <p key={key}>{ortografica(elCurso[key].nombre)}</p>)}
        </span>
      )
    }
  }

  render(){
    // la informacion que viene pegada como props (curso_id, dia, hora, minutos, id, posicion "l-6", profesor_id
    let horario = this.props.horario;
    // hacer loop que filtra los profesores por id
    let elProfe = this.props.profesors.filter( profe => { if(profe.id === horario.profesor_id) return profe;})
    // hacer loop que filtra los cursos por id
    let elCurso = this.props.cursos.filter( curso => { if(curso.id === horario.curso_id) return curso; })

    let displayTimeErrase;
    if(this.state.open) {
      displayTimeErrase =  (timeFixer(horario.hora) + " " + timeFixer(horario.minutos))
    } else {
      displayTimeErrase = (<i className="material-icons" onClick={() => this.props.dispatch(deleteHorario(horario.id))}>delete</i>)
    }

    return(
      <div key={horario.id} className={`horario-container ${horario.dia} min${horario.minutos} duracion${horario.duracion}`} onClick={this.toggleDisplay}>
        <span className="event-time"><p>{displayTimeErrase}</p></span>
        {this.whichToRender()}
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

export default connect(mapStateToProps)(Horario);

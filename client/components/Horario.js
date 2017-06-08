import React from 'react';
import { connect } from 'react-redux';
import { timeFixer } from '../helpers';
import { deleteHorario } from '../actions/horarios';

class Horario extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: true }

    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay(){
    this.setState({open: !this.state.open})
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
    // loop unico elemento del array 
    let duracion = Object.keys(elCurso).map( key => elCurso[key].duracion)
    return(
      <div key={horario.id} className={`horario-container ${horario.dia} min${horario.minutos} duracion${duracion}`} onClick={this.toggleDisplay}>
        <span className="event-time"><p>{displayTimeErrase}</p></span>
        <span className="event-info">
          {Object.keys(elCurso).map( key => <p key={key}>{elCurso[key].nombre}</p>)}
          {Object.keys(elProfe).map( key => <p key={key}>{`${elProfe[key].nombre} ${elProfe[key].apellido}`}</p>)}
        </span>
      </div>
    )
  }


  // Object.keys(navItem).map(key => <p key={key}>{ortografica(navItem[key].tipo_curso)}</p>)}

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

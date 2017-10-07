import React from 'react';
import { connect } from 'react-redux';
import { formatPrice, mapArray, timeFixer, createMarkup } from '../helpers';

class MainInfo extends React.Component {

  constructor(props){
    super(props);
    this.viewRenderer = this.viewRenderer.bind(this);
  }

  viewRenderer(){
    let curso = this.props.descripcion
    // tomar el id del curso
    let cursoId = Object.keys(curso).map(key => curso[key].id)
    // tomar todas las tarifas
    let tarifas = this.props.tarifas
    // tomar todos las profesores
    let profes = this.props.profesors

    // loop de todos los profesores para que coincidan con el submenu
    let losProfes;
    let lasclases;
    let este;
    if(profes){
      losProfes = profes.filter( docente => {
        // dividir las clases de este profesor en un array
        lasclases = docente.cual_curso.split(", ");
        // filtrar este array para ver si alguna de las clases coincide con la elegida
        este = lasclases.filter( x => x === this.props.submenus);
        // condicional para incluir el docente dentro del array de losProfes
        // se pone el cero porque el filtro filtra pero da como residual un array con 1!
        if(este[0] === this.props.submenus){
          return docente
        }
      })
    }

    // filtro de horarios
    let horarios = this.props.horarios;
    let losHorarios;
    if(horarios){
      losHorarios = horarios.filter( evento => {
        return evento.curso_id === cursoId[0]
      })
    }

    let largo;
    switch (this.props.order) {
      case null:
        return (Object.keys(curso).map(key => <div className='curso-info' key={key} dangerouslySetInnerHTML={createMarkup(curso[key].descripcion)}/>))
        break;
      case 'tarifas':
        return(
          <div>
            {Object.keys(tarifas).map(key =>
              <span key={key} className="tarifa-info">
                <span className="tarifa-info-encabezado">
                  <h5>{tarifas[key].plan}</h5>
                  <p>{tarifas[key].descripcion}</p>
                </span>
                <span className="tarifa-info-nombres">{tarifas[key].nombre.split(", ").map((item, index) => <p key={index}>{item}</p> )}</span>
                <span className="tarifa-info-valores">{tarifas[key].valor.split(", ").map((item, index) => <p key={index}>{formatPrice(item)}</p> )}</span>
              </span>
            )}
            <span>* Sujeto a modificaciones</span>
          </div>
        )
        break;
      case 'profesors':
        if(losProfes.length > 0) {
          return(Object.keys(losProfes).map(key => <span key={key} className="profes-info"> <p>{losProfes[key].nombre}</p><p>{losProfes[key].apellido}</p></span>))
        } else {
          return(
            <span className="profes-info">
              <p>Este es un espacio libre para ti. Puedes entrenar por tu cuenta.</p>
            </span>
          )
        }

        break;
      case 'horarios':
        if(losHorarios.length > 0) {
          return(
            <div className="horarios-subinfo">
              {Object.keys(losHorarios).map(key => <span key={key} className={`horarios-info ${losHorarios[key].dia}`}> <p>{losHorarios[key].dia}</p> <p>{timeFixer(losHorarios[key].hora)}:{timeFixer(losHorarios[key].minutos)}</p> </span>)}
            </div>
          )
        } else {
          return(
            <div className="horarios-subinfo">
              <span className="horarios-info">
                <p>Curso con cita previa.</p>
                <p>Reserve su cita. Tel: <b>317 10 91</b></p>
              </span>
            </div>
          )
        }

        break;
      default:
        return (Object.keys(curso).map(key => <p key={key}>{curso[key].descripcion}</p>))
    }
  }



  render(){
    return(
      <div className="main-info">
        {this.viewRenderer()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tarifas: state.tarifas,
    profesors: state.profesors,
    horarios: state.horarios,
    menus: state.menus,
    submenus: state.submenus
  }
}

export default connect(mapStateToProps)(MainInfo);

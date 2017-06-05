import React from 'react';
import { connect } from 'react-redux';
import { formatPrice, mapArray } from '../helpers';

class MainInfo extends React.Component {
  constructor(props){
    super(props);
    this.viewRenderer = this.viewRenderer.bind(this);
  }

  viewRenderer(){
    let curso = this.props.descripcion
    // tomar todas las tarifas
    let tarifas = this.props.tarifas

    // tomar todas las profesores
    let profes = this.props.profesors
    let losProfes;
    // loop todas los profesores para que coincidan con el submenu
    // asignarlos a un array
    if(profes){
      losProfes = profes.filter( docente => {
        return docente.cual_curso === this.props.submenus
      })
    }
// <p> {formatPrice(tarifas[key].valor)}</p>
// {Object.keys(tarifas[key]).map(bli => <p key={bli}>{tarifas[key].nombre.split(" ")}</p>)}
    let largo;
    switch (this.props.order) {
      case null:
        return (Object.keys(curso).map(key => <p key={key}>{curso[key].descripcion}</p>))
        break;
      case 'tarifas':
        return(
          <div>
            {Object.keys(tarifas).map(key =>
              <span key={key} className="tarifa-info">
                <span className="tarifa-info-encabezado">
                  <h4>{tarifas[key].plan}</h4>
                  <p>{tarifas[key].descripcion}</p>
                </span>
                <span className="tarifa-info-nombres">{tarifas[key].nombre.split(", ").map((item, index) => <p key={index}>{item}</p> )}</span>
                <span className="tarifa-info-valores">{tarifas[key].valor.split(", ").map((item, index) => <p key={index}>{formatPrice(item)}</p> )}</span>
              </span>
            )}
          </div>
        )
        break;
      case 'profesors':
        return(Object.keys(losProfes).map(key => <span key={key} className="profes-info"> <p>{losProfes[key].nombre}</p><p>{losProfes[key].apellido}</p></span>))
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
    menus: state.menus,
    submenus: state.submenus
  }
}

export default connect(mapStateToProps)(MainInfo);

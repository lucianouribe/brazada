import React from 'react';
import { connect } from 'react-redux';
import { formatPrice, mapArray } from '../helpers';
import { fetchTarifas } from '../actions/tarifas';


class MainTarifas extends React.Component {
  componentDidMount(){
    this.props.dispatch(fetchTarifas());
  }

  render(){
    let tarifas = this.props.tarifas
    return(
      <div className="container">>
        <h2 className="center titulo">Tarifas</h2>
        <div className="main-info">
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
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    tarifas: state.tarifas,
    submenus: state.submenus
  }
}

export default connect(mapStateToProps)(MainTarifas);

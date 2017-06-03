import React from 'react';
import { connect } from 'react-redux';

class MainButtons extends React.Component {
  render(){
    let horarios = 'horarios';
    let tarifas = 'tarifas';
    let profesors = 'profesors';
    let instalaciones = 'instalaciones';
    return (
      <div className="main-buttons">
        <div className='btn-opt' onClick={() => this.props.infoGatherer(horarios)}>horarios</div>
        <div className='btn-opt' onClick={() => this.props.infoGatherer(tarifas)}>tarifas</div>
        <div className='btn-opt'onClick={() => this.props.infoGatherer(profesors)}>profesores</div>
        <div className='btn-opt' onClick={() => this.props.infoGatherer(instalaciones)}>instalaciones</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cursos: state.cursos,
    profesors: state.profesors,
    tarifas: state.tarifas,
    horarios: state.horarios
  }
}

export default connect(mapStateToProps)(MainButtons);

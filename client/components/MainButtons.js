import React from 'react';
import { connect } from 'react-redux';

class MainButtons extends React.Component {
  render(){
    return (
      <div>
        <div className='btn'>horarios</div>
        <div className='btn'>tarifas</div>
        <div className='btn'>profes</div>
        <div className='btn'>instalaciones</div>
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

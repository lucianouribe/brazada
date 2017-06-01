import React from 'react';
import { connect } from 'react-redux';

class DashButtons extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    let user = this.props.user
    const cursos = 'cursos';
    const mensajes = 'mensajes';
    const alumnos = 'alumnos';
    const tarifas = 'tarifas';
    const profesors = 'profesors';
    return (
      <div>
        <div className="dash-buttons">
          <div className='btn' onClick={() => this.props.setRenderOption(mensajes)}><span>Mensajes</span></div>
          <div className='btn' onClick={() => this.props.setRenderOption(cursos)}><span>Cursos</span></div>
          <div className='btn' onClick={() => this.props.setRenderOption(alumnos)}><span>Alumnos</span></div>
          <div className='btn' onClick={() => this.props.setRenderOption(profesors)}><span>Profesores</span></div>
          <div className='btn' onClick={() => this.props.setRenderOption(tarifas)}><span>Tarifas</span></div>
          <div className='btn'><span>Horarios</span></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user}
}

export default connect(mapStateToProps)(DashButtons);

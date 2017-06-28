import React from 'react';
import { connect } from 'react-redux';

class DashButtons extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    $('.btn').on('click', function(){
      $('.btn').removeClass('btn-clicked');
      $(this).addClass('btn-clicked');
    });
  }

  componentDidUpdate(){
    $('.btn').on('click', function(){
      $('.btn').removeClass('btn-clicked');
      $(this).addClass('btn-clicked');
    });
  }

  render(){
    let user = this.props.user
    const cursos = 'cursos';
    const mensajes = 'mensajes';
    const tarifas = 'tarifas';
    const profesors = 'profesors';
    const horarios = 'horarios';
    const nosotros = 'nosotros';
    return (
      <div>
        <div className="dash-buttons">
          <div className='btn btn-clicked' onClick={() => this.props.setRenderOption(mensajes)}><span>Mensajes</span></div>
          <div className='btn' onClick={() => this.props.setRenderOption(cursos)}><span>Cursos</span></div>
          <div className='btn' onClick={() => this.props.setRenderOption(profesors)}><span>Profesores</span></div>
          <div className='btn' onClick={() => this.props.setRenderOption(tarifas)}><span>Tarifas</span></div>
          <div className='btn' onClick={() => this.props.setRenderOption(horarios)}><span>Horarios</span></div>
          <div className='btn' onClick={() => this.props.setRenderOption(nosotros)}><span>Nosotros</span></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user}
}

export default connect(mapStateToProps)(DashButtons);

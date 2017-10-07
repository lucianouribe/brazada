import React from 'react';
import { connect } from 'react-redux';

class MainButtons extends React.Component {

  componentDidMount(){
    // jquery button clicked effect
    $('.btn-opt').on('click', function(){
      $('.btn-opt').removeClass('btn-clicked');
      $(this).addClass('btn-clicked');
    });
  }

  componentDidUpdate(){
    // jquery button clicked effect
    $('.btn-opt').on('click', function(){
      $('.btn-opt').removeClass('btn-clicked');
      $(this).addClass('btn-clicked');
    });
  }

  render(){
    let horarios = 'horarios';
    let tarifas = 'tarifas';
    let profesors = 'profesors';
    let instalaciones = 'instalaciones';
    let selected;
    if(this.props.clicked === null) {
      $('.btn-opt').removeClass('btn-clicked');
      selected = 'btn-clicked';
    } else {
      selected = ''
    }
    return (
      <div className="main-buttons">
        <div className={`btn-opt ${selected}`} onClick={() => this.props.infoGatherer(null)}>información</div>
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
    submenus: state.submenus
  }
}

export default connect(mapStateToProps)(MainButtons);

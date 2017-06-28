import React from 'react';

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
    return (
      <div className="main-buttons">
        <div className='btn-opt' onClick={() => this.props.infoGatherer(null)}>información</div>
        <div className='btn-opt' onClick={() => this.props.infoGatherer(horarios)}>horarios</div>
        <div className='btn-opt' onClick={() => this.props.infoGatherer(tarifas)}>tarifas</div>
        <div className='btn-opt'onClick={() => this.props.infoGatherer(profesors)}>profesores</div>
        <div className='btn-opt' onClick={() => this.props.infoGatherer(instalaciones)}>instalaciones</div>
      </div>
    )
  }
}

export default MainButtons;

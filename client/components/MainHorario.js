import React from 'react';
import MainHorarioCel from './MainHorarioCel';
import MainHorarioPc from './MainHorarioPc';


class MainHorario extends React.Component {

  render(){

    return(
      <div>
        <div className='main-horario-pc'>
          <MainHorarioPc />
        </div>
        <div className='main-horario-cel'>
          <MainHorarioCel />
        </div>
      </div>
    )

  }

}

export default MainHorario;

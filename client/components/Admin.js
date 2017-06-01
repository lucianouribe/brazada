import React from 'react';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import ContactMain from './ContactMain';
import Cursos from './Cursos';
import Alumnos from './Alumnos';
import Tarifas from './Tarifas';
import Profesors from './Profesors';

class Admin extends React.Component {
  constructor(){
    super();

    this.state = {
      renderOption: ''
    }

    this.setRenderOption = this.setRenderOption.bind(this);
  }

  setRenderOption(iAmTheOption){
    this.setState({ renderOption: iAmTheOption })
  }

  mainRenderer(){
    switch (this.state.renderOption) {
      case 'cursos':
          return(<Cursos />)
        break;
      case 'mensajes':
          return(<ContactMain />)
        break;
      case 'alumnos':
          return(<Alumnos />)
        break;
      case 'tarifas':
          return(<Tarifas />)
        break;
      case 'profesors':
          return(<Profesors />)
        break;
      default:
        return(<Profesors />)
    }
  }

  render(){
    return (
      <div className='admin-main'>
        <Dashboard setRenderOption={this.setRenderOption}/>
        <div className="admin-content">
          {this.mainRenderer()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tiposCurso: state.tiposCurso
 }
}

export default connect(mapStateToProps)(Admin);

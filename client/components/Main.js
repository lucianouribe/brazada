import React from 'react';
import { connect } from 'react-redux';
import MainNav from './MainNav';
import MainContent from './MainContent';
import {ortografica} from '../helpers';

// import { getStater } from '../actions/menus';

import { fetchCursos } from '../actions/cursos';
import { fetchTarifas } from '../actions/tarifas';
import { fetchProfesors } from '../actions/profesors';


class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state ={
      order: null
    }

    this.infoGatherer = this.infoGatherer.bind(this);
  }

  componentDidMount(){
    this.props.dispatch(fetchCursos());
    this.props.dispatch(fetchTarifas());
    this.props.dispatch(fetchProfesors());
  }


  infoGatherer(order){
    this.setState({order})
  }


  render(){
    // filtra los cursos y los reduce a los mismos nombres (unique) TODOS LOS CURSOS
    let infoCursos = this.props.cursos.filter( item => {
      return item.tipo_curso === this.props.menus
    })
    // filtra los cursos y los reduce al que coincida con los states escogidos en main nav
    let infoToContent;
    if(this.props.submenus){
      infoToContent = this.props.cursos.filter( item => {
        return item.nombre === this.props.submenus && item.tipo_curso === this.props.menus
      })
    }
    // excepcion
    let titulo = this.props.menus;
    if(titulo === 'mente'){
      titulo = 'mente y cuerpo'
    } else if (titulo === 'hidro') {
      titulo = 'hidrogimnasia'
    }

    return (
      <div className="main-container">
        <h1 className='main-titulo'>{ortografica(titulo)}</h1>
        <MainNav infoCursos={infoCursos} infoGatherer={this.infoGatherer}/>
        <MainContent infoToContent={infoToContent} infoGatherer={this.infoGatherer} order={this.state.order} clicked={this.state.order}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cursos: state.cursos,
    profesors: state.profesors,
    tarifas: state.tarifas,
    horarios: state.horarios,
    menus: state.menus,
    submenus: state.submenus
  }
}

export default connect(mapStateToProps)(Main);

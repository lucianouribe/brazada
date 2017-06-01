import React from 'react';
import { connect } from 'react-redux';
import MainNav from './MainNav';
import MainContent from './MainContent';

// import { getStater } from '../actions/menus';

import { fetchCursos } from '../actions/cursos';
import { fetchTarifas } from '../actions/tarifas';
import { fetchProfesors } from '../actions/profesors';


class Main extends React.Component {

  constructor(props) {
    super(props);

    // this.state ={
    //   info: null
    // }

    // this.infoGatherer = this.infoGatherer.bind(this);
  }

  componentDidMount(){
    this.props.dispatch(fetchCursos());
    this.props.dispatch(fetchTarifas());
    this.props.dispatch(fetchProfesors());
  }


  // infoGatherer(info){
  //   this.setState({info})
  // }

  render(){
    // filtra los cursos y los reduce a los mismos nombres (unique)
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

    return (
      <div className='main-container'>
        <div>
          <h1 className='main-titulo'>{this.props.menus}</h1>
        </div>
        <MainNav infoCursos={infoCursos} />
        <MainContent infoToContent={infoToContent}/>
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

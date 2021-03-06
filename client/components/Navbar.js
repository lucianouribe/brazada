import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { fetchCursos } from '../actions/cursos';
import { fetchMisvis} from '../actions/misvis';
import { fetchProfesors } from '../actions/profesors';
import { fetchHorarios } from '../actions/horarios';
import { setTipoCurso } from '../actions/menus';
import { setCualClase } from '../actions/submenus';
import { ortografica } from '../helpers';

class Navbar extends Component {

  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.navs = this.navs.bind(this);
    this.sideNav = this.sideNav.bind(this);
    this.theDoubt = this.theDoubt.bind(this);
    this.navDefaultOptions = this.navDefaultOptions.bind(this);
    this.goToActions = this.goToActions.bind(this);
  }


  logout(e) {
    e.preventDefault();
    // console.log('logout dispatcher');
    this.props.dispatch(logout(this.props.history));
  }

  componentDidMount() {
    $('.button-collapse').sideNav();
    $('.side-but').on('click', function() {
     $('.button-collapse').sideNav('hide');
    });

    // this is done to be able to have all the props available to all the components!
    this.props.dispatch(fetchCursos());
    this.props.dispatch(fetchProfesors());
    this.props.dispatch(fetchHorarios());
    this.props.dispatch(fetchMisvis());
  }

  componentDidUpdate() {
    $('.collapsible-body').on('click', function() {
     $('.button-collapse').sideNav('hide');
    });
    $('.side-but').on('click', function() {
     $('.button-collapse').sideNav('hide');
    });
  }

  goToActions(takeThis){
    this.props.dispatch(setTipoCurso(takeThis));
    // set default submenus
    switch (takeThis) {
      case 'natacion':
      let ninos = 'ninos'
          this.props.dispatch(setCualClase(ninos));
        break;
      case 'gimnasio':
      let spinning = 'spinning'
          this.props.dispatch(setCualClase(spinning));
        break;
      case 'hidro':
      let hidrogimnasia = 'hidrogimnasia'
          this.props.dispatch(setCualClase(hidrogimnasia));
        break;
      case 'mente':
      let pilates = 'pilates'
          this.props.dispatch(setCualClase(pilates));
        break;
      default:

    }

  }
  // <li className="nav-icon center" onClick={() => this.goToActions(mente)}><Link to='/main'><i className="mente icon"></i>Test</Link></li>

  navDefaultOptions(){
    let navItem = this.props.cursos.filter((clase, index, self) => self.findIndex((c) => {return c.tipo_curso === clase.tipo_curso }) === index);
    return(
      <div>
        {Object.keys(navItem).map(key => <li key={key} className={`nav-icon center ${navItem[key].tipo_curso}`} onClick={() => this.goToActions(navItem[key].tipo_curso)}><Link to='/main'><i className={`icon-${navItem[key].tipo_curso} icon`}></i>{ortografica(navItem[key].tipo_curso)}</Link></li>)}
        <li className="nav-icon center"><Link to='/nosotros'><i className="nosotros icon"></i>nosotros</Link></li>
        <li className="nav-icon center"><Link to='/contacto'><i className="icon-contacto icon"></i>contacto</Link></li>
        <li className="nav-icon center"><Link to='/horarios'><i className="horarios icon"></i>horarios</Link></li>
        <li className="nav-icon center"><Link to='/tarifas'><i className="tarifas icon"></i>tarifas</Link></li>
        <li className="nav-icon center"><Link to='/ubicacion'><i className="ubicacion icon"></i>ubicación</Link></li>
      </div>
    )
  }

  navs() {
    switch(this.props.user.role) {
      case'visitor':
        return(
          <div>
            <li className="nav-icon center"><Link to='/'><i className="home icon"></i>home</Link></li>
            {this.navDefaultOptions()}
            <li className="nav-icon center"><a style={{ cursor: 'pointer' }} onClick={this.logout}><i className="logout icon"></i>logout</a></li>
          </div>
        );
      case'admin':
        return(
          <div>
            <li className="nav-icon center"><Link to='/admin'><i className="admin icon"></i>admin</Link></li>
            {this.navDefaultOptions()}
            <li className="nav-icon center"><a style={{ cursor: 'pointer' }} onClick={this.logout}><i className="logout icon"></i>logout</a></li>
          </div>
        );
      default:
        return(
          <div>
            <li className="nav-icon center"><Link to='/'><i className="home icon"></i>home</Link></li>
            {this.navDefaultOptions()}
            <li className="nav-icon center"><Link to='/signin'><i className="login icon"></i>login</Link></li>
          </div>
        );
    }
  }

  theDoubt(){
    if(this.props.user.role === "admin" || this.props.user.role === "visitor"){
      return(
        <li className="side-but col s12 m12"><a style={{ cursor: 'pointer' }} onClick={this.logout}><i className="logout icon"></i>logout</a></li>
      )
    } else {
      return (
        <li className="side-but col s12 m12"><Link to='/signin'><i className="login icon"></i>login</Link></li>
      )
    }
  }

  sideNav(){
    let navItem = this.props.cursos.filter((clase, index, self) => self.findIndex((c) => {return c.tipo_curso === clase.tipo_curso }) === index);
    return(
      <div className='row'>
        {Object.keys(navItem).map(key => <li key={key} className="side-but col s12 m12" onClick={() => this.goToActions(navItem[key].tipo_curso)}><Link to='/main'><i className={`icon-${navItem[key].tipo_curso} icon`}></i>{ortografica(navItem[key].tipo_curso)}</Link></li>)}
        <li className="side-but col s12 m12"><Link to='/nosotros'><i className="nosotros icon"></i>nosotros</Link></li>
        <li className="side-but col s12 m12"><Link to='/contacto'><i className="icon-contacto icon"></i>contacto</Link></li>
        <li className="side-but col s12 m12"><Link to='/horarios'><i className="horarios icon"></i>horarios</Link></li>
        <li className="side-but col s12 m12"><Link to='/tarifas'><i className="tarifas icon"></i>tarifas</Link></li>
        <li className="side-but col s12 m12"><Link to='/ubicacion'><i className="ubicacion icon"></i>ubicación</Link></li>
        {this.theDoubt()}
      </div>
    )
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href='#' data-activates='mobile' className='button-collapse' >
              <i className="hamburger"></i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.navs()}
            </ul>
            <ul className='side-nav' id='mobile'>
              {this.sideNav()}
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    cursos: state.cursos,
    profesors: state.profesors,
    misvis: state.misvis
  }
}

export default connect(mapStateToProps)(Navbar);



// <li className="nav-icon center"><Link to='/main'><i className="natacion icon"></i>Natación</Link></li>
// <li className="nav-icon center"><Link to='/main'><i className="gimnasio icon"></i>Gimancia</Link></li>
// <li className="nav-icon center"><Link to='/main'><i className="hidro icon"></i>Hidro</Link></li>
// <li className="nav-icon center"><Link to='/main'><i className="mente icon"></i>Mente</Link></li>

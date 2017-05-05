import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';


class Navbar extends Component {

  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.navs = this.navs.bind(this);
    this.sideNav = this.sideNav.bind(this);
    this.theDoubt = this.theDoubt.bind(this);
    this.navDefaultOptions = this.navDefaultOptions.bind(this);
  }


  logout(e) {
    e.preventDefault();
    // console.log('logout dispatcher');
    this.props.dispatch(logout(this.props.history));
  }

  componentDidMount() {
    $('.button-collapse').sideNav();
    $('.button-collapse').on('click', function(){
      $('.nav-wrapper').toggleClass('clicked');
    });
    $('.side-but').on('click', function() {
     $('.button-collapse').sideNav('hide');
    });
  }

  componentDidUpdate() {
    $('.collapsible-body').on('click', function() {
     $('.button-collapse').sideNav('hide');
    });
    $('.side-but').on('click', function() {
     $('.button-collapse').sideNav('hide');
    });
  }

  navDefaultOptions(){
    return(
      <div>
        <li className="nav-icon center"><Link to='/'><i className="natacion icon"></i>Natación</Link></li>
        <li className="nav-icon center"><Link to='/'><i className="gimnacio icon"></i>Gimancia</Link></li>
        <li className="nav-icon center"><Link to='/'><i className="hidro icon"></i>Hidro</Link></li>
        <li className="nav-icon center"><Link to='/'><i className="mente icon"></i>Mente</Link></li>
        <li className="nav-icon center"><Link to='/'><i className="nosotros icon"></i>Nosotros</Link></li>
        <li className="nav-icon center"><Link to='/'><i className="contacto icon"></i>Contacto</Link></li>
        <li className="nav-icon center"><Link to='/'><i className="horarios icon"></i>Horarios</Link></li>
        <li className="nav-icon center"><Link to='/'><i className="tarifas icon"></i>Tarifas</Link></li>
        <li className="nav-icon center"><Link to='/'><i className="ubicacion icon"></i>Ubicacion</Link></li>
      </div>
    )
  }

  navs() {
    switch(this.props.user.role) {
      case'visitor':
        return(
          <div>
            <li className="nav-icon center"><Link to='/'><i className="home icon"></i>Home</Link></li>
            {this.navDefaultOptions()}
            <li className="nav-icon center"><a style={{ cursor: 'pointer' }} onClick={this.logout}><i className="logout icon"></i>Logout</a></li>
          </div>
        );
      case'admin':
        return(
          <div>
            <li className="nav-icon center"><Link to='/admin'><i className="admin icon"></i>Admin</Link></li>
            {this.navDefaultOptions()}
            <li className="nav-icon center"><a style={{ cursor: 'pointer' }} onClick={this.logout}><i className="logout icon"></i>Logout</a></li>
          </div>
        );
      default:
        return(
          <div>
            <li className="nav-icon center"><Link to='/'><i className="home icon"></i>Home</Link></li>
            {this.navDefaultOptions()}
            <li className="nav-icon center"><Link to='/signin'><i className="login icon"></i>Login</Link></li>
          </div>
        );
    }
  }

  theDoubt(){
    if(this.props.user.role === "admin" || this.props.user.role === "visitor"){
      return(
        <li className="side-but col s6 m6 color-01"><a style={{ cursor: 'pointer' }} onClick={this.logout}><i className="logout icon"></i>Logout</a></li>
      )
    } else {
      return (
        <li className="side-but col s6 m6 color-01"><Link to='/signin'><i className="login icon"></i>Login</Link></li>
      )
    }
  }

  sideNav(){
    return(
      <div className='row'>
        <li className="side-but col s6 m6 color-01"><Link to='/'><i className="natacion icon"></i>Natación</Link></li>
        <li className="side-but col s6 m6 color-04"><Link to='/'><i className="gimnacio icon"></i>Gimnacio</Link></li>
        <li className="side-but col s6 m6 color-05"><Link to='/'><i className="hidro icon"></i>Hidro</Link></li>
        <li className="side-but col s6 m6 color-03"><Link to='/'><i className="mente icon"></i>Mente</Link></li>
        <li className="side-but col s6 m6 color-02"><Link to='/'><i className="nosotros icon"></i>Nosotros</Link></li>
        <li className="side-but col s6 m6 color-04"><Link to='/'><i className="contacto icon"></i>Contacto</Link></li>
        <li className="side-but col s6 m6 color-04"><Link to='/'><i className="horarios icon"></i>Horarios</Link></li>
        <li className="side-but col s6 m6 color-03"><Link to='/'><i className="tarifas icon"></i>Tarifas</Link></li>
        <li className="side-but col s6 m6 color-05"><Link to='/'><i className="ubicacion icon"></i>Ubicación</Link></li>
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
  return { user: state.user }
}

export default connect(mapStateToProps)(Navbar);

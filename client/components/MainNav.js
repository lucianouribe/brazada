import React from 'react';
import { connect } from 'react-redux';
import { setCualClase } from '../actions/submenus';


class MainNav extends React.Component {

  constructor(props){
    super(props);

    this.menuItems = this.menuItems.bind(this);
    this.goToSubActions = this.goToSubActions.bind(this);
  }

  goToSubActions(takeThis){
    this.props.dispatch(setCualClase(takeThis))
  }

  menuItems(){
    let info = this.props.infoCursos
    if(info.length){
      return info.map( inf => {
        return(<div className="btn" key={inf.id} onClick={() => this.goToSubActions(inf.nombre)}>{inf.nombre}</div>);
      })
    } else {
      return(<h4>No hay informacion</h4>);
    }
  }

  render(){
    return (
      <div className='main-nav'>
        {this.menuItems()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(MainNav);

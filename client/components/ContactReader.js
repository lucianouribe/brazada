import React from 'react';
import { connect } from 'react-redux';
import { fetchMensajes } from '../actions/contactos';
import Mensaje from './Mensaje';

class ContactReader extends React.Component {

  constructor(){
    super();

  }

  componentDidMount() {
    this.props.dispatch(fetchMensajes());
  }

  displayMensajes() {
    let contactos = this.props.contactos
    if(contactos.length) {
      return contactos.map( mensaje => {
        return(<Mensaje key={mensaje.id} mensaje={mensaje} />);
      })
    } else {
      return(<h4>Sin Mensajes</h4>);
    }
  }


  render(){
    return (
      <div className='row'>
        <div className='admin-title'>
          <h1>Hola {this.props.user.first_name}. Todos los Mensajes</h1>
        </div>
        <div className='message-section'>
          {this.displayMensajes()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    contactos: state.contactos
 }
}

export default connect(mapStateToProps)(ContactReader);

import React from 'react';
import { connect } from 'react-redux';

class Admin extends React.Component {
  render(){
    return (
      <div className='row'>
        <div className='admin-title'>
          <h1>Hola {this.props.user.first_name}. Todos los Mensajes</h1>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    tiposCurso: state.tiposCurso
 }
}

export default connect(mapStateToProps)(Admin);

import React from 'react';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import ContactReader from './ContactReader';

class Admin extends React.Component {
  render(){
    return (
      <div>
        <Dashboard clasName="row"/>
        <div className="admin-content right col s12 m8 l8">
          <ContactReader />
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
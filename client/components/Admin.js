import React from 'react';
import Dashboard from './Dashboard';

class Admin extends React.Component {
  render(){
    return (
      <div>
        <Dashboard clasName="row"/>
        <div className="admin-content right col s12 m8 l8">
          hello
        </div>
      </div>
    )
  }
}

export default Admin;

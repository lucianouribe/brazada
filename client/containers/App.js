import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/auth.js';
import Navbar from '../components/Navbar.js';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    $.ajax({
      url: 'api/users/info',
      type: 'GET',
      dataType: 'JSON'
    }).done( user => {
      this.props.dispatch(refreshLogin(user));
    }).fail( err => {
      console.log(err)
    });
  }

  render(){
    return (
      <div>
        <Navbar />
        { this.props.children }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(App);

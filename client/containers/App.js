import React from 'react';
import { connect } from 'react-redux';
import { logout, refreshLogin } from '../actions/auth.js';
import { setStater } from '../actions/menus.js';
import Navbar from '../components/Navbar.js';
import Flash from '../components/Flash.js';

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
      // console.log('hit done in componentDidMount')
      // console.log(user)
      this.props.dispatch(refreshLogin(user));
    }).fail( err => {
      // console.log('hit fail in componentDidMount')
      // console.log(err)
    });
  }


  render(){
    return (
      <div id="the-app">
        <Navbar />
        <Flash />
        { this.props.children }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    menus: state.menus
  }
}

export default connect(mapStateToProps)(App);

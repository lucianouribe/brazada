import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';
import { Link } from 'react-router';
import { setFlash } from '../actions/flash';


class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let { email, password } = this.refs;
    let user = { user: {
      email: email.value,
      password: password.value
    }}
    $.ajax({
      url: '/users/sign_in',
      type: 'POST',
      dataType: 'JSON',
      data: user
    }).done( user => {
      console.log('loged in or sign in')
      this.props.dispatch(refreshLogin(user));
      this.props.history.push("/home")
      this.props.dispatch(setFlash(message, 'success'))
    }).fail( err => {
      console.log('something failed with the log in')
      console.log(err);
      this.props.dispatch(setFlash(message, 'error'))
    });
  }

  render() {
    return(
      <div>
        <h2 className="center titulo">Ingresar</h2>
        <form className="container" onSubmit={this.handleSubmit}>
          <input type="email" required={true} ref="email" placeholder="email" />
          <input type="password" required={true} ref="password" placeholder="password" />
          <button className='btn btn-main'>Ingresar</button>
          <span className="right"><Link className="btn btn-sec" to='/signup'>Registrarse</Link></span>
        </form>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    flash: state.flash
 }
}

export default connect(mapStateToProps)(SignIn);

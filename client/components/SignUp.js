import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';
import { Link } from 'react-router';


class SignUp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.roleDefinition = this.roleDefinition.bind(this)
    this.showPassInput = this.showPassInput.bind(this)
  }


  handleSubmit(e) {
    e.preventDefault();
    let { first_name, last_name, email, password, password_confirmation } = this.refs;
    let role = 'visitor'
    if(this.refs.code.value === 'loteria'){
      role = 'admin'
    }else {
      role = 'visitor'
    };
    let user = { user: {
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      role: role,
      password: password.value,
      password_confirmation: password_confirmation.value
    }}

    $.ajax({
      url: '/users',
      type: 'POST',
      data: user,
      dataType: 'JSON'
    }).done( user => {
      // console.log('till here it works');
      // console.log(user);
      this.props.dispatch(refreshLogin(user));
      this.props.history.push('/dashboard');
    }).fail( err => {
      // console.log('something failed in the sign up');
      // console.log(user);
      // console.log(err);
      this.props.history.push('/');
    });
  }

  roleDefinition() {
    this.setState({open: !this.state.open})
  }

  showPassInput() {
    if(this.state.open === true) {
      return(<input className="secret-code" placeholder="type code" ref="code"/>)
    } else {
      return(<input ref="code" placeholder="type code" disabled hidden/>)
    }
  }


  render() {
    return(
      <div className="container">
        <h2 className='center titulo'>Registro</h2>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="first_name" ref="first_name" required={true} />
          <input placeholder="last_name" ref="last_name" required={true} />
          <input type='email' placeholder="email" ref="email" required={true} />
          <div className='btn btn-sec btn-opt' onClick={this.roleDefinition}>codigo acceso</div>
          {this.showPassInput()}
          <input type='password' placeholder="password" ref="password" required={true} />
          <input type='password' placeholder="password_confirmation" ref="password_confirmation" required={true} />
          <button className='btn btn-main btn-opt'>Registrarse</button>
        </form>
      </div>
    );
  }

}

export default connect()(SignUp);

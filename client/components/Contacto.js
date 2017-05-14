import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Contacto extends React.Component {

  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }


  render() {
    return(
      <div>
        <h2 className="center titulo">Contacto</h2>
        <form className="container contacto" onSubmit={this.handleSubmit}>
          <input placeholder="nombre completo" ref="first_name" required={true} />
          <input type='email' placeholder="correo electrónico" ref="email" required={true} />
          <textarea ref="mensaje" placeholder="mensaje" ></textarea>
          <button className='btn btn-main'>Enviar</button>
        </form>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {

 }
}

export default connect(mapStateToProps)(Contacto);

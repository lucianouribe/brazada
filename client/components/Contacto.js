import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Contacto extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let contacto = { contacto: {
      nombre: this.refs.nombre.value,
      correo: this.refs.correo.value,
      mensaje: this.refs.mensaje.value,
    }}
    console.log(contacto);
    $.ajax({
      url: '/api/contacto',
      type: 'POST',
      dataType: 'HTML',
      data: contacto
    }).done( contacto => {
      console.log('contacto done')
      this.refs.mailForm.reset();
    }).fail( err => {
      console.log('something failed with the contact')
      console.log(err);
      this.refs.mailForm.reset();
    });
  }

  render() {
    return(
      <div>
        <h2 className="center titulo">Contacto</h2>
        <form className="container contacto" ref="mailForm" onSubmit={this.handleSubmit}>
          <input placeholder="nombre completo" ref="nombre" required={true} />
          <input type='email' placeholder="correo electrónico" ref="correo" required={true} />
          <textarea ref="mensaje" placeholder="mensaje" ></textarea>
          <button type="submit" className='btn btn-main'>Enviar</button>
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

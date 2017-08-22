import React from 'react';
import { connect } from 'react-redux';


class Responder extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = this.props.user;
    let responder = { responder: {
      nombre: `Respuesta de ${user.first_name} ${user.last_name} de la Academia Brazada`,
      correo: this.props.whoTo.correo,
      mensaje: this.refs.mensaje.value,
    }}
    console.log(responder);
    $.ajax({
      url: '/api/responder',
      type: 'POST',
      dataType: 'JSON',
      data: responder
    }).done( responder => {
      // console.log('answer done')
      this.refs.respuestaForm.reset();
    }).fail( err => {
      console.log('something failed with the answer')
      console.log(err);
      this.refs.respuestaForm.reset();
    });
  }

  render() {
    return(
      <div>
        <h2 className="center titulo">Responder a: {this.props.whoTo.nombre}</h2>
        <form className="container contacto" ref="respuestaForm" onSubmit={this.handleSubmit}>
          <textarea ref="mensaje" placeholder="mensaje" ></textarea>
          <button type="submit" className='btn btn-opt btn-resp'>Enviar</button>
          <div className='btn btn-opt' onClick={this.props.toggleMailer}>back</div>
        </form>
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

export default connect(mapStateToProps)(Responder);

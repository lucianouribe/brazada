import React from 'react';
import { connect } from 'react-redux';
import { deleteMensaje, leidoSetup, importanciaSetup } from '../actions/contactos';

class Mensaje extends React.Component {

  constructor(){
    super();

    this.state = {
      show: false
    }
    this.handleLeido = this.handleLeido.bind(this);
    this.handleImportante = this.handleImportante.bind(this);
    this.showMessage = this.showMessage.bind(this);
    this.discoverMessage = this.discoverMessage.bind(this);
    this.doSomeThings = this.doSomeThings.bind(this);
  }

  componentDidMount() {
    $('select').material_select();
  }

  componentDidUpdate() {
    $('select').material_select();
  }

  handleLeido(){
    let lectura = !this.props.mensaje.leido
    this.props.dispatch(leidoSetup(this.props.mensaje.id, lectura));
  }

  handleImportante(){
    let importancia = !this.props.mensaje.importancia
    this.props.dispatch(importanciaSetup(this.props.mensaje.id, importancia));
  }

  showMessage(){
    this.setState({ show: !this.state.show })
  }

  discoverMessage(){
    if(this.state.show){
      return(
        <div className='mensaje abajo'>
          <i className="material-icons right" onClick={this.showMessage}>close</i>
          <p>De:{this.props.mensaje.correo}</p>
          <p>{this.props.mensaje.mensaje}</p>
        </div>
      )
    }
  }

  doSomeThings(){
    this.props.toggleMailer();
    this.props.setReceiver(this.props.mensaje);
  }

  render(){
    let mensaje = this.props.mensaje;
    let gooo;
    if(mensaje.importancia){
      gooo = 'importante'
    }
    return (
      <div>
        <div className={`mensaje arriba ${gooo}`}>
          <div className='importante-checkbox'>
            <input type="checkbox" id={mensaje.id} onClick={this.handleImportante} checked={mensaje.importancia}/>
            <label htmlFor={mensaje.id}></label>
          </div>
          <span className='titulo-mensaje'><h4 onClick={this.showMessage}>{mensaje.nombre}</h4></span>
          <span className='botones'>
            <i className="material-icons btn-icon btn-delete" onClick={() => this.props.dispatch(deleteMensaje(mensaje.id))}>delete</i>
            <i className="material-icons btn-icon btn-mail" onClick={this.doSomeThings}>email</i>
            <div className="switch">
              <label>
                <input ref="user_type" type="checkbox" onClick={this.handleLeido} checked={mensaje.leido} />
                <span className="lever"></span>
                Leido
              </label>
            </div>
          </span>
        </div>
        <div >
          {this.discoverMessage()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

 }
}

export default connect(mapStateToProps)(Mensaje);

import React from 'react';
import { connect } from 'react-redux';
import { fetchTarifas, addTarifa } from '../actions/tarifas';
import Tarifa from './Tarifa';

class Tarifas extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
    }

    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.displayChanger = this.displayChanger.bind(this);
    this.addForm = this.addForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $('select').material_select();
    this.props.dispatch(fetchTarifas());
  }

  componentDidUpdate() {
    $('select').material_select();
  }

  displayTarifas(){
    let tarifas = this.props.tarifas
    if(tarifas.length){
      return tarifas.map( tarifa => {
        return(<Tarifa key={tarifa.id} tarifa={tarifa} tiposTarifa={this.state.tiposTarifa} />);
      })
    } else {
      return(<h4>No hay tarifas</h4>);
    }
  }

  toggleDisplay(){
    this.setState({showForm: !this.state.showForm})
  }

  displayChanger(){
    if(this.state.showForm) {
      return(this.addForm());
    } else {
      return(this.displayTarifas());
    }
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('handle sumbit')
    let plan = this.refs.plan.value;
    let nombre = this.refs.nombre.value;
    let valor = this.refs.valor.value;
    let descripcion = this.refs.descripcion.value;

    this.props.dispatch(addTarifa(plan, nombre, valor, descripcion ))
    this.toggleDisplay();
  }


  addForm(){
    return(
      <div className="col s12 m12">
        <div className="card">
          <form className="input-field">
            <div className="card-content">
              <h3 className='card-title'>Nueva Tarifa</h3>
              <p>
                <strong>Plan:</strong>
                <input type="text" ref='plan' required/>
              </p>
              <p>
                <strong>Nombre:</strong>
                <input type="text" ref='nombre' required placeholder="separados por comas"/>
              </p>
              <p>
                <strong>Valor:</strong>
                <input type="text" ref="valor" required placeholder="separados por comas"/>
              </p>
              <p>
                <strong>Descripcion:</strong>
                <input type="text" ref="descripcion" required/>
              </p>
            </div>
            <div className="card-action">
              <span onClick={this.handleSubmit}><i className="material-icons">done</i></span>
              <span onClick={this.toggleDisplay}><i className="material-icons">cancel</i></span>
            </div>
          </form>
        </div>
      </div>
    );
  }


  render(){
    return (
      <div className='row'>
        <div className='admin-title'>
          <h1>Hola {this.props.user.first_name}. Todas las Tarifas</h1>
          <span className='right' onClick={this.toggleDisplay}><i className="material-icons large">add</i></span>
        </div>
        {this.displayChanger()}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    tarifas: state.tarifas,
    // tiposTarifa: state.tiposTarifa
 }
}

export default connect(mapStateToProps)(Tarifas);

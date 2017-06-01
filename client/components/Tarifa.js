import React from 'react';
import { connect } from 'react-redux';
import { editTarifa, deleteTarifa } from '../actions/tarifas';


class Tarifa extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false
    }

    this.toggleEdit = this.toggleEdit.bind(this);
    this.displayEdit = this.displayEdit.bind(this);
    this.editTarifa = this.editTarifa.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleEdit() {
    this.setState({edit: !this.state.edit});
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('Tarifa handle submit');

    let plan = this.refs.plan.value;
    let nombre = this.refs.nombre.value;
    let valor = this.refs.valor.value;
    let descripcion = this.refs.descripcion.value;

    this.props.dispatch(editTarifa(this.props.tarifa.id, plan, nombre, valor, descripcion))
    this.toggleEdit();
  }

  editTarifa() {
    let tarifa = this.props.tarifa;
    return(
      <div className="col s12 m4">
        <div className="card">
          <form>
            <div className="card-content">
              <p>
                <strong>Plan:</strong>
                <input type="text" ref='plan' defaultValue={tarifa.plan} />
              </p>
              <p>
                <strong>Nombre:</strong>
                <input type="text" ref="nombre" defaultValue={tarifa.nombre} />
              </p>
              <p>
                <strong>Valor:</strong>
                <input type="text" ref="valor" defaultValue={tarifa.valor} />
              </p>
              <p>
                <strong>descripcion:</strong>
                <input type="text" ref="descripcion" defaultValue={tarifa.descripcion} />
              </p>
            </div>
            <div className="card-action">
              <span onClick={this.handleSubmit}><i className="material-icons">done</i></span>
              <span onClick={this.toggleEdit}><i className="material-icons">cancel</i></span>
            </div>
          </form>
        </div>
      </div>
    );
  }

  displayEdit(){
    let tarifa = this.props.tarifa;
    return (
      <div className="col s12 m4 l4">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{ tarifa.plan }</span>
            <p>nombre: {tarifa.nombre}</p>
            <p>valor: {tarifa.valor}</p>
            <p>descripcion: {tarifa.descripcion}</p>
          </div>
          <div className="card-action">
            <span onClick={this.toggleEdit}><i className="material-icons">mode_edit</i></span>
            <span onClick={() => this.props.dispatch(deleteTarifa(tarifa.id))}><i className="material-icons">delete</i></span>
          </div>
        </div>
      </div>
    )
  }


  render(){
    if(this.state.edit) {
      return(this.editTarifa());
    } else {
      return(this.displayEdit());
    }
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user
 }
}

export default connect(mapStateToProps)(Tarifa);

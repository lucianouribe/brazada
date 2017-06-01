import React from 'react';
import { connect } from 'react-redux';
import { editProfesor, deleteProfesor } from '../actions/profesors';


class Profesor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false
    }

    this.toggleEdit = this.toggleEdit.bind(this);
    this.displayEdit = this.displayEdit.bind(this);
    this.editProfesor = this.editProfesor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleEdit() {
    this.setState({edit: !this.state.edit});
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('Profesor handle submit');

    let nombre = this.refs.nombre.value;
    let apellido = this.refs.apellido.value;
    let especialidad = this.refs.especialidad.value;
    let no_clases = this.refs.no_clases.value;
    let salario = this.refs.salario.value;

    this.props.dispatch(editProfesor(this.props.profesor.id, nombre, apellido, especialidad, no_clases, salario))
    this.toggleEdit();
  }

  editProfesor() {
    let profesor = this.props.profesor;
    return(
      <div className="col s12 m4">
        <div className="card">
          <form>
            <div className="card-content">
              <p>
                <strong>Nombre:</strong>
                <input type="text" ref='nombre' defaultValue={profesor.nombre} />
              </p>
              <p>
                <strong>Apellido:</strong>
                <input type="text" ref="apellido" defaultValue={profesor.apellido} />
              </p>
              <p>
                <strong>Especialidad:</strong>
                <input type="text" ref="especialidad" defaultValue={profesor.especialidad} />
              </p>
              <p>
                <strong>No Clases:</strong>
                <input type="text" ref="no_clases" defaultValue={profesor.no_clases} />
              </p>
              <p>
                <strong>Salario:</strong>
                <input type="text" ref="salario" defaultValue={profesor.salario} />
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
    let profesor = this.props.profesor;
    return (
      <div className="col s12 m4 l4">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{ profesor.nombre } {profesor.apellido}</span>
            <p>Especialidad: {profesor.especialidad}</p>
            <p>No Clases: {profesor.no_clases}</p>
            <p>Salario: {profesor.salario}</p>
          </div>
          <div className="card-action">
            <span onClick={this.toggleEdit}><i className="material-icons">mode_edit</i></span>
            <span onClick={() => this.props.dispatch(deleteProfesor(profesor.id))}><i className="material-icons">delete</i></span>
          </div>
        </div>
      </div>
    )
  }


  render(){
    if(this.state.edit) {
      return(this.editProfesor());
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

export default connect(mapStateToProps)(Profesor);

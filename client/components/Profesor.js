import React from 'react';
import { connect } from 'react-redux';
import { editProfesor, deleteProfesor } from '../actions/profesors';
import { ortografica, capitalizer } from '../helpers';


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

    let nombre = this.refs.nombre.value.toLowerCase();
    let apellido = this.refs.apellido.value.toLowerCase();
    let especialidad = this.refs.especialidad.value;
    let cual_curso = this.refs.cual_curso.value;

    this.props.dispatch(editProfesor(this.props.profesor.id, nombre, apellido, especialidad, cual_curso))
    this.toggleEdit();
  }

  editProfesor() {
    let profesor = this.props.profesor;

    let elCurso = this.props.misvis.filter( misvi => { if(misvi.titulo === 'tipos_curso') return misvi })

    let cursoType = elCurso[0].articulo.split(", ").map((tipo_de_curso, i) => {
      let checked = true;
      // if(tipo_de_curso === profesor.especialidad) checked={true}
      if(tipo_de_curso === profesor.especialidad)
        return (
          <option type="text" key={i} selected={checked} value={tipo_de_curso}>{ortografica(tipo_de_curso)}</option>
        );
    });

    return(
      <div className="col s12 m4">
        <div className="card form-edit">
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
                <select className="browser-default" ref="especialidad" required>
                  <option disabled selected>select</option>
                  {cursoType}
                </select>
              </p>
              <p>
                <strong>Clases:</strong>
                <input type="text" ref="cual_curso" defaultValue={profesor.cual_curso} />
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
            <span className="card-title">{ capitalizer(profesor.nombre) } { capitalizer(profesor.apellido) }</span>
            <p>Especialidad: {profesor.especialidad}</p>
            <p>Cual: {profesor.cual_curso}</p>
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
    user: state.user,
    misvis: state.misvis
 }
}

export default connect(mapStateToProps)(Profesor);

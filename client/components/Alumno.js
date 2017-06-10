import React from 'react';
import { connect } from 'react-redux';
import { deleteAlumno, editAlumno } from '../actions/alumnos';


class Alumno extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      edit: false
    }

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('Alumno handle submit');

    let primer_nombre = this.refs.primerNombre.value;
    let segundo_nombre = this.refs.segundoNombre.value;
    let primer_apellido = this.refs.primerApellido.value;
    let segundo_apellido = this.refs.segundoApellido.value;
    let cedula = this.refs.cedula.value;
    let correo = this.refs.correo.value;
    let fecha_nacimiento = this.refs.fechaNacimiento.value;
    let direccion = this.refs.direccion.value;
    let telefono = this.refs.telefono.value;
    let fecha_matriculacion = this.refs.fechaMatriculacion.value;
    let programa = this.refs.programa.value;
    let nivel = this.refs.nivel.value;
    let estado = this.refs.estado.value;
    let genero = this.refs.genero.value;

    this.props.dispatch(editAlumno(this.props.alumno.id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, cedula, correo, fecha_nacimiento, direccion, telefono, fecha_matriculacion, programa, nivel, estado, genero));
    this.toggleEdit();
  }

  toggleEdit() {
    this.setState({edit: !this.state.edit});
  }

  editAlumno() {
    let alumno = this.props.alumno;
    return(
        <div className="alumno form-edit card">
          <form>
            <div className="card-content">
              <p>
                <strong>Estado:</strong>
                <input type="text" ref='estado' defaultValue={alumno.estado} />
              </p>
              <p>
                <strong>Primer Nombre:</strong>
                <input type="text" ref='primerNombre' defaultValue={alumno.primer_nombre} />
                <strong>Segundo Nombre:</strong>
                <input type="text" ref='segundoNombre' defaultValue={alumno.segundo_nombre} />
                <strong>Primer Apellido:</strong>
                <input type="text" ref='primerApellido' defaultValue={alumno.primer_apellido} />
                <strong>Primer Apellido:</strong>
                <input type="text" ref='segundoApellido' defaultValue={alumno.segundo_apellido} />
              </p>
              <p>
                <strong>Genero:</strong>
                <input type="text" ref="genero" defaultValue={alumno.genero} />
              </p>
              <p>
                <strong>Cedula:</strong>
                <input type="text" ref="cedula" defaultValue={alumno.cedula} />
              </p>
              <p>
                <strong>email:</strong>
                <input type="email" ref="correo" defaultValue={alumno.correo} />
              </p>
              <p>
                <strong>Direccion:</strong>
                <input type="text" ref="direccion" defaultValue={alumno.direccion} />
              </p>
              <p>
                <strong>Telefono:</strong>
                <input type="number" ref="telefono" defaultValue={alumno.telefono} />
              </p>
              <p>
                <strong>Nacimiento:</strong>
                <input type="date" ref="fechaNacimiento" defaultValue={alumno.fecha_nacimiento} />
              </p>
              <p>
                <strong>Matriculacion:</strong>
                <input type="date" ref="fechaMatriculacion" defaultValue={alumno.fecha_matriculacion} />
              </p>
              <p>
                <strong>Programa:</strong>
                <input type="text" ref="programa" defaultValue={alumno.programa} />
              </p>
              <p>
                <strong>Nivel:</strong>
                <input type="text" ref="nivel" defaultValue={alumno.nivel} />
              </p>
            </div>
            <div className="card-action">
              <span onClick={this.handleSubmit}><i className="material-icons">done</i></span>
              <span onClick={this.toggleEdit}><i className="material-icons">cancel</i></span>
            </div>
          </form>
        </div>
    );
  }


  displayAlumno(){
    let alumno = this.props.alumno;
    return (
      <div className='alumno card'>
        <div className='alumno-line first'>
          <span>{alumno.id}</span>
          <span>{alumno.estado}</span>
          <strong>Nombre: </strong> <span>{alumno.primer_nombre} {alumno.segundo_nombre} {alumno.primer_apellido} {alumno.segundo_apellido}</span>
        </div>
        <div className='alumno-line'>
          <strong>Genero: </strong>
          <span>{alumno.genero}</span>
          <strong>Cedula: </strong>
          <span>{alumno.cedula}</span>
          <strong>Email: </strong>
          <span>{alumno.correo}</span>
          <strong>Direccion: </strong>
          <span>{alumno.direccion}</span>
          <strong>Telefono: </strong>
          <span>{alumno.telefono}</span>
        </div>
        <div className='alumno-line'>
          <strong>Fecha Nacimiento: </strong>
          <span>{alumno.fecha_nacimiento}</span>
          <strong>Fecha Matriculacion: </strong>
          <span> {alumno.fecha_matriculacion}</span>
          <strong>Programa: </strong>
          <span> {alumno.programa}</span>
          <strong>Nivel: </strong>
          <span>{alumno.nivel}</span>
        </div>
        <div className='botones-footer'>
          <span onClick={this.toggleEdit}><i className="material-icons">mode_edit</i></span>
          <span onClick={() => this.props.dispatch(deleteAlumno(alumno.id))}><i className="material-icons">delete</i></span>
        </div>
      </div>
    )
  }

  render(){
    if(this.state.edit) {
      return(this.editAlumno());
    } else {
      return(this.displayAlumno());
    }
  }

}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    alumnos: state.alumnos
 }
}

export default connect(mapStateToProps)(Alumno);

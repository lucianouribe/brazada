import React from 'react';
import { connect } from 'react-redux';
import { fetchAlumnos, addAlumno } from '../actions/alumnos';
import Alumno from './Alumno';

class Alumnos extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      showForm: false
    }

    this.addAlumno = this.addAlumno.bind(this);
    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.displayChanger = this.displayChanger.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.dispatch(fetchAlumnos());
  }

  toggleDisplay(){
    this.setState({ showForm: !this.state.showForm })
  }

  displayChanger(){
    if(this.state.showForm) {
      return(this.addAlumno());
    } else {
      return(this.displayAlumnos());
    }
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('handle sumbit')
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

    this.props.dispatch(addAlumno(primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, cedula, correo, fecha_nacimiento, direccion, telefono, fecha_matriculacion, programa, nivel, estado, genero));
    this.toggleDisplay();
  }

  displayAlumnos(){
    let alumnos = this.props.alumnos
    if(alumnos.length){
      return alumnos.map( alumno => {
        return(<Alumno key={alumno.id} alumno={alumno} />);
      })
    } else {
      return(<h4>No hay alumnos</h4>);
    }
  }

  addAlumno(){
    console.log('add alumno');
    let alumno = this.props.alumno;
    return(
        <div className="alumno nuevo-alumno">
          <h4>Nuevo Alumno</h4>
          <form>
            <div className="card-content">
              <strong>Estado:</strong>
              <input type="text" ref='estado' placeholder='estado' />
              <strong>Primer Nombre:</strong>
              <input type="text" ref='primerNombre' placeholder='primer nombre' />
              <strong>Segundo Nombre:</strong>
              <input type="text" ref='segundoNombre' placeholder='segundo nombre' />
              <strong>Primer Apellido:</strong>
              <input type="text" ref='primerApellido' placeholder='primer apellido' />
              <strong>Primer Apellido:</strong>
              <input type="text" ref='segundoApellido' placeholder='segundo apellido' />
              <strong>Genero:</strong>
              <input type="text" ref="genero" placeholder='genero' />
              <strong>Cedula:</strong>
              <input type="text" ref="cedula" placeholder='cedula' />
              <strong>Email:</strong>
              <input type="email" ref="correo" placeholder='correo' />
              <strong>Direccion:</strong>
              <input type="text" ref="direccion" placeholder='direccion' />
              <strong>Telefono:</strong>
              <input type="number" ref="telefono" placeholder='telefono' />
              <strong>Nacimiento:</strong>
              <input type="date" ref="fechaNacimiento" placeholder='fecha nacimiento' />
              <strong>Matriculacion:</strong>
              <input type="date" ref="fechaMatriculacion" placeholder='fecha matricula' />
              <strong>Programa:</strong>
              <input type="text" ref="programa" placeholder='programa' />
              <strong>Nivel:</strong>
              <input type="text" ref="nivel" placeholder='nivel' />
            </div>
            <div className="card-action">
              <span onClick={this.handleSubmit}><i className="material-icons">done</i></span>
              <span onClick={this.toggleDisplay}><i className="material-icons">cancel</i></span>
            </div>
          </form>
        </div>
    );
  }

  render(){
    return (
      <div className='alumnos'>
        <div className='admin-title'>
          <h1>Hola {this.props.user.first_name}: Los Alumnos</h1>
          <span className='right' onClick={this.toggleDisplay}><i className="material-icons large">add</i></span>
        </div>
        <form  className="form-search" >
          <input type="button" className='btn-go' value="Anadir nuevo"/>
          <input type="text" placeholder="nombre"/>
          <input type="text" placeholder="cedula"/>
          <input type="date" placeholder="fecha inscripcion"/>
          <input type="date" placeholder="fecha cumpleanos"/>
          <input type="submit" className='btn-go' value="buscar"/>
        </form>
        {this.displayChanger()}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    alumnos: state.alumnos
 }
}

export default connect(mapStateToProps)(Alumnos)

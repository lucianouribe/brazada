import React from 'react';
import { connect } from 'react-redux';
import { fetchCursos, addCurso } from '../actions/cursos';
import Curso from './Curso';

class Cursos extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
      tiposCurso: ['natacion', 'gimnacio', 'mente', 'hidro'],
      salones: ['piscina', 'salon 1', 'salon 2', 'salon 3', 'salon 4']
    }

    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.displayChanger = this.displayChanger.bind(this);
    this.addForm = this.addForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $('select').material_select();
    this.props.dispatch(fetchCursos());
  }

  componentDidUpdate() {
    $('select').material_select();
  }

  displayCursos(){
    let cursos = this.props.cursos
    if(cursos.length){
      return cursos.map( curso => {
        return(<Curso key={curso.id} curso={curso} tiposCurso={this.state.tiposCurso}/>);
      })
    } else {
      return(<h4>No hay cursos</h4>);
    }
  }

  toggleDisplay(){
    this.setState({showForm: !this.state.showForm})
  }

  displayChanger(){
    if(this.state.showForm) {
      return(this.addForm());
    } else {
      return(this.displayCursos());
    }
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('handle sumbit')
    let nombre = this.refs.nombre.value;
    let lugar = this.refs.lugar.value;
    let descripcion = this.refs.descripcion.value;
    let tipoCurso = this.refs.tipo_curso.value;
    let duracion = this.refs.duracion.value;

    this.props.dispatch(addCurso(nombre, lugar, descripcion, tipoCurso, duracion))
    this.toggleDisplay();
  }

  // let lugar = ""
  //   Object.keys(object).forEach(function (key) {
  //     let obj = object[key];
  //     if (obj.selected) {
  //       lugar += `${obj.value} `
  //     }
  //   });
  //
  //   <select>
  //     <option className="option-disable" value="" disabled selected>Escoger Lugar</option>
  //     {cualSalon}
  //   </select>

  addForm(){
    let cursoType = this.state.tiposCurso.map((tipo_curso, i) => {
      return (
        <option type="text" ref={tipo_curso} key={i}>{tipo_curso}</option>
      );
    });
    let cualSalon = this.state.salones.map((lugar, i) => {
      return (
        <option type="text" ref={lugar} key={i}>{lugar}</option>
      );
    });
    return(
      <div className="col s12 m12">
        <div className="card">
          <form className="input-field">
            <div className="card-content">
              <h3 className='card-title'>Nuevo Curso</h3>
              <p>
                <strong>Nombre:</strong>
                <input type="text" ref='nombre' required/>
              </p>
              <p>
                <strong>Tipo Curso:</strong>
                <input type="text" ref='tipo_curso' required/>
              </p>

              <p>
                <strong>Descripcion:</strong>
                <input type="text" ref="descripcion" required/>
              </p>
              <p>
                <strong>Lugar:</strong>
                <input type="text" ref="lugar" required/>
              </p>

              <p>
                <strong>Duracion:</strong>
                <input type="number" ref="duracion" required/>
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
          <h1>Hola {this.props.user.first_name}. Todos los Cursos</h1>
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
    cursos: state.cursos
 }
}

export default connect(mapStateToProps)(Cursos);

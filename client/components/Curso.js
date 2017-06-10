import React from 'react';
import { connect } from 'react-redux';
import { editCurso, deleteCurso } from '../actions/cursos';


class Curso extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false
    }

    this.toggleEdit = this.toggleEdit.bind(this);
    this.displayCurso = this.displayCurso.bind(this);
    this.editCurso = this.editCurso.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleEdit() {
    this.setState({edit: !this.state.edit});
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('Curso handle submit');

    let nombre = this.refs.nombre.value;
    let lugar = this.refs.lugar.value;
    let descripcion = this.refs.descripcion.value;
    let tipoCurso = this.refs.tipo_curso.value;
    let duracion = this.refs.duracion.value;

    this.props.dispatch(editCurso(this.props.curso.id, nombre, lugar, descripcion, tipoCurso, duracion))
    this.toggleEdit();
  }

  editCurso() {
    let curso = this.props.curso;
    return(
      <div className="col s12 m4">
        <div className="card form-edit">
          <form>
            <div className="card-content">
              <p>
                <strong>Nombre:</strong>
                <input type="text" required ref='nombre' defaultValue={curso.nombre} />
              </p>
              <p>
                <strong>Lugar:</strong>
                <input type="text" ref="lugar" required defaultValue={curso.lugar} />
              </p>
              <p>
                <strong>descripcion:</strong>
                <input type="text" ref="descripcion" required defaultValue={curso.descripcion} />
              </p>
              <p>
                <strong>Tipo Curso:</strong>
                <input type="text" ref="tipo_curso" required defaultValue={curso.tipo_curso} />
              </p>
              <p>
                <strong>Duracion:</strong>
                <input type="number" ref="duracion" required defaultValue={curso.duracion} />
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

  displayCurso(){
    let curso = this.props.curso;
    return (
      <div className="col s12 m4 l4">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{ curso.nombre }</span>
            <p>lugar: {curso.lugar}</p>
            <p>tipo curso: {curso.tipo_curso}</p>
            <p>descripcion: {curso.descripcion}</p>
            <p>duracion: {curso.duracion}</p>
          </div>
          <div className="card-action">
            <span onClick={this.toggleEdit}><i className="material-icons">mode_edit</i></span>
            <span onClick={() => this.props.dispatch(deleteCurso(curso.id))}><i className="material-icons">delete</i></span>
          </div>
        </div>
      </div>
    )
  }


  render(){
    if(this.state.edit) {
      return(this.editCurso());
    } else {
      return(this.displayCurso());
    }
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    tiposCurso: state.tiposCurso
 }
}

export default connect(mapStateToProps)(Curso);

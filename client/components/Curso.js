import React from 'react';
import { connect } from 'react-redux';
import { editCurso, deleteCurso } from '../actions/cursos';
import { ortografica } from '../helpers';


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

    this.props.dispatch(editCurso(this.props.curso.id, nombre, lugar, descripcion, tipoCurso))
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
                <strong>descripcion:</strong>
                <textarea type="text" ref="descripcion" required defaultValue={curso.descripcion} ></textarea>
              </p>
              <p>
                <strong>Lugar:</strong>
                <select className="browser-default" ref="lugar" required>
                  <option disabled selected>select</option>
                  <option>piscina</option>
                  <option>gimnasio</option>
                  <option value='salon 0'>salón 2 P1</option>
                  <option value='salon 1'>salón 1 P2</option>
                  <option value='salon 2'>salón 2 P2</option>
                </select>
              </p>
              <p>
                <strong>Tipo Curso:</strong>
                <select className="browser-default" ref="tipo_curso" required>
                  <option disabled selected>select</option>
                  <option value='natacion'>natación</option>
                  <option>gimnasio</option>
                  <option>hidro</option>
                  <option>mente</option>
                </select>
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
            <span className="card-title">{ ortografica(curso.nombre) }</span>
            <p>lugar: {curso.lugar}</p>
            <p>tipo curso: {ortografica(curso.tipo_curso)}</p>
            <p>descripcion: {curso.descripcion}</p>
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

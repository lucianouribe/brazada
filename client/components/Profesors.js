import React from 'react';
import { connect } from 'react-redux';
import { fetchProfesors, addProfesor } from '../actions/profesors';
import Profesor from './Profesor';

class Profesors extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
    }

    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.displayChanger = this.displayChanger.bind(this);
    this.addForm = this.addForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showSearcher = this.showSearcher.bind(this);
  }

  componentDidMount() {
    $('select').material_select();
    let full = 'full'
    this.props.dispatch(fetchProfesors(full));
  }

  componentDidUpdate() {
    $('select').material_select();
  }

  displayProfesors(){
    let profesors = this.props.profesors
    if(profesors.length){
      return profesors.map( profesor => {
        return(<Profesor key={profesor.id} profesor={profesor} tiposProfesor={this.state.tiposProfesor} />);
      })
    } else {
      return(<h4>No hay profesores</h4>);
    }
  }

  toggleDisplay(){
    this.setState({showForm: !this.state.showForm})
  }

  displayChanger(){
    if(this.state.showForm) {
      return(this.addForm());
    } else {
      return(this.displayProfesors());
    }
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('handle sumbit')
    let nombre = this.refs.nombre.value;
    let apellido = this.refs.apellido.value;
    let especialidad = this.refs.especialidad.value;
    let cual_curso = this.refs.cual_curso.value;
    let no_clases = this.refs.no_clases.value;
    let salario = this.refs.salario.value;

    this.props.dispatch(addProfesor(nombre, apellido, especialidad, cual_curso, no_clases, salario))
    this.toggleDisplay();
  }


  addForm(){
    return(
      <div className="col s12 m12">
        <div className="card form-card">
          <form className="input-field">
            <div className="card-content">
              <h3 className='card-title'>Nuevo Profesor</h3>
              <p>
                <strong>Nombre:</strong>
                <input type="text" ref='nombre' required/>
              </p>
              <p>
                <strong>Apellido:</strong>
                <input type="text" ref='apellido' required/>
              </p>
              <p>
                <strong>Especialidad:</strong>
                <input type="text" ref="especialidad" required/>
              </p>
              <p>
                <strong>Curso:</strong>
                <input type="text" ref="cual_curso" required/>
              </p>
              <p>
                <strong>No Clases:</strong>
                <input type="text" ref="no_clases" required/>
              </p>
              <p>
                <strong>Salario:</strong>
                <input type="text" ref="salario" required/>
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

  handleChange(){
    this.props.dispatch(fetchProfesors(this.refs.searchInput.value));
    // signals with colors the matched words
    $(`.card span`).removeClass("matched");
    $(`.card p`).removeClass("matched");
    let hello = this.refs.searchInput.value
    if(hello !== '') {
      $(`.card span:contains(${hello})`).addClass("matched");
      $(`.card p:contains(${hello})`).addClass("matched");
    }
  }

  showSearcher(){
    return(
      <input type="text" className="search-input" placeholder="buscar profesor" ref='searchInput' onChange={this.handleChange} />
    )
  }

  render(){
    return (
      <div className='row'>
        <div className='admin-title'>
          <h1>Hola {this.props.user.first_name}: Profesores</h1>
          {this.showSearcher()}
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
    profesors: state.profesors,
 }
}

export default connect(mapStateToProps)(Profesors);

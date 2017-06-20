import React from 'react';
import { connect } from 'react-redux';
import { fetchCursos, addCurso } from '../actions/cursos';
import Curso from './Curso';

class Cursos extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
      tiposCurso: ['natacion', 'gimnasio', 'mente', 'hidro'],
      salones: ['piscina', 'salon 1', 'salon 2', 'salon 3', 'salon 4']
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
    this.props.dispatch(fetchCursos(full));
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

    this.props.dispatch(addCurso(nombre, lugar, descripcion, tipoCurso))
    this.toggleDisplay();
  }


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
        <div className="card form-card">
          <form className="input-field">
            <div className="card-content">
              <h3 className='card-title'>Nuevo Curso</h3>
              <p>
                <strong>Nombre:</strong>
                <input type="text" ref='nombre' required/>
              </p>
              <p>
                <strong>Descripcion:</strong>
                <textarea type="text" ref="descripcion" required></textarea>
              </p>
              <p>
                <strong>Tipo Curso:</strong>
                <select className="browser-default" ref="tipo_curso">
                  <option value='natacion'>natación</option>
                  <option>gimnasio</option>
                  <option>hidro</option>
                  <option>mente</option>
                </select>
              </p>
              <p>
                <strong>Lugar:</strong>
                <select className="browser-default" ref="lugar">
                  <option>piscina</option>
                  <option>gimnasio</option>
                  <option value='salon 0'>salón 2 P1</option>
                  <option value='salon 1'>salón 1 P2</option>
                  <option value='salon 2'>salón 2 P2</option>
                </select>
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
    this.props.dispatch(fetchCursos(this.refs.searchInput.value));
    // signals with colors the matched words
    $(`.card span`).removeClass("matched");
    // $(`.card p`).removeClass("matched");
    let hello = this.refs.searchInput.value
    if(hello !== '') {
      $(`.card span:contains(${hello})`).addClass("matched");
      // $(`.card p:contains(${hello})`).addClass("matched");
    }
  }

  showSearcher(){
    return(
      <input type="text" className="search-input" placeholder="buscar curso" ref='searchInput' onChange={this.handleChange} />
    )
  }


  render(){
    return (
      <div className='row cursos-container'>
        <div className='admin-title'>
          <h1>Hola {this.props.user.first_name}: Cursos</h1>
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
    cursos: state.cursos
 }
}

export default connect(mapStateToProps)(Cursos);

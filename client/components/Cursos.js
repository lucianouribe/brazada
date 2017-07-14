import React from 'react';
import { connect } from 'react-redux';
import { fetchCursos, addCurso } from '../actions/cursos';
import { ortografica } from '../helpers';
import Curso from './Curso';

class Cursos extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showForm: false
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
        return(<Curso key={curso.id} curso={curso} tiposCurso={this.state.tiposCurso} salones={this.state.salones}/>);
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
    let avatar = this.refs.avatar.files[0];

    this.props.dispatch(addCurso(nombre, lugar, descripcion, tipoCurso, avatar))
    this.toggleDisplay();
  }





  addForm(){
    let elSalon = this.props.misvis.filter( misvi => { if(misvi.titulo === 'salones') return misvi })

    let elCurso = this.props.misvis.filter( misvi => { if(misvi.titulo === 'tipos_curso') return misvi })

    let cursoType = elCurso[0].articulo.split(", ").map((tipo_curso, i) => {
      return (
        <option type="text" key={i} value={tipo_curso}>{ortografica(tipo_curso)}</option>
      );
    });

    let cualSalon = elSalon[0].articulo.split(", ").map((lugar, i) => {
      return (
        <option type="text" key={i} value={lugar}>{ortografica(lugar)}</option>
      );
    });
    return(
      <div className="col s12 m12">
        <div className="card form-card">
          <form className="input-field" encType="multipart/form-data">
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
                  {cursoType}
                </select>
              </p>
              <p>
                <strong>Lugar:</strong>
                <select className="browser-default" ref="lugar">
                  {cualSalon}
                </select>
              </p>
              <p className="hide">
                <strong>Picture:</strong>
                <input type="file" ref="avatar"/>
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
    cursos: state.cursos,
    misvis: state.misvis
 }
}

export default connect(mapStateToProps)(Cursos);

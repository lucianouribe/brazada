import React from 'react';
import { connect } from 'react-redux';
import { editCurso, deleteCurso } from '../actions/cursos';
import { ortografica, createMarkup, capitalizer } from '../helpers';


class Curso extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      files: [],
      preview: false
    }

    this.toggleEdit = this.toggleEdit.bind(this);
    this.displayCurso = this.displayCurso.bind(this);
    this.editCurso = this.editCurso.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectFiles = this.selectFiles.bind(this);
    this.imageRender = this.imageRender.bind(this);
  }

  toggleEdit() {
    this.setState({edit: !this.state.edit});
  }

  selectFiles(){
    let file = this.refs.avatar.files[0];
    let reader = new FileReader();
    let url = reader.readAsDataURL(file);

    reader.onloadend = (e) => {
      this.setState({
          files: [reader.result]
      })
    }

  }

  imageRender(){
    var preview = this.state.files.map( (f, x) => {
      return(
        <div key={x}>
          <img src={f} />
        </div>
      )
    });
    return(<div>{preview}</div>)
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('Curso Edit handle submit');
    let nombre = this.refs.nombre.value.toLowerCase();
    let lugar = this.refs.lugar.value;
    let descripcion = this.refs.descripcion.value;
    let tipoCurso = this.refs.tipo_curso.value;

    let url_direccion;
    let avatar;
    if(this.state.files) {
      let filename = Math.random().toString(36).replace(/[^a-z]+/g, '');
      url_direccion = `http://res.cloudinary.com/brazada/image/upload/${filename}.jpg`;
      avatar = this.refs.avatar.files[0]
    }

    this.props.dispatch(editCurso(this.props.curso.id, nombre, lugar, descripcion, tipoCurso, url_direccion, avatar))

    this.toggleEdit();
  }

  editCurso() {
    let curso = this.props.curso;

    // filtra de misvis el salon
    let elSalon = this.props.misvis.filter( misvi => { if(misvi.titulo === 'salones') return misvi })
    // se separan los items del array. Se hace map de cada item
    let cualSalon = elSalon[0].articulo.split(", ").map((donde, i) => {
      let checked = true;
      //si el item coincide con el lugar del curso se marca checked true
      // if(donde === curso.lugar) checked={true}
      if(donde === curso.lugar)
        return (
          <option type="text" key={i} selected={checked} value={donde}>{ortografica(donde)}</option>
        );
    });


    let elCurso = this.props.misvis.filter( misvi => { if(misvi.titulo === 'tipos_curso') return misvi })

    let cursoType = elCurso[0].articulo.split(", ").map((tipo_de_curso, i) => {
      let checked = true;
      // if(tipo_de_curso === curso.tipo_curso) checked={true}
      if(tipo_de_curso === curso.tipo_curso)
        return (
          <option type="text" key={i} selected={checked} value={tipo_de_curso}>{ortografica(tipo_de_curso)}</option>
        );
    });

    let image;
    if(this.state.files[0]) {
      image = this.state.files
    } else {
      image = curso.url_direccion
    }

    return(
      <div className="col s12 m4">
        <div className="card form-edit">
          <form encType="multipart/form-data">
            <div className="card-content">
              <p>
                <strong>Nombre:</strong>
                <input type="text" required ref='nombre' defaultValue={curso.nombre} />
              </p>
              <textarea type="text" ref="descripcion" required defaultValue={curso.descripcion} ></textarea>
              <span className="file-attach-stuff">
                <img className="curso-image" src={image} />
                <input className="file-attach" type='file' ref='avatar' onChange={this.selectFiles} />
                <input type="hidden" value={this.state.files} />
              </span>
              <p>
                <strong>Lugar:</strong>
                <select className="browser-default" ref="lugar" required>
                  <option disabled>select</option>
                  {cualSalon}
                </select>
              </p>
              <p>
                <strong>Tipo Curso:</strong>
                <select className="browser-default" ref="tipo_curso" required>
                  <option disabled>select</option>
                  {cursoType}
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
    // console.log(curso)
    return (
      <div className="col s12 m4 l4">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{ capitalizer(ortografica(curso.nombre)) }</span>
            <span className="card-subinfo">
              <span>
                <p><strong>lugar: </strong>{ortografica(curso.lugar)}</p>
                <p><strong>tipo curso: </strong>{ortografica(curso.tipo_curso)}</p>
              </span>
              <img className='curso-image' src={curso.url_direccion} />
            </span>
            <div className="danger" dangerouslySetInnerHTML={createMarkup(curso.descripcion)}/>
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
    misvis: state.misvis
 }
}

export default connect(mapStateToProps)(Curso);

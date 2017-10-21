import React from 'react';
import { connect } from 'react-redux';
import { editMisvi } from '../actions/misvis';
import { createMarkup, ortografica } from '../helpers';


class Misvi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false
    }

    this.toggleEdit = this.toggleEdit.bind(this);
    this.displayMisvi = this.displayMisvi.bind(this);
    this.editMisvi = this.editMisvi.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleEdit() {
    this.setState({edit: !this.state.edit});
  }

  handleSubmit(e){
    e.preventDefault();
    let articulo = this.refs.articulo.value;
    this.props.dispatch(editMisvi(this.props.misvi.id, articulo))
    this.toggleEdit();
  }

  editMisvi() {
    let misvi = this.props.misvi;
    return(
      <div className="col s12 m10 l10 offset-m1 offset-l1">
        <div className="card form-edit-misvi">
          <form>
            <div className="card-content">
              <h6 className="card-title">{ misvi.titulo }</h6>
              <textarea ref='articulo' >{misvi.articulo}</textarea>
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


  displayMisvi(){
    let misvi = this.props.misvi;
    return (
      <div className="col s12 m10 l10 offset-m1 offset-l1">
        <div className="card">
          <div className="card-content">
            <h6 className="card-title">{ ortografica(misvi.titulo) }</h6>
            <div dangerouslySetInnerHTML={createMarkup(misvi.articulo)} />
          </div>
          <div className="card-action">
            <span onClick={this.toggleEdit}><i className="material-icons">mode_edit</i></span>
          </div>
        </div>
      </div>
    )
  }

  render(){
    if(this.state.edit) {
      return(this.editMisvi());
    } else {
      return(this.displayMisvi());
    }
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    misvis: state.misvis
  }
}

export default connect(mapStateToProps)(Misvi);

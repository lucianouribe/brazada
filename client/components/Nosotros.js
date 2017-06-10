import React from 'react';
import { connect } from 'react-redux';
import { createMarkup } from '../helpers';

class Nosotros extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      nosotros: true
    }

    this.displayNosotros = this.displayNosotros.bind(this);
    this.displayReglas = this.displayReglas.bind(this);
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay(){
    this.setState({nosotros: !this.state.nosotros})
  }


  displayReglas(){
    let nosotros = this.props.misvis.filter( misvi => { if(misvi.titulo === 'reglamento') return misvi;})
    return (
      <div className='nosotros-container'>
        <h1>Normativas Generales</h1>
        <div className="nosotros-texto">{Object.keys(nosotros).map( key => <p><div dangerouslySetInnerHTML={createMarkup(nosotros[key].articulo)} /></p>)}</div>
        <div className="btn btn-opt" onClick={this.toggleDisplay}>Atrás</div>
      </div>
    )
  }

  displayNosotros(){
    let nosotros = this.props.misvis.filter( misvi => { if(misvi.articulo.length && misvi.titulo !== 'reglamento') return misvi;})

    return (
      <div className='nosotros-container'>
        <h1>Quienes somos</h1>
        <div className="nosotros-texto">{Object.keys(nosotros).map( key => <p key={key}><div dangerouslySetInnerHTML={createMarkup(nosotros[key].articulo)} /></p>)}</div>
        <div className="btn btn-opt" onClick={this.toggleDisplay}>Normas</div>
      </div>
    )
  }

  render(){
    if(this.state.nosotros){
      return(this.displayNosotros());
    } else {
      return(this.displayReglas());
    }
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    misvis: state.misvis
  }
}

export default connect(mapStateToProps)(Nosotros);

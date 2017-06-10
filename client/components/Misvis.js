import React from 'react';
import { connect } from 'react-redux';
import { fetchMisvis } from '../actions/misvis';
import Misvi from './Misvi';

class Misvis extends React.Component {

  constructor(props){
    super(props);

    this.displayMisvis = this.displayMisvis.bind(this);
  }

  componentDidMount(){
    this.props.dispatch(fetchMisvis());
  }

  displayMisvis(){
    let misvis = this.props.misvis;
    if(misvis.length) {
      return misvis.map( misvi => {
        return(<Misvi key={misvi.id} misvi={misvi} />);
      })
    }
  }

  render(){
    return (
      <div className='row'>
        <div className='admin-title'>
          <h1>Hola {this.props.user.first_name}: Nosotros</h1>
        </div>
        {this.displayMisvis()}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    misvis: state.misvis
  }
}

export default connect(mapStateToProps)(Misvis);

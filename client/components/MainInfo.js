import React from 'react';
import { connect } from 'react-redux';

class MainInfo extends React.Component {

  render(){
    let dale = this.props.descripcion
    return (
      <div className="main-info">
        {Object.keys(dale).map(key => <p key={key}>{dale[key].descripcion}</p>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(MainInfo);

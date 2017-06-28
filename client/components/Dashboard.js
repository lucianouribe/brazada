import React from 'react';
import { connect } from 'react-redux';
import DashButtons from './DashButtons';

class Dashboard extends React.Component {
  render(){
    return(
      <div className="dashboard yes-cellphone">
        <DashButtons setRenderOption={this.props.setRenderOption}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user}
}

export default connect(mapStateToProps)(Dashboard);

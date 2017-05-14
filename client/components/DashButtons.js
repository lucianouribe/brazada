import React from 'react';
import { connect } from 'react-redux';

class DashButtons extends React.Component {
  render(){
    let user = this.props.user
    return (
      <div>
        <div className="admin-content right col s12 m8 l8">
          {`Hello , ${user.first_name} Welcome. This is DashButtons`}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user}
}

export default connect(mapStateToProps)(DashButtons);

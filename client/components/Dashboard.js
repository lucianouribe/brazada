import React from 'react';
import { connect } from 'react-redux';
import DashButtons from './DashButtons';

const Dashboard = ({ user }) => (
  <div className="dashboard col s12 m2 l2 left">
    {`${user.first_name}, Welcome`}
    <DashButtons />
  </div>
)

const mapStateToProps = (state) => {
  return { user: state.user}
}

export default connect(mapStateToProps)(Dashboard);

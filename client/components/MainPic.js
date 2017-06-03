import React from 'react';
import { connect } from 'react-redux';

class MainPic extends React.Component {
  render(){
    return (
      <div className={`${this.props.menus} ${this.props.submenus}-pic main-picture`}>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    menus: state.menus,
    submenus: state.submenus,
  }
}

export default connect(mapStateToProps)(MainPic);

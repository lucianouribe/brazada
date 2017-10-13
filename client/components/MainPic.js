import React from 'react';
import { connect } from 'react-redux';

class MainPic extends React.Component {
  
  render(){
    let picture;
    if(this.props.laFoto) {
      picture = this.props.laFoto.url_direccion
    } else {
      picture = 'http://bitacoradelmotoneto.files.wordpress.com/2016/01/peterhoff-20140801_144025.jpg?w=648'
    }
    return (
      <div className="main-picture">
        <img src={picture} />
      </div>
    )
  }
}
// <div className={`${this.props.menus} ${this.props.submenus}-pic main-picture`}>
//   <img src={picture} />
// </div>
const mapStateToProps = (state) => {
  return {
    menus: state.menus,
    submenus: state.submenus,
  }
}

export default connect(mapStateToProps)(MainPic);

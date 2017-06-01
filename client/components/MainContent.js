import React from 'react';
import { connect } from 'react-redux';
import MainInfo from './MainInfo';
import MainButtons from './MainButtons';
import MainPic from './MainPic';


class MainContent extends React.Component {

  render(){
    let descripcion = this.props.infoToContent;
    return (
      <div>
        <MainInfo descripcion={descripcion}/>
        <MainPic />
        <MainButtons />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(MainContent);

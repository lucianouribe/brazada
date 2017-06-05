import React from 'react';
import { connect } from 'react-redux';
import MainInfo from './MainInfo';
import MainButtons from './MainButtons';
import MainPic from './MainPic';


class MainContent extends React.Component {
  constructor(props) {
    super(props);

    this.mainOderFrame = this.mainOderFrame.bind(this);
  }

  mainOderFrame(){
    // just change this.props.infoToContent.lugar
    let whichRoom = 'brazada';
    if(this.props.order === 'instalaciones') {
      return (
        <div className="iframe">
          <i className="material-icons right" onClick={() => this.props.infoGatherer(null)}>close</i>
          <iframe src={`http://imagenes360.net/${whichRoom}`} seamless></iframe>
        </div>
      )
    } else {
      return (
        <div className="main-content">
          <MainInfo descripcion={this.props.infoToContent} order={this.props.order}/>
          <MainPic />
          <MainButtons infoGatherer={this.props.infoGatherer}/>
        </div>
      )
    }
  }

  render(){
    return (
      <div >
        {this.mainOderFrame()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(MainContent);

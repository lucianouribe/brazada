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
    // tomar el lugar donde es la clase
    let whichRoom = Object.keys(this.props.infoToContent).map(key => this.props.infoToContent[key].lugar)

    if(this.props.order === 'instalaciones') {
      return (
        <div className="iframe">
          <i className="material-icons right" onClick={() => this.props.infoGatherer(null)}>close</i>
          <iframe src={`../panoramicos/${whichRoom[0]}/`} seamless></iframe>
        </div>
      )
    } else {
      return (
        <div className="main-content">
          <MainInfo descripcion={this.props.infoToContent} order={this.props.order} />
          <MainPic />
          <MainButtons infoGatherer={this.props.infoGatherer} clicked={this.props.clicked}/>
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

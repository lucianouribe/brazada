import React from 'react';
import ContactReader from './ContactReader';
import Responder from './Responder';

class ContactMain extends React.Component {
  constructor(){
    super();

    this.state = {
      mailer: false,
      whoTo: {}
    }

    this.displayRespondMailer = this.displayRespondMailer.bind(this);
    this.displayContactReader = this.displayContactReader.bind(this);
    this.toggleMailer = this.toggleMailer.bind(this);
    this.setReceiver = this.setReceiver.bind(this);
  }

  toggleMailer(){
    this.setState({mailer: !this.state.mailer});
  }

  setReceiver(who){
    this.setState({whoTo: who});
  }


  displayRespondMailer(){
    return (
      <div>
        <Responder toggleMailer={this.toggleMailer} whoTo={this.state.whoTo}/>
      </div>
    )
  }

  displayContactReader(){
    return (
      <div>
        <ContactReader toggleMailer={this.toggleMailer} setReceiver={this.setReceiver}/>
      </div>
    )
  }

  render(){
    if(this.state.mailer) {
      return(this.displayRespondMailer());
    } else {
      return(this.displayContactReader());
    }
  }


}




export default ContactMain;

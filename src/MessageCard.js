import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import WelcomeMessage from './Messages/WelcomeMessage';
import CleanedMessage from './Messages/CleanedMessage';
import ServiceMessage from './Messages/ServiceMessage';
import ReadyMessage from './Messages/ReadyMessage';
import DefaultMessage from './Messages/DefaultMessage';
import CustomMessage from './Messages/CustomMessage';

class MessageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guestSelected:[],
      selectGuest: []
    };
    }

  render() {  
    if (this.props.selectValue[2] === this.props.messages[0].title){
      return (
        <Card>
          <WelcomeMessage getGreeting={this.props.getGreeting} guestSelected={this.props.guestSelected} time={this.props.time} guestData={this.props.guestData} selectValue={this.props.selectValue} messages={this.props.messages} messageType={this.props.messageType} value={this.props.value} />
        </Card>
      );
    } else if (this.props.selectValue[2] === this.props.messages[1].title){
        return (
          <Card>
            <CleanedMessage getGreeting={this.props.getGreeting} guestSelected={this.props.guestSelected} time={this.props.time} guestData={this.props.guestData} selectValue={this.props.selectValue} messages={this.props.messages} messageType={this.props.messageType} value={this.props.value} />
          </Card>
        );
    } else if (this.props.selectValue[2] === this.props.messages[2].title){
        return (  
          <Card>
            <ServiceMessage getGreeting={this.props.getGreeting} guestSelected={this.props.guestSelected} time={this.props.time} guestData={this.props.guestData} selectValue={this.props.selectValue} messages={this.props.messages} messageType={this.props.messageType} value={this.props.value} />
          </Card>
        );
    } else if (this.props.selectValue[2] === this.props.messages[3].title){
        return (       
          <Card>
            <ReadyMessage getGreeting={this.props.getGreeting} guestSelected={this.props.guestSelected} time={this.props.time} guestData={this.props.guestData} selectValue={this.props.selectValue} messages={this.props.messages} messageType={this.props.messageType} value={this.props.value} />
          </Card>
        );
    } else if (this.props.selectValue[2] === this.props.messages[4].title){
      return (       
          <CustomMessage getGreeting={this.props.getGreeting} guestSelected={this.props.guestSelected} time={this.props.time} guestData={this.props.guestData} selectValue={this.props.selectValue} messages={this.props.messages} messageType={this.props.messageType} value={this.props.value} />
        );    
      } else {
          return (
          <Card>
          <DefaultMessage getGreeting={this.props.getGreeting} guestSelected={this.props.guestSelected} time={this.props.time} guestData={this.props.guestData} selectValue={this.props.selectValue} messages={this.props.messages} messageType={this.props.messageType} value={this.props.value} />
          </Card>
          );  
    }     
  }
}
export default MessageCard;

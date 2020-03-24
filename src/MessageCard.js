import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import WelcomeMessage from './Messages/WelcomeMessage';
import CleanedMessage from './Messages/CleanedMessage';
import ServiceMessage from './Messages/ServiceMessage';
import ReadyMessage from './Messages/ReadyMessage';
import DefaultMessage from './Messages/DefaultMessage';

class MessageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guestSelected:[],
      selectGuest: []
    };
    }
  getGuest(){
    let selectGuest;
    if (typeof this.props.selectValue[1]  === "string"){
        selectGuest = 'Select guest ID';
        } else { 
        selectGuest = this.props.selectValue[1] -1;
        }
    return selectGuest
    this.setState({selectGuest: selectGuest})
    console.log(this.state.selectGuest);
  }

  render() {  
    if (this.props.selectValue[2] === this.props.messages[0].title){
      return (
        <Card>
          <WelcomeMessage getGreeting={this.props.getGreeting} time={this.props.time} guestData={this.props.guestData} selectValue={this.props.selectValue} messages={this.props.messages} messageType={this.props.messageType} value={this.props.value} selectValue={this.props.selectValue} />
        </Card>
      );
    } else if (this.props.selectValue[2] === this.props.messages[1].title){
        return (
          <Card>
            <CleanedMessage getGreeting={this.props.getGreeting} time={this.props.time} guestData={this.props.guestData} selectValue={this.props.selectValue} messages={this.props.messages} messageType={this.props.messageType} value={this.props.value} selectValue={this.props.selectValue} />
          </Card>
        );
    } else if (this.props.selectValue[2] === this.props.messages[2].title){
        return (  
          <Card>
            <ServiceMessage getGreeting={this.props.getGreeting} time={this.props.time} guestData={this.props.guestData} selectValue={this.props.selectValue} messages={this.props.messages} messageType={this.props.messageType} value={this.props.value} selectValue={this.props.selectValue} />
          </Card>
        );
    } else if (this.props.selectValue[2] === this.props.messages[3].title){
        return (       
          <Card>
            <ReadyMessage getGreeting={this.props.getGreeting} time={this.props.time} guestData={this.props.guestData} selectValue={this.props.selectValue} messages={this.props.messages} messageType={this.props.messageType} value={this.props.value} selectValue={this.props.selectValue} />
          </Card>
        );
      } else {
          return (
          <Card>
          <DefaultMessage getGreeting={this.props.getGreeting} time={this.props.time} guestData={this.props.guestData} selectValue={this.props.selectValue} messages={this.props.messages} messageType={this.props.messageType} value={this.props.value} selectValue={this.props.selectValue} />
          </Card>
          );  
    }     
  }
}
export default MessageCard;

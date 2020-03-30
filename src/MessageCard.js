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

    };
    }

  render() {  
    const { selectValue, messages, getGreeting, companySelected, guestSelected, time, guestData, messageType, value } = this.props
    if (selectValue[2] === messages[0].title){
      return (
        <Card>
          <WelcomeMessage getGreeting={getGreeting} companySelected={companySelected} guestSelected={guestSelected} time={time} guestData={guestData} selectValue={selectValue} messages={messages} messageType={messageType} value={value} />
        </Card>
      );
    } else if (selectValue[2] === messages[1].title){
        return (
          <Card>
            <CleanedMessage getGreeting={getGreeting} companySelected={companySelected} guestSelected={guestSelected} time={time} guestData={guestData} selectValue={selectValue} messages={messages} messageType={messageType} value={value} />
          </Card>
        );
    } else if (selectValue[2] === messages[2].title){
        return (  
          <Card>
            <ServiceMessage getGreeting={getGreeting} companySelected={companySelected} guestSelected={guestSelected} time={time} guestData={guestData} selectValue={selectValue} messages={messages} messageType={messageType} value={value} />
          </Card>
        );
    } else if (selectValue[2] === messages[3].title){
        return (       
          <Card>
            <ReadyMessage getGreeting={getGreeting} companySelected={companySelected} guestSelected={guestSelected} time={time} guestData={guestData} selectValue={selectValue} messages={messages} messageType={messageType} value={value} />
          </Card>
        );
    } else if (selectValue[2] === messages[4].title){
      return (       
          <CustomMessage getGreeting={getGreeting} companySelected={companySelected} guestSelected={guestSelected} time={time} guestData={guestData} selectValue={selectValue} messages={messages} messageType={messageType} value={value} />
        );    
      } else {
          return (
          <Card>
          <DefaultMessage getGreeting={getGreeting} companySelected={companySelected} guestSelected={guestSelected} time={time} guestData={guestData} selectValue={selectValue} messages={messages} messageType={messageType} value={value} />
          </Card>
          );  
    }     
  }
}
export default MessageCard;

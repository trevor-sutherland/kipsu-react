import React, { Component } from 'react';
import { Card } from "react-bootstrap";
import WelcomeMessage from './WelcomeMessage';
import CleanedMessage from './CleanedMessage';
import ServiceMessage from './ServiceMessage';
import ReadyMessage from './ReadyMessage';
import DefaultMessage from './DefaultMessage';
import CustomMessage from './CustomMessage';

class MessageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }  

  render() {  

    //Logic for which message card to display based on user selection
    const { selectValue, messages, getGreeting, companySelected, guestSelected, guestData, time } = this.props

    if (!messages[0]) return null;
    if (!guestData) return null;

    if (selectValue[2] === messages[0].title){
      return (
        <Card>
          <WelcomeMessage getGreeting={getGreeting} companySelected={companySelected} guestSelected={guestSelected} guestData={guestData} selectValue={selectValue} messages={messages} />
        </Card>
      );
    } else if (selectValue[2] === messages[1].title){
        return (
          <Card>
            <CleanedMessage getGreeting={getGreeting} guestSelected={guestSelected} guestData={guestData} selectValue={selectValue} time={time} messages={messages} />
          </Card>
        );
    } else if (selectValue[2] === messages[2].title){
        return (  
          <Card>
            <ServiceMessage getGreeting={getGreeting} companySelected={companySelected} guestSelected={guestSelected} guestData={guestData} selectValue={selectValue} messages={messages} />
          </Card>
        );
    } else if (selectValue[2] === messages[3].title){
        return (       
          <Card>
            <ReadyMessage getGreeting={getGreeting} guestSelected={guestSelected} guestData={guestData} selectValue={selectValue} messages={messages}/>
          </Card>
        );
    } else if (selectValue[2] === messages[4].title){
      return (       
          <CustomMessage companySelected={companySelected} guestSelected={guestSelected} guestData={guestData} selectValue={selectValue} />
        );    
      } else {
          return (
          <Card>
          <DefaultMessage companySelected={companySelected} guestSelected={guestSelected} guestData={guestData} selectValue={selectValue}/>
          </Card>
          );  
    }     
  }
  
}
export default MessageCard;

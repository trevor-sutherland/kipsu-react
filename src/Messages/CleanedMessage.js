import React, { Component } from 'react';
import { Card } from "react-bootstrap";

class CleanedMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    }
    
	render(){

		//Logic for which object to use based on if user chose from dropdown

		const { messages, selectValue, guestSelected, time, getGreeting } = this.props
		let firstName;
		let roomNumber;
		if (guestSelected === undefined || guestSelected.firstName === undefined){
			firstName = selectValue[1];
			roomNumber = selectValue;
			
		} else {
			firstName = guestSelected.firstName;
			roomNumber = guestSelected.reservation.roomNumber;
		}
		return(
			<Card.Body>
		    <Card.Title>
		    {selectValue[2]}
		    </Card.Title>
		    {getGreeting()}{firstName}, your room #{roomNumber}{messages[1].beginning} {time}. {messages[1].closing}
		    </Card.Body>
		);
}
}
export default CleanedMessage;
import React, { Component } from 'react';
import { Card } from "react-bootstrap";

//Renders ready message card

class ReadyMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    }

	render(){
		
		//Logic for which object to use based on if user chose from dropdown

		const { messages, selectValue, guestSelected, getGreeting } = this.props
		let firstName;
		let roomNumber;
		if (guestSelected === undefined || guestSelected.firstName === undefined){
			firstName = selectValue;
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
		    {getGreeting()}{firstName}{messages[3].beginning}{selectValue === "Select a guest ID" ? 'Choost a guest ID' : roomNumber} {selectValue[3]}{messages[3].closing}
		    </Card.Body>
		);
}
}
export default ReadyMessage;
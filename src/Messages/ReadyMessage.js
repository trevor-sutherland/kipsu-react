import React, { Component } from 'react';
import { Card } from "react-bootstrap";

class ReadyMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    }

	render(){
		let firstName;
		let roomNumber;
		const selectValue = this.props.selectValue[1];
		const guestSelected = this.props.guestSelected;
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
		    {this.props.selectValue[2]}
		    </Card.Title>
		    {this.props.getGreeting()}{firstName}{this.props.messages[3].beginning}{selectValue === "Select a guest ID" ? 'Choost a guest ID' : this.props.guestSelected.reservation.roomNumber} {this.props.selectValue[3]}{this.props.messages[3].closing}
		    </Card.Body>
		);
}
}
export default ReadyMessage;
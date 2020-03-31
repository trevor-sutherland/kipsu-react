import React, { Component } from 'react';
import { Card } from "react-bootstrap";

//Renders default message card

class DefaultMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    }
    
	render(){	
		
		//Logic for which object to use based on if user chose from dropdown

		const { selectValue, guestSelected } = this.props
		let firstName;
		if (guestSelected === undefined || guestSelected.firstName === undefined){
			firstName = selectValue[1];
		} else {
			firstName = guestSelected.firstName;
		}
		return(
			<Card.Body>
		    <Card.Title style={{ color: 'IndianRed' }}>
		    {selectValue[2]}
		    </Card.Title>
		    {firstName} | {selectValue[0]} | {selectValue[2]}
		    </Card.Body>
		);
}
}
export default DefaultMessage;
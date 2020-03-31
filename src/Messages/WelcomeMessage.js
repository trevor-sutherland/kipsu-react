import React, { Component } from 'react';
import { Card } from "react-bootstrap";

class WelcomeMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	guestSelected:[],
      	selectGuest: []
    };
    }
    
	render(){
		
		//Logic for which object to use based on if user chose from dropdown		
		
		const { messages, selectValue, guestSelected, getGreeting} = this.props
		let firstName;
		if (guestSelected === undefined || guestSelected.firstName === undefined){
			firstName = selectValue[1];
		} else {
			firstName = guestSelected.firstName;
		}	
		return(
			<Card.Body>
		    <Card.Title>
		    {this.props.selectValue[2]}
		    </Card.Title>
		    {getGreeting()}{firstName}{messages[0].beginning}{selectValue[0]}{messages[0].closing}
		    </Card.Body>
		);
}
}
export default WelcomeMessage;
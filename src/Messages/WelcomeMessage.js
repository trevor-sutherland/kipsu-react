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
		let firstName;
		const selectValue = this.props.selectValue[1];
		const guestSelected = this.props.guestSelected;
		if (guestSelected === undefined || guestSelected.firstName === undefined){
			firstName = selectValue;
		} else {
			firstName = guestSelected.firstName;
		}	
		return(
			<Card.Body>
		    <Card.Title>
		    {this.props.selectValue[2]}
		    </Card.Title>
		    {this.props.getGreeting()}{firstName}{this.props.messages[0].beginning}{this.props.selectValue[0]}{this.props.messages[0].closing}
		    </Card.Body>
		);
}
}
export default WelcomeMessage;
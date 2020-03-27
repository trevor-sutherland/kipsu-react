import React, { Component } from 'react';
import { Card } from "react-bootstrap";

class DefaultMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
		    {firstName} | {this.props.selectValue[0]} | {this.props.selectValue[2]}
		    </Card.Body>
		);
}
}
export default DefaultMessage;
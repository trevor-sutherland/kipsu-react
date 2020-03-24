import React, { Component } from 'react';
import { Card } from "react-bootstrap";

class CleanedMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    }
    
	render(){
		const guestSelect = this.props.selectValue[1] - 1;	
		return(
			<Card.Body>
		    <Card.Title>
		    {this.props.selectValue[2]}
		    </Card.Title>
		    {this.props.getGreeting()}{this.props.guestData[guestSelect].firstName}, your room #{this.props.guestData[guestSelect].reservation.roomNumber}{this.props.messages[1].beginning} {this.props.time}. {this.props.messages[1].closing}
		    </Card.Body>
		);
}
}
export default CleanedMessage;
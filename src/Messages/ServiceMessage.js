import React, { Component } from 'react';
import { Card } from "react-bootstrap";

class ServiceMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	guestSelected:[],
      	selectGuest: []
    };
    }

	render(){
		const guestSelect = this.props.selectValue[1] - 1;	
		return(
			<Card.Body>
		    <Card.Title>
		    {this.props.selectValue[2]}
		    </Card.Title>
		    {this.props.getGreeting()}{this.props.guestData[guestSelect].firstName}{this.props.messages[2].beginning}{this.props.selectValue[2]}{this.props.messages[2].closing}
		    </Card.Body>
		);
}
}
export default ServiceMessage;
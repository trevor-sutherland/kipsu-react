import React, { Component } from 'react';
import { Card } from "react-bootstrap";

class ReadyMessage extends Component {
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
		    {this.props.getGreeting()}{this.props.guestData[guestSelect].firstName}{this.props.messages[3].beginning}{this.props.selectValue[3]}{this.props.messages[3].closing}
		    </Card.Body>
		);
}
}
export default ReadyMessage;
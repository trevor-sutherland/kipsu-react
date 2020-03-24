import React, { Component } from 'react';
import { Card } from "react-bootstrap";

class DefaultMessage extends Component {
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
		    {this.props.guestData[guestSelect].firstName} | {this.props.selectValue[2]} | {this.props.selectValue[0]}
		    </Card.Body>
		);
}
}
export default DefaultMessage;
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

    getGuest(){
    let selectGuest;
    if (typeof this.props.selectValue[1]  === "string"){
        selectGuest = 'Select guest ID';
        } else { 
        selectGuest = this.props.selectValue[1] -1;
        }
    return selectGuest
    this.setState({selectGuest: selectGuest})
    console.log(this.state.selectGuest);
  	}
	render(){
		const guestSelect = this.props.selectValue[1] - 1;	
		return(
			<Card.Body>
		    <Card.Title>
		    {this.props.selectValue[2]}
		    </Card.Title>
		    {this.props.getGreeting()}{this.props.guestData[guestSelect].firstName}{this.props.messages[0].beginning}{this.props.selectValue[0]}{this.props.messages[0].closing}
		    </Card.Body>
		);
}
}
export default WelcomeMessage;
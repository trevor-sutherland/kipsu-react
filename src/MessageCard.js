import React, { Component } from 'react';
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



class MessageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: '/Message.json',
      companyData: [],
      guestData: [],
      hour: null,
      message: [],
    };
  }
getHour = () => {
   const date = new Date();
   const hour = date.getHours()
   this.setState({
      hour
   });
  }
  componentDidMount() {

    this.getHour()
     
     axios.get(this.state.url)
      .then((response) => {
        console.log(response.data);
        this.setState({
          data: response.data
      })
        console.log(this.state.data);
      })

      .catch((error) =>console.log(error));

  }   

  renderItems() {

      return this.state.data.map((item) => ( 
      <Card.Body>
    	<Card.Title>
    	{item.title}
    	</Card.Title>
    	{this.state.hour <= 12 ? 'Good morning, ' : 'Good evening'}{item.beginning}{item.closing}
    	</Card.Body> 
      )); 
    }

  render() {
      return (
      <React.Fragment>
      {this.renderItems()}
      </React.Fragment>
      );


    
  }
}

export default MessageCard;
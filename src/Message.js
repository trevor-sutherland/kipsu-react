import React, { Component } from 'react';
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import CompanyData from './CompanyData';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messagedata: [],
    };
  }

   componentDidMount() {
    const url = '/Message.json';

     axios.get(url)
      .then((response) => {
        this.setState({
          messagedata: response.data.messages
        })
        console.log(this.state.companydata);
      })
      .catch((error) =>console.log(error));
  }   


  render() {
    return (
    <Card>
  <Card.Body>
    <Card.Title>{this.state.companydata ? <CompanyData /> : console.log(this.state)}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content. Some quick example text to build on the card title and make up the bulk of
      the card's content. Some quick example text to build on the card title and make up the bulk of
      the 
    </Card.Text>
  </Card.Body>
</Card> 
    );
  }
}

export default Message;

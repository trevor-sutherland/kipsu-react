import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import axios from 'axios';
import MessageCard from './MessageCard';


class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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

    const url = `${this.props.data.url}`;
     
     axios.get(url)
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
    
    const url = this.props.data.url;
    
    if (url === '/Guests.json') {
      return this.state.data.map((item) => (
        <option key={item.id} value={item.reservation.roomNumber}>
        {item.reservation.roomNumber}
        </option>
      ));
    } else if (url === '/Companies.json') {
      return this.state.data.map((item) => (
        <option key={item.id} value={item.company}>
        {item.company}
        </option>  
      ));
    } else {
      return this.state.data.map((item) => ( 
        <MessageCard key={item.id} item={item} />
      )); 
    }

  }


  render() {
      return (
      <React.Fragment>
      {this.renderItems()}
      </React.Fragment>
      );


    
  }
}

export default Data;

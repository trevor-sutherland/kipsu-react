import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import GuestSingle from './GuestSingle'
import axios from 'axios';

class GuestData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guestdata: [],
    };
  }

   componentDidMount() {
    const url = '/Guests.json';

     axios.get(url)
      .then((response) => {
        this.setState({
          guestdata: response.data.guests
        })
        console.log(this.state.guestdata);
      })
      .catch((error) =>console.log(error));
  }   

  renderItems() {
    return this.state.guestdata.map((item) => (
      <GuestSingle key={item.id} item={item} />
    ));
  }

  render() {
    return (
    <select multiple className="form-control"  id="formSelect"> 
    <option defaultValue>Select Room</option> 
      {this.renderItems()}
    </select>  
        
      
    );
  }
}

export default GuestData;

import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import GuestData from './GuestData';
import CompanyData from './CompanyData';
import Message from './Message';



class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a className="btn btn-primary sendMessageButton" href="#messageArea" role="button">Message your Client</a>
        </header>

        <div className="container" id="messageArea">
          <h2 className="title">Send your client a message!</h2>

          <div className="row center">

            <div className="col-4">
            <div className="form-group">
            <label className="form-label">Choose Company</label>
                <CompanyData />
            </div>
            <div className="form-group">
            <label className="form-label">Choose Room</label>
                <GuestData />
            </div>

            </div>

            <div className="col-8" id="message">
            <Message className="col-8"/>
            </div>
          </div>
        </div>
      </div>
  );
}
}

export default App;


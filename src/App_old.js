import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import MessageSelect from './MessageSelect';
import CompanySelect from './CompanySelect';
import GuestSelect from './GuestSelect';
import MessageCard from './MessageCard';
import { Card } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: true,
      company: "Select a Company",
      room: "Select a Room.",
      messageType: "Select a message type.",
    };
    this.handleChangeCompany = this.handleChangeCompany.bind(this);
    this.handleChangeRoom = this.handleChangeRoom.bind(this);
    this.handleChangeMessageType = this.handleChangeMessageType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }  
  
  handleChangeRoom (e) {

    const options = e.target.options;
    const value = [];
      for (var i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
          value.push(options[i].value);
        }
      }
      this.setState({room: value});
  }
    handleChangeCompany (e) {

    const options = e.target.options;
    const value = [];
      for (var i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
          value.push(options[i].value);
        }
      }
      this.setState({company: value});
  }
    handleChangeMessageType (e) {

    const options = e.target.options;
    const value = [];
      for (var i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
          value.push(options[i].value);
        }
      }
      this.setState({messageType: value});
  }

  handleSubmit(e) {
    alert("you have chose : " + this.state.room + this.state.messageType + this.state.company);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className="container" id="messageArea">
          <h2 className="title">Send your client a message!</h2>

          <div className="row center">
            <div className="col-4">
            
            <div className="form-group">
            <label className="form-label">Choose Company</label>
              <select multiple className="form-control"  id="formSelect" onChange={this.handleChangeCompany}>   
                <option defaultValue>Select your company</option>
                <CompanySelect />
              </select>  
            </div>
            <div className="form-group">
            <label className="form-label">Choose Room</label>
                <select multiple className="form-control"  id="formSelect" onChange={this.handleChangeRoom}> 
                  <option defaultValue>Select a Room</option> 
                  <GuestSelect />
                </select>
            </div>
            <div className="form-group">
            <form onSubmit={this.handleSubmit}>
            <label  className="form-label">Choose Message Type</label>
                <select className="form-control" id="formSelect" multiple onChange={this.handleChangeMessageType}> 
                  <option defaultValue>Select a Type</option> 
                  <MessageSelect />
                </select>
                <input type="submit" value="Submit" />
            </form>
            </div>


            </div>

            <div className="col-8" id="message">
                <label className="form-label">Message will display below</label>
                <Card>
                  <MessageCard value={this.state.value} className="col-8"/>
                </Card>
            </div>
          </div>
        </div>
      </div>
  );
}
}

export default App;


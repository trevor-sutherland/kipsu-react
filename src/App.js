import React from 'react';
import './App.css';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import * as Data from './renderData.js';
//import Message from './Message';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <a className="btn btn-primary sendMessageButton" href="#companySelect" role="button">Message your Client</a>
      </header>

      <div className="container" id="messageArea">
      <h2 className="title">Send your client a message!</h2>

          <div className="row center">

            <div className="col-4">
            <Form id="messageForm">
                <Form.Group>
                <Form.Label>Select Company</Form.Label>
                <Form.Control as="select" id="companySelect">
                <option value='select-a-company' defaultValue>Select an option</option>
                </Form.Control>
                </Form.Group>

                <Form.Group>
                <Form.Label>Select room number</Form.Label>
                <Form.Control as="select" id="guestSelect">
                <option value='select-a-room' defaultValue>Select and option</option>
                </Form.Control>
                </Form.Group>
                <div class="col-sm">
                <button type="submit" class="btn btn-primary mb-2">Submit</button>
                </div>
            </Form>              
               
    </div>
      <div className="col-8" id="message">
    </div>
  </div></div></div>
  );
}


/*class MessageForm extends React.Component {
  render() {
    return (
        <Form id="messageForm">
                <Form.Group>
                <Form.Label>Select Company</Form.Label>
                <Form.Control as="select" id="companySelect">
                <option value='select-a-company' defaultValue>Select an option</option>
                </Form.Control>
                </Form.Group>

                <Form.Group>
                <Form.Label>Select room number</Form.Label>
                <Form.Control as="select" id="guestSelect">
                <option value='select-a-room' defaultValue>Select and option</option>
                </Form.Control>
                </Form.Group>
                <div class="col-sm">
                <button type="submit" class="btn btn-primary mb-2">Submit</button>
                </div>
            </Form>              
      )
  }
}
*/
export default App;


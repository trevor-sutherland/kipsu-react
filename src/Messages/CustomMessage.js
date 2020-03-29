import React, { Component } from 'react';
import { Form } from "react-bootstrap";
class CustomMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guestSelected:[],
      selectGuest: [],
      customizeMessage: "",
      customMessage: "Your Message will appear here"
    };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClear = this.handleClear.bind(this);
    }
    handleChange(e){
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    handleSubmit(e){
      e.preventDefault();
      this.setState({
      customMessage: [...this.state.customeMessage += this.state.customizeMessage + " "]
    })
      this.setState({customizeMessage: ""});
    }
    handleClear(){
      this.setState({customMessage: ""});
    }
  render() {  
    let firstName;
    const selectValue = this.props.selectValue[1];
    const guestSelected = this.props.guestSelected;
    if (guestSelected === undefined || guestSelected.firstName === undefined){
      firstName = selectValue;
    } else {
      firstName = guestSelected.firstName;
    }
      return (
         <div> 
          <Form className="customMessage" onSubmit={this.handleSubmit}>
          <Form.Label className="card-title" htmlFor='customizeMessage'>
          <input
            type="text"
            placeholder='Enter custom title'
            id='customizeMessage' 
            name="customizeMessage"
          />
          <h5>{this.props.selectValue[2]}</h5>
          </Form.Label>
          <p>{this.state.customMessage}</p>
          <Form.Control 
            as="textarea" 
            rows="3"
            placeholder='Enter your custom message here'
            id='customizeMessage' 
            name="customizeMessage" 
            value={this.state.customizeMessage}
            onChange={this.handleChange}
            />
          <button value="Click Me">Insert Text</button>
          </Form>
          <button onClick={this.handleClear}>Clear</button>
        </div>
      );  
  }     
}

export default CustomMessage;

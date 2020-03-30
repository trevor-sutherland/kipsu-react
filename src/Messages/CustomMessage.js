import React, { Component } from 'react';
import { Form } from "react-bootstrap";
class CustomMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guestSelected:[],
      selectGuest: [],
      customizeMessage: [],
      defaultMessage: "Your message will construct here when you choose buttons.",
      customMessage: [],
      customizeTitle: "",
      messageTitle: "Custom Title",
      company: []
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleTitle = this.handleTitle.bind(this);
      this.changeTitle = this.changeTitle.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClear = this.handleClear.bind(this);
      this.handleFirstName = this.handleFirstName.bind(this);
      this.handleRoomNumber = this.handleRoomNumber.bind(this);
      this.handleCompanyName = this.handleCompanyName.bind(this);
      this.handleCity = this.handleCity.bind(this);
    }

    handleChange(e){
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    changeTitle(e){
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleTitle(e){
      e.preventDefault();
      this.setState({
      messageTitle: [this.state.customizeTitle]
    });
      this.setState({customizeTitle: ""});
    }

    handleSubmit(e){
      e.preventDefault();
      this.setState({
      customMessage: [...this.state.customMessage, this.state.customizeMessage, " "]
    })
      this.setState({customizeMessage: ""});
    }

    handleClear(){
      this.setState({customMessage: ""});
    }

    handleFirstName(){
    const { selectValue, guestSelected } = this.props;
    let firstName;
    if (guestSelected === undefined || guestSelected.firstName === undefined){
      firstName = selectValue[1];
    } else {
      firstName = guestSelected.firstName;
    }
      this.setState({customMessage: [...this.state.customMessage, firstName, " "]});
    }
    handleRoomNumber(){
      const { selectValue, guestSelected } = this.props;
      let roomNumber;
      if (guestSelected === undefined || guestSelected.firstName === undefined){
        roomNumber = selectValue[1];
      } else {
        roomNumber = guestSelected.reservation.roomNumber;
      }
        this.setState({customMessage: [...this.state.customMessage, roomNumber, " "]});
      }
    
    handleCompanyName(){
      this.setState({ customMessage: [...this.state.customMessage, this.props.selectValue[0], " "]});
    }

    handleCity(){
      const { selectValue, companySelected } = this.props;
      let city;
      if (companySelected === undefined || companySelected.company === undefined){
        city = selectValue[0];
      } else {
        city = companySelected.city;
      }
      this.setState({customMessage: [...this.state.customMessage, city, " "]});
    }

  render() {  
    let message;
    if (this.state.customMessage[0] === undefined) {
      message = this.state.defaultMessage;
    } else {
      message = this.state.customMessage;
    }     
    return (
         <div> 
          <Form className='customMessage' >
          <Form.Label
            className="card-title" 
            htmlFor='messageTitle'>
          <input
            as="textarea"
            placeholder='Enter custom title...'
            id='customizeTitle' 
            name='customizeTitle'
            value={this.state.custimizeTitle}
            onChange={this.changeTitle}
          />
          <button value="Click Me" onClick={this.handleTitle}>Insert Title</button>
          <h5>{this.state.messageTitle}</h5>
          </Form.Label>
          <p>{message}</p>
          <Form.Control 
            as="textarea" 
            rows="3"
            placeholder='Enter your custom message here...'
            id='customizeMessage' 
            name="customizeMessage" 
            value={this.state.customizeMessage}
            onChange={this.handleChange}
            />
          </Form>
          <button value="Insert Text" onClick={this.handleSubmit}>Insert Text</button>
          <button value="Guest Name" onClick={this.handleFirstName}>Guest Name</button>
          <button value="Company Name" onClick={this.handleCompanyName}>Company Name</button>
          <button value="City" onClick={this.handleCity}>City</button>
          <button value="Room Number" onClick={this.handleRoomNumber}>Room Number</button>
          <button value="Clear" className='clearButton'onClick={this.handleClear}>Clear</button>
          
        </div>
      );  
  }     
}

export default CustomMessage;

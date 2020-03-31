import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import MessageSelect from './Selectors/MessageSelect';
import CompanySelect from './Selectors/CompanySelect';
import GuestSelect from './Selectors/GuestSelect';
import MessageCard from './Messages/MessageCard';

class App extends Component {
  constructor(props) {
    super(props); 
        this.state = {
          messages: [],
          companyData: [],
          guestData: [],
          time: null,
          hour: null,
          minutes: null,
          greeting:[],
          selectValue: ["Select a company", "Select a guest ID", "Select a Message Type"],
          guestSelected: [],
          companySelected: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.getHour = this.getHour.bind(this);
    this.getGreeting = this.getGreeting.bind(this);

  }
  
  //Add zero like regular clock
  addZero(i) {
    if (i < 10){
      i = "0" + i;
    }
    return i;
   }
  //Change to 12 hour clock
  /*twelveHour(i) {
    if (i > 12) {
      i = i - 12;
    }
    return i;
   }*/
  getHour() {
    const date = new Date();
    const hour = this.addZero(date.getHours());
    const minutes = this.addZero(date.getMinutes());
    const time = hour + ":" + minutes;

    this.setState({time});
    this.setState({minutes});
    this.setState({hour});
    }



  //Get greeting based on time of day.
  getGreeting() {
    let greeting;
    if (this.state.hour >=12 && this.state.hour <= 17){
      greeting = 'Good afternoon, ';
    } else if (this.state.hour >=17){
      greeting = 'Good evening, ';
    } else {
      greeting = 'Good morning, ';
    }
    return greeting
  }

  //Splices selectValue state based on selection.
  handleChange (e, index) {
    const options = e.target.options;
    const selectValue = [...this.state.selectValue];
      for (var i = 0, l = options.length; i < l; i++) {  
        if (options[i].selected && selectValue.indexOf(options[i].value) === -1){
          selectValue.splice(index, 1, options[i].value);
        }
      }
    this.setState({selectValue}, this.handleGuestState);  
    this.setState({selectValue}, this.handleCompanyState);  
 };   

  //Create single guest object to pass down.
  handleGuestState = () => {
    if (!this.state.guestData) return null;
    const selectedGuestID = parseInt (this.state.selectValue[1]);
    const guestSelected = this.state.guestData.find(item=> item.id === selectedGuestID);
    this.setState({
      guestSelected: guestSelected
    });
  }

  //Create single company object to pass down.
  handleCompanyState = () => {
    const selectedCompany = (this.state.selectValue[0]);
    const companySelected = this.state.companyData.find(item=> item.company === selectedCompany);
    this.setState({
      companySelected: companySelected
    });
  }

  //calling current greeting and hour
  componentDidMount() { 
        //Get current Message Data
    
        axios.get('https://trevor-sutherland.github.io/trevor-interview-code-project/Message.json')
        .then((response) => {
             this.setState({
              messages: response.data
           })
         })
            
        .catch((error) =>console.log(error));
        
        //Get current Guest Data 
        
        axios.get('https://trevor-sutherland.github.io/trevor-interview-code-project/Guests.json')
        .then((response) => {
             this.setState({
              guestData: response.data
           })
         })
            
        .catch((error) =>console.log(error));
        
        //Get current Company Data
    
        axios.get('https://trevor-sutherland.github.io/trevor-interview-code-project/Companies.json')
        .then((response) => {
             this.setState({
              companyData: response.data
           })
         })
            
        .catch((error) =>console.log(error));
        
    
    
    
    this.getHour();
    this.getGreeting();
    
  }

  render()  {
    

    return (
      <div className="App">
        <header className="App-header">
          <h1>For Hiring Consideration</h1>
        </header>

        <div className="container" id="messageArea">
          <h2 className="title">Send your client a message!</h2>

          <div className="row center">
            <div className="col-4">
            <div className="form-group">
            <form onSubmit={this.handleSubmit}>
            <label  className="form-label">Choose Message Type</label>
                <select className="form-control" id="formSelect" onChange={(e) => this.handleChange(e, 2)}>  
                  <option default>Select Message Type</option>
                  <MessageSelect messages={this.state.messages} />
                </select>
            </form>
            </div>
            <div className="form-group">
            <label className="form-label">Choose Company</label>
              <select className="form-control"  id="formSelect" onChange={(e) => this.handleChange(e, 0)}>
                <option default>Select a Company</option>
                <CompanySelect companyData={this.state.companyData} />
              </select>  
            </div>
            <div className="form-group">
            <label className="form-label">Choose Guest ID</label>
                <select className="form-control"  id="formSelect" onChange={(e) => this.handleChange(e, 1)}> 
                  <option default>Select a guest ID</option>
                  <GuestSelect guestData={this.state.guestData} />
                </select>
            </div>
            </div>
                <div className="col-8" id="message">
                <label className="form-label">Message will display below</label>
                <MessageCard getGreeting={this.getGreeting} time={this.state.time} companySelected={this.state.companySelected} guestSelected={this.state.guestSelected} guestData={this.state.guestData} selectValue={this.state.selectValue} messages={this.state.messages} messageType={this.state.messageType} value={this.state.value} className="col-8"/>
            </div>
          </div>
        </div>
      </div>
  );
}
}

export default App;


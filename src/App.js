import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import MessageSelect from './MessageSelect';
import CompanySelect from './CompanySelect';
import GuestSelect from './GuestSelect';
import MessageCard from './MessageCard';

class App extends Component {
  constructor(props) {
    super(props); 
        this.state = {
        messages: [     
        {
        "id": 0,
        "title": "Welcome!",
        "beginning": ", and welcome to the ",
        "closing": ". Enjoy your stay, and let us know if you need anything."
        },
        {
        "id": 1,
        "title": "Room has been cleaned.",
        "beginning": ", was finished being cleaned at ",
        "closing": "Let us know if you need anything else!"
        },
        { 
        "id": 2,
        "title": "Room service",
        "beginning": ", your room service is available 24/7 at the ",
        "closing": ". Call anytime and we will bring it to your room."
        },
        { 
        "id": 3,
        "title": "Room is ready!",
        "beginning": " your room #",
        "closing": "is now ready for you. We hope you enjoy your stay and please let us know if you need anything." 
        },
        {
          "id": 4,
          "title": "Custom Message.",
          "beginning": "",
          "closing": ""
        }
      ],
      companyData: [
        {
          "id": 1,
          "company": "Hotel California",
          "city": "Santa Barbara",
          "timezone": "US/Pacific"
        },
        {
          "id": 2,
          "company": "The Grand Budapest Hotel",
          "city": "Republic of Zubrowka",
          "timezone": "US/Central"
        },
        {
          "id": 3,
          "company": "The Heartbreak Hotel",
          "city": "Graceland",
          "timezone": "US/Central"
        },
        {
          "id": 4,
          "company": "The Prancing Pony",
          "city": "Bree",
          "timezone": "US/Central"
        },
        {
          "id": 5,
          "company": "The Fawlty Towers",
          "city": "Torquay",
          "timezone": "US/Eastern"
        }
      ],
      guestData: [
        {
          "id": 1,
          "firstName": "Candy",
          "lastName": "Pace",
          "reservation": {
            "roomNumber": 529,
            "startTimestamp": 1486654792,
            "endTimestamp": 1486852373
          }
        },
        {
          "id": 2,
          "firstName": "Morgan",
          "lastName": "Porter",
          "reservation": {
            "roomNumber": 385,
            "startTimestamp": 1486612719,
            "endTimestamp": 1486694720
          }
        },
        {
          "id": 3,
          "firstName": "Bridgett",
          "lastName": "Richard",
          "reservation": {
            "roomNumber": 141,
            "startTimestamp": 1486520344,
            "endTimestamp": 1486769616
          }
        },
        {
          "id": 4,
          "firstName": "Melisa",
          "lastName": "Preston",
          "reservation": {
            "roomNumber": 417,
            "startTimestamp": 1486614763,
            "endTimestamp": 1486832543
          }
        },
        {
          "id": 5,
          "firstName": "Latoya",
          "lastName": "Herrera",
          "reservation": {
            "roomNumber": 194,
            "startTimestamp": 1486605110,
            "endTimestamp": 1486785126
          }
        },
        {
          "id": 6,
          "firstName": "Hewitt",
          "lastName": "Hopper",
          "reservation": {
            "roomNumber": 349,
            "startTimestamp": 1486660637,
            "endTimestamp": 1486788273
          }
        }
      ],
      handleData: [],
      time: null,
      hour: null,
      minutes: null,
      guestURL:'/Guests.json',
      url: '/Message.json',
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


  handleGuestState = () => {
    const selectedGuestID = parseInt (this.state.selectValue[1]);
    const guestSelected = this.state.guestData.find(item=> item.id === selectedGuestID);
    this.setState({
      guestSelected: guestSelected
    });
  }

  handleCompanyState = () => {
    const selectedCompany = (this.state.selectValue[0]);
    const companySelected = this.state.companyData.find(item=> item.company === selectedCompany);
    this.setState({
      companySelected: companySelected
    });
    console.log(selectedCompany);
  }

  componentDidMount(){
    this.getHour();
    this.getGreeting();
  }

  render()  {
    

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
            <form onSubmit={this.handleSubmit}>
            <label  className="form-label">Choose Message Type</label>
                <select className="form-control" id="formSelect" onChange={(e) => this.handleChange(e, 2)}>  
                  <option default>Select Message Type</option>
                  <MessageSelect />
                </select>
            </form>
            </div>
            <div className="form-group">
            <label className="form-label">Choose Company</label>
              <select className="form-control"  id="formSelect" onChange={(e) => this.handleChange(e, 0)}>
                <option default>Select a Company</option>
                <CompanySelect />
              </select>  
            </div>
            <div className="form-group">
            <label className="form-label">Choose Guest ID</label>
                <select className="form-control"  id="formSelect" onChange={(e) => this.handleChange(e, 1)}> 
                  <option default>Select a guest ID</option>
                  <GuestSelect />
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


import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



class GuestSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: '/Guests.json',
    };
  }

  componentDidMount() {
     
     axios.get(this.state.url)
      .then((response) => {
        this.setState({
          data: response.data
      })
      })

      .catch((error) =>console.log(error));

  }   

  renderItems() {

    return this.state.data.map((item) => (
      <option key={item.id} value={item.id}>
      {item.id}
      </option> 
      ));
    }


  render() {
      return (
      <React.Fragment>
      {this.renderItems()}
      </React.Fragment>
      );


    
  }
}

export default GuestSelect;

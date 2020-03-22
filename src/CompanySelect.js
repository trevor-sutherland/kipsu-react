import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



class CompanySelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: '/Companies.json',
    };
  }

  componentDidMount() {
     
     axios.get(this.state.url)
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

    return this.state.data.map((item) => (
      <option key={item.id} value={item.company}>
      {item.company}
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

export default CompanySelect;

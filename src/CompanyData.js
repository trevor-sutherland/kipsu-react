import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import CompanySingle from './CompanySingle'
import axios from 'axios';

class CompanyData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companydata: [],
    };
  }

   componentDidMount() {
    const url = '/Companies.json';

     axios.get(url)
      .then((response) => {
        this.setState({
          companydata: response.data.companies
        })
        console.log(this.state.companydata);
      })
      .catch((error) =>console.log(error));
  }   

  renderItems() {
    return this.state.companydata.map((item) => (
      <CompanySingle key={item.id} item={item} />
    ));
  }

  render() {
    return (
    <select multiple className="form-control" id="formSelect"> 
    <option defaultValue>Select Room</option> 
      {this.renderItems()}
    </select>  
    );
  }
}

export default CompanyData;

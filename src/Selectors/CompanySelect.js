import React, { Component } from 'react';

//Renders company select dropdown

class CompanySelect extends Component {

  renderItems() {
    return this.props.companyData.map((item) => (
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

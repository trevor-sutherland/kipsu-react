import React, { Component } from 'react';

//Renders guest select dropdown

class GuestSelect extends Component {

  renderItems() {
    return this.props.guestData.map((item) => (
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
